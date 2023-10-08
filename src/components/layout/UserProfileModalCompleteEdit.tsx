import { ChangeEvent } from 'react'
import { Flex, Link } from "@chakra-ui/react"
import UserInformationForm from './UserInformationForm'
import LidotelProfileForm from './LidotelProfileForm'
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

interface UserProfileModalCompleteEditProps {
    userInfo: LidotelUserInfo
    LidotelProfile: LidotelProfile
    isSavingExtensions: boolean 
    errors: FormErrors
    isValidData: () => boolean 
    onChangeUserInfo: (e: ChangeEvent<HTMLInputElement>) => void
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeImage: () => void
    onChangeBio: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onAddTag: () => void
    onRemoveTag: (tagName: string) => void
}

const UserProfileModalCompleteEdit = ({ userInfo, LidotelProfile, isSavingExtensions, isValidData, errors, onChangeUserInfo, onChangeBio, onChangeImage, onInputChange, onAddTag, onRemoveTag }: UserProfileModalCompleteEditProps) => {
    return (
        <Flex flexDir='column' w='full'>
            <UserInformationForm 
                userInfo={userInfo}
                onChange={onChangeUserInfo} />
            <Flex bg='gray.300' mt='20px' h='1px' w='full' />
            <Flex mt='16px'>
                <LidotelProfileForm
                    userInfo={userInfo}
                    LidotelProfile={LidotelProfile}
                    isValidData={isValidData}
                    isSavingExtensions={isSavingExtensions}
                    onChangeBio={onChangeBio}
                    errors={errors}
                    onChangeImage={onChangeImage}
                    onInputChange={onInputChange}
                    onAddTag={onAddTag}
                    onRemoveTag={onRemoveTag} />
            </Flex>
            <Flex bg='gray.300' mt='20px' h='1px' w='full' />
            <Link 
                href='#'
                color='blue.500'
                mt='20px'
                fontSize='14px'>Looking to change your password? Click here.</Link>
        </Flex>
    )
}

export default UserProfileModalCompleteEdit