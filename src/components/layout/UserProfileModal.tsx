import { UserProfile } from '../../core'
import useUserProfileExtensions from '../../hooks/useUserProfileExtensions'
import LidotelModal from "./LidotelModal"
import UserProfileModalCompleteEdit from "./UserProfileModalCompleteEdit"
import UserProfileModalSimpleEdit from './UserProfileModalSimpleEdit'

interface UserProfileModalProps {
    show: boolean 
    userProfileData: UserProfile | null
    mode?: "simple" | "complete"
    onClose: () => void
}

const UserProfileModal = ({ show, userProfileData, mode, onClose }: UserProfileModalProps) => {
    const { 
        additionalTitle, 
        bio, 
        tags, 
        errors,
        isValidData,
        onChangeBio, 
        onInputChange, 
        onSave, 
        onAddTag, 
        onRemoveTag, 
        isSavingExtensions } = useUserProfileExtensions()

    const jobDepartment = 'Lidotel'
    const jobTitle = ''
    const imageUrl = ''

    const extractUserData = (userProfile: UserProfile | null) => {
        if (userProfile) {
            const currentTenant = userProfile.tenants.find(tenant => tenant.tenantId === userProfile.tenantId)

            return {
                email: userProfile.email,
                firstName: userProfile.firstName,
                lastName: userProfile.lastName,
                organization: currentTenant? currentTenant.organizationName : ""
            }
        }

        return {
            email: "",
            firstName: "",
            lastName: "",
            organization: ""
        }
    }

    const onSaveChanges = async () => {
        if (isValidData()) {
            await onSave()
            
            onClose()
        }
    }

    return (
        <LidotelModal 
            show={show}
            heading='Edit Profile'
            isSavingChanges={isSavingExtensions}
            onClose={onClose}
            onSave={() => onSaveChanges()}>
                { mode === 'complete'? 
                <UserProfileModalCompleteEdit 
                    userInfo={{
                        ...extractUserData(userProfileData),
                        jobDepartment,
                        jobTitle
                    }}
                    LidotelProfile={{
                        imageUrl,
                        additionalTitle,
                        bio,
                        tags
                    }}
                    errors={errors}
                    onChangeUserInfo={onInputChange} 
                    onChangeBio={onChangeBio}
                    onInputChange={onInputChange}
                    isValidData={isValidData}
                    isSavingExtensions={isSavingExtensions}
                    onAddTag={onAddTag}
                    onRemoveTag={onRemoveTag}
                    onChangeImage={() => console.log("")} /> 
                    : 
                    <UserProfileModalSimpleEdit 
                        userInfo={{
                            ...extractUserData(userProfileData),
                            jobDepartment,
                            jobTitle
                        }}
                        LidotelProfile={{
                            imageUrl,
                            additionalTitle,
                            bio,
                            tags
                        }}
                        errors={errors}
                        isSavingExtensions={isSavingExtensions}
                        isValidData={isValidData}
                        onChangeBio={onChangeBio}
                        onInputChange={onInputChange}
                        onAddTag={onAddTag}
                        onRemoveTag={onRemoveTag}
                        onChangeImage={() => console.log("")} />}
        </LidotelModal>
    )
}

export default UserProfileModal