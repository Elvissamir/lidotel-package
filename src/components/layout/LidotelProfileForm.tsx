import { Button, Flex, FormControl, Img, Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import { FormErrors } from "../../core/Forms.types"
import { TagsData } from "../../hooks/useUserProfileExtensions"
import { CompleteFormErrorMessage } from "../common"
import CustomErrorField from "../common/CustomErrorField"
import CustomFormLabel from "../common/CustomFormLabel"
import CustomInput from "../common/CustomInput"
import CustomTextArea from "../common/CustomTextArea"

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

interface LidotelProfileFormProps {
    userInfo: LidotelUserInfo
    LidotelProfile: LidotelProfile
    isSavingExtensions: boolean 
    errors: FormErrors
    isValidData: () => boolean
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeBio: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onChangeImage: () => void
    onAddTag: () => void
    onRemoveTag: (tagName: string) => void
}

const LidotelProfileForm = ({ userInfo, LidotelProfile, errors, onInputChange, onChangeBio, onAddTag, onRemoveTag }: LidotelProfileFormProps) => {
    return (
        <Flex flexDir='column' w='full'>
            <Text
                fontFamily='Poppins'
                fontWeight='700'
                fontSize='20px'>Lidotel Profile</Text>
            { errors && Object.keys(errors).length > 0 && <CompleteFormErrorMessage /> }
            {false && <Flex flexDir='column' mt='16px' w='full'>
                <Text 
                    fontFamily='Open sans'
                    fontWeight='700'>
                        Profile Image
                </Text>
                <Flex alignItems='center' mt='5px' w='full'>
                    <Flex
                        color='white'
                        bg='blue.500'
                        justifyContent='center'
                        fontFamily='Open sans'
                        fontSize='20px'
                        fontWeight='700'
                        alignItems='center'
                        borderRadius='full' h='50px' w='50px'>
                            {LidotelProfile.imageUrl? 
                                <Img src={LidotelProfile.imageUrl} alt="user profile image" /> : 
                                `${userInfo.firstName[0]}${userInfo.lastName[0]}`}
                    </Flex>
                    <Button
                        ml='10px'
                        variant='secondaryBlue600'
                        w='150px'>
                            Upload Image
                    </Button>
                </Flex>
                <Text
                    color='gray.500'
                    fontFamily='Open sans'
                    fontStyle='italic'
                    mt='10px'
                    size='xs'>
                        Your initials will be used as your profile image if you choose to not upload one here.
                </Text>
            </Flex>}
            <FormControl mt='16px'>
                <CustomFormLabel 
                    htmlFor="additionalTitle"
                    text='Additional Title, like "Basketball Coach"' />
                <CustomInput 
                    id="additionalTitle"
                    error={errors && errors["additionalTitle"] && errors["additionalTitle"].message}
                    value={LidotelProfile.additionalTitle}
                    onChange={onInputChange}
                    placeholder="additional title" />
                <Text
                    color='gray.500'
                    fontFamily='Open sans'
                    fontStyle='italic'
                    mt='10px'
                    size='xs'>
                        Maximum 100 characters
                </Text>
            </FormControl>
            <FormControl mt='16px'>
                <CustomFormLabel 
                    htmlFor="bio"
                    text='Brief Intro Bio' />
                <CustomTextArea
                    id="bio"
                    value={LidotelProfile.bio}
                    error={errors && errors["bio"] && errors["bio"].message}
                    onChange={onChangeBio}
                    placeholder="your bio" />
                <Text
                    color='gray.500'
                    fontFamily='Open sans'
                    fontStyle='italic'
                    mt='10px'
                    size='xs'>
                        Maximum 320 characters
                </Text>
            </FormControl>
            <FormControl mt='16px'>
                <CustomFormLabel 
                    htmlFor="tags"
                    text='Tags for Skills and Areas of Interest' />
                 <CustomInput 
                    id="tags"
                    value={LidotelProfile.tags.value}
                    error={errors && errors["tags"] && errors["tags"].message}
                    onChange={onInputChange}
                    onEnterKey={() => onAddTag()}
                    placeholder="additional tag" />
                <Flex mt={LidotelProfile.tags.tagsList.length > 0? "10px" : "0px"}>
                    {LidotelProfile.tags.tagsList.filter(tag => tag !== '').map((tag, index) => 
                        <Tag bg="gray.200" key={index} _notFirst={{ ml: '3px' }}>
                            <TagLabel>{tag}</TagLabel>
                            <TagCloseButton 
                                aria-label={`Remove ${tag} tag`}
                                onClick={() => onRemoveTag(tag)} />
                        </Tag>
                    )}
                    {errors && errors["tagsList"] && <CustomErrorField errorMessage={errors['tagsList'].message} />}
                </Flex>
                <Text
                    color='gray.500'
                    fontFamily='Open sans'
                    fontStyle='italic'
                    mt='10px'
                    size='xs'>
                        Select up to 5 tags
                </Text>
            </FormControl>
        </Flex>
    )
}

export default LidotelProfileForm