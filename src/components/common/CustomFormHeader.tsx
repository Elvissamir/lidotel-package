import { Text } from "@chakra-ui/react"

interface CustomFormHeaderProps {
    text: string 
}

const CustomFormHeader = ({ text }: CustomFormHeaderProps) => {
    return (
        <Text
            borderRadius='4px'
            bg='gray.100'
            fontFamily='Poppins'
            fontWeight='700'
            padding='8px 16px'
            size='lg'
            w='full'>
                {text}
        </Text>
    )
}

export default CustomFormHeader