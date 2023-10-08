import { FormError } from "../core/Forms.types"

interface UserProfileFormData {
    additionalTitle: string
    bio: string 
    tags: string[]
}

const useUserProfileExtensionsValidation = () => {
    const validateAdditionalTitle = (value: string): FormError | null => {
        let error: FormError | null = null

        /*
        if (value === "")
            return { message: "Additional title can not be empty" }
        else if (value.length < 2)
            return { message: "Additional title must have at least 2 letters" }

        */

        return error
    }

    const validateBio = (value: string): FormError | null => {
        let error: FormError | null = null

        /*
        if (value === "")
            return { message: "Bio can not be empty" }
        else if (value.length < 2)
            return { message: "Bio must have at least 2 letters" }

        */

        return error
    }

    const checkAllTags = (tagsList: string[]): FormError | null => {
        let error: FormError | null = null 

        /*
        if (tagsList.length === 0)
            error = { message: "You have to add at least 1 tag" }

        */

        return error
    }

    const validateTag = (value: string): FormError | null => {
        let error: FormError | null = null

        if (value === "")
            return { message: "Tag can not be empty" }
        if (value.length < 2)
            return { message: "Tag name should have at least 2 letters/digits" }

        return error
    }

    const validData = (data: UserProfileFormData) => {
        const titleError = validateAdditionalTitle(data.additionalTitle)
        const bioError = validateBio(data.bio)
        const tagsError = checkAllTags(data.tags)

        if (titleError || bioError || tagsError)
            return { errors: { titleError, bioError, tagsError }, valid: false }

        return { valid: true }
    }

    return {
        validateTag,
        checkAllTags,
        validateBio,
        validateAdditionalTitle,
        validData        
    }   
}

export default useUserProfileExtensionsValidation