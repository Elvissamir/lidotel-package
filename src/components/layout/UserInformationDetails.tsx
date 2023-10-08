import { InfoIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/react"

interface LidotelUserInfo {
    email: string 
    firstName: string 
    lastName: string 
    organization: string 
    jobDepartment: string 
    jobTitle: string
}

interface UserInformationDetailsProps {
    userInfo: LidotelUserInfo
}

const UserInformationDetails = ({ userInfo }: UserInformationDetailsProps) => {
    return (
        <Flex flexDir='column' w='full'>
            <Text
                fontFamily='Open sans'>
                    Below you'll find your profile information for The Lidotel.
                    Some of the information below cannot be edited within The Lidotel as it is 
                    pulled in from your District or Charter School's HR system.
            </Text>
            <Flex alignItems='center' mt='32px'>
                <Text
                    fontFamily='Poppins'
                    fontWeight='700'
                    fontSize='20px'>User Information</Text>
                <InfoIcon color='blue.600' fontSize='20px' ml='10px' />
            </Flex>
            <Text
                fontFamily='Open sans'
                fontWeight='700'
                mt='16px'>
                    Email
            </Text>
            <Text
                fontFamily='Open sans'
                fontWeight='400'
                size='sm'>{userInfo.email}</Text>

            <Text
                fontFamily='Open sans'
                fontWeight='700'
                mt='16px'>
                    Title
            </Text>
            <Text
                fontFamily='Open sans'
                fontWeight='400'
                size='sm'>{`${userInfo.jobTitle} ${userInfo.jobDepartment}`}</Text>

            <Text
                fontFamily='Open sans'
                fontWeight='700'
                mt='16px'>
                    Organization
            </Text>
            <Text
                fontFamily='Open sans'
                fontWeight='400'
                size='sm'>{userInfo.organization}</Text>
        </Flex>
    )
}

export default UserInformationDetails