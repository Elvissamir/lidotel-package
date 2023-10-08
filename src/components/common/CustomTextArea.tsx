import { Textarea } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import CustomErrorField from "./CustomErrorField"

interface CustomTextAreaProps {
    id: string 
    value: string 
    error?: string
    placeholder?: string 
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextArea = ({ id, value, error, placeholder, onChange }: CustomTextAreaProps) => {
    return (
        <>
            {error && <CustomErrorField errorMessage={error} />}
            <Textarea 
                onChange={onChange}
                id={id}
                value={value}
                placeholder={placeholder} 
                resize='none'
                size='xs' />
        </>
    )
}

export default CustomTextArea