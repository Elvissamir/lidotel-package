import { Flex, Text } from "@chakra-ui/react"

interface CustomErrorFieldProps {
    errorMessage: string 
}

const CustomErrorField = ({ errorMessage }: CustomErrorFieldProps) => {
    return (
        <Flex 
            alignItems='center'
            bg='red.100'
            borderRadius='4px'
            mt='10px'
            mb='5px'
            padding='4px 8px'
            h='20px' 
            w='auto'>
                <Text
                    color='red.700'
                    fontFamily='Archivo Narrow'
                    fontWeight='400'
                    size='sm'
                    lineHeight='16px'>
                        {errorMessage}
                </Text>
        </Flex>
    )
}

export default CustomErrorField