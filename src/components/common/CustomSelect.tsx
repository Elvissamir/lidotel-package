import { Select } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import CustomErrorField from "./CustomErrorField"

interface SelectOption {
    value: any
    text: string 
}

interface CustomSelectProps {
    id?: string
    options: SelectOption[]
    error?: string
    value: any
    disabled?: boolean 
    height?: string 
    placeholder?: string 
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const CustomSelect = ({ id, value, error, disabled, options, height, placeholder, onChange }: CustomSelectProps) => {
    return (
        <>
            {error && <CustomErrorField errorMessage={error} />}  
            <Select 
                id={id? id : 'select'}
                borderRadius='4px'
                onChange={onChange}
                placeholder={placeholder}
                isDisabled={disabled}
                height={height? height : 'auto'}
                value={value}
                size='xs'>
                    {options.map((option, index) => 
                        <option key={index} value={option.value}>{option.text}</option>
                    )}
            </Select>
        </>
    )
}

export default CustomSelect