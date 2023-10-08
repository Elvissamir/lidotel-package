import { ChangeEvent, useContext, useEffect, useState } from "react"
import { LidotelAuthDataContext, UserProfileContext } from "../context"
import { FormErrors } from "../core/Forms.types"
import { addUserExtension, fetchUserProfile, getUser } from "../services/ProfileService/ProfileService"
import { PostUserProfileExtensionRequest } from "../services/ProfileService/ProfileService.requests"
import useUserProfileExtensionsValidation from "./useUserProfileExtensionsValidation"

interface UpdateExtensionParams {
    token: string 
    userId: string 
    apiUrl: string 
    code: string 
    data: string 
}

export interface TagsData {
    value: string
    tagsList: string[]
}

const useUserProfileExtensions = () => {
    const { userProfile } = useContext(UserProfileContext)
    const { auth, LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const [additionalTitle, setAdditionalTitle] = useState("")
    const [bio, setBio] = useState("")
    const [tags, setTags] = useState<TagsData>({
        value: "",
        tagsList: []
    })
    const [isSavingExtensions, setIsSavingExtensions] = useState(false)
    const { validData, validateAdditionalTitle, validateBio, validateTag, checkAllTags } = useUserProfileExtensionsValidation()
    const [errors, setErrors] = useState<FormErrors>({})

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nerrors = {...errors}

        if (e.target.id === "additionalTitle") {
            const error = validateAdditionalTitle(e.target.value)

            if (error)
                nerrors[e.target.id] = error
            else 
                delete nerrors[e.target.id]
            
            setAdditionalTitle(e.target.value)
        }
        else if (e.target.id === "tags") {
            const error = validateTag(e.target.value)

            if (error)
                nerrors[e.target.id] = error
            else 
                delete nerrors[e.target.id]

            const ntagsList = [...tags.tagsList]

            setTags({
                value: e.target.value,
                tagsList: ntagsList
            })
        }

        setErrors(nerrors)
    }

    const onAddTag = () => {
        const nerrors = {...errors}

        const tagError = validateTag(tags.value)
        if (tagError) {
            nerrors["tags"] = tagError
            setErrors(nerrors)

            return 
        }
        else 
            delete nerrors["tags"]

        if (tags.tagsList.length < 5 && !tags.tagsList.find(tag => tag === tags.value)) {
            const ntagsList = [...tags.tagsList]
            ntagsList.push(tags.value)

            const error = checkAllTags(ntagsList)
    
            if (error)
                nerrors["tagsList"] = error
            else 
                delete nerrors["tagsList"]

            setErrors(nerrors)
            return setTags({
                value: "",
                tagsList: ntagsList
            })
        }

        setTags({
            value: "",
            tagsList: [...tags.tagsList]
        })
    }

    const onRemoveTag = (tagName: string) => {
        const ntagsList = tags.tagsList.filter(tag => tag !== tagName)

        const nerrors = {...errors}
        const error = checkAllTags(ntagsList)

        if (error)
            nerrors["tagsList"] = error
        else 
            delete nerrors["tagsList"]

        setErrors(nerrors)
        setTags({
            value: tags.value,
            tagsList: ntagsList
        })
    }

    const onChangeBio = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const nerrors = {...errors}
        const error = validateBio(e.target.value)

        if (error)
            nerrors["bio"] = error
        else 
            delete nerrors["bio"]        

        setErrors(nerrors)
        setBio(e.target.value)
    }

    const updateExtension = async ({ userId, data, code, token, apiUrl }: UpdateExtensionParams) => {
        const request: PostUserProfileExtensionRequest = {
            userId,
            code,
            data,
            dataType: "string"
        }

        console.log('post extension request', request)

        const result = await addUserExtension(token, apiUrl, request)

        return result
    }

    const onSave = async () => {
        if (auth && auth.user && userProfile && LidotelAppConfig) {
            const token = auth.user.access_token
            const apiUrl = LidotelAppConfig.api.baseUri as string
            const tenantId = userProfile.tenantId

            const getUserResult = await getUser(
                token,
                apiUrl,
                tenantId,
                userProfile.email)
    
            if (getUserResult.type === 'Response') {
                console.log('get user result', getUserResult.data.data)
    
                const userByEmail = getUserResult.data.data.find(user => user.email === userProfile.email)

                if (userByEmail) {
                    const extensions = []
        
                    extensions.push({ data: additionalTitle, code: 'jobTitle' })
                    extensions.push({ data: bio, code: 'miniBio' })
    
                    const tagsListString = tags.tagsList.join(",")
                    extensions.push({ data: tagsListString, code: 'tags' })
        
                    if (extensions.length > 0) {
                        console.log('updating extensions', extensions)
                        
                        setIsSavingExtensions(true)
    
                        for (let extension of extensions) {
                            await updateExtension({
                                userId: userByEmail.userId,
                                data: extension.data,
                                code: extension.code,
                                token,
                                apiUrl
                            })
                        }
    
                        setIsSavingExtensions(false)
                    }
                }
                else
                    console.log('failed to find user by email...')
            }
        }
    }

    const getExtensions = async () => {
        if (auth && auth.user && userProfile && LidotelAppConfig) {
            console.log('fetching user extensions...')
            const token = auth.user.access_token
            const apiUrl = LidotelAppConfig.api.baseUri as string

            const result = await fetchUserProfile(token, apiUrl)
    
            if (result.type === 'Response') {
                const extensions = result.data.extensions
    
                console.log('received user extensions ---------->')
                console.log('user extensions', extensions)
    
                const additionalTitleData = extensions.find(extension => extension.code === 'jobTitle')
                const bioData = extensions.find(extension => extension.code === 'miniBio')
                const tagsData = extensions.find(extension => extension.code === 'tags')
    
                if (additionalTitleData)
                    setAdditionalTitle(additionalTitleData.data)
    
                if (bioData)
                    setBio(bioData.data)

                if (tagsData) {
                    setTags({
                        value: "",
                        tagsList: tagsData.data.split(",")
                    })
                }
            }
        }
    }

    const isValidData = () => {
        const validationResult = validData({
            bio,
            tags: tags.tagsList, 
            additionalTitle
        })

        const validationErrors = validationResult.errors
        if (validationErrors) {
            const nerrors = {...errors}

            if (validationErrors.bioError)
                nerrors["bio"] = { message: validationErrors.bioError.message }

            if (validationErrors.tagsError)
                nerrors['tags'] = { message: validationErrors.tagsError.message }

            if (validationErrors.titleError)
                nerrors['additionalTitle'] = { message: validationErrors.titleError.message }

            setErrors(nerrors)
            
            return false
        }

        return true
    }

    useEffect(() => {
        getExtensions()
    }, [ userProfile ])

    return {
        additionalTitle,
        bio,
        tags,
        errors,
        isValidData,
        isSavingExtensions,
        onInputChange,
        onChangeBio,
        onSave,
        onAddTag,
        onRemoveTag
    }
}

export default useUserProfileExtensions