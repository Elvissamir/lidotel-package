import { ChangeEvent } from 'react'
import { Flex } from "@chakra-ui/react"
import LidotelProfileForm from './LidotelProfileForm'
import UserInformationDetails from './UserInformationDetails'
import { TagsData } from '../../hooks/useUserProfileExtensions'
import { FormErrors } from '../../core/Forms.types'

interface LidotelUserInfo {
    email: string 
    firstName: string 
    lastName: string 
    organization: string 
    jobDepartment: string 
    jobTitle: string
}

interface LidotelProfile {
    imageUrl: string
    additionalTitle: string 
    bio: string 
    tags: TagsData
}

interface UserProfileModalSimpleEditProps {
    userInfo: LidotelUserInfo
    LidotelProfile: LidotelProfile
    isSavingExtensions: boolean 
    errors: FormErrors
    isValidData: () => boolean 
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeImage: () => void
    onChangeBio: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onAddTag: () => void
    onRemoveTag: (tagName: string) => void
}

const UserProfileModalSimpleEdit = ({ userInfo, LidotelProfile, isSavingExtensions, isValidData, errors, onChangeBio, onChangeImage, onInputChange, onAddTag, onRemoveTag }: UserProfileModalSimpleEditProps) => {
    return (
        <Flex flexDir='column' w='full'>
            <UserInformationDetails userInfo={userInfo} />
            <Flex bg='gray.300' mt='20px' h='1px' w='full' />
            <Flex mt='16px'>
                <LidotelProfileForm
                    userInfo={userInfo}
                    LidotelProfile={LidotelProfile}
                    isSavingExtensions={isSavingExtensions}
                    isValidData={isValidData}
                    errors={errors}
                    onChangeBio={onChangeBio}
                    onChangeImage={onChangeImage}
                    onInputChange={onInputChange}
                    onAddTag={onAddTag}
                    onRemoveTag={onRemoveTag} />
            </Flex>
        </Flex>
    )
}

export default UserProfileModalSimpleEdit