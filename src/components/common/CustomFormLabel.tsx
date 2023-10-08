import { FormLabel } from "@chakra-ui/react"

interface CustomFormLabelProps {
    htmlFor: string 
    text: string 
}   

const CustomFormLabel = ({ htmlFor, text }: CustomFormLabelProps) => {
    return (
        <FormLabel 
            fontFamily='Open sans'
            fontWeight='700'
            fontSize='14px'
            lineHeight='20px'
            htmlFor={htmlFor}>
                {text}
        </FormLabel>
    )
}

export default CustomFormLabel