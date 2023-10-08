import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"
import CustomErrorField from "./CustomErrorField"

interface CustomNumberInputProps {
    id: string 
    value: number
    error?: string
    defaultValue?: number 
    min?: number 
    max?: number 
    disabled?: boolean
    onChange: (valString: string, newValue: number) => void
}

const CustomNumberInput = ({ id, value, defaultValue, min, max, error, disabled, onChange }: CustomNumberInputProps) => {
    return (
        <>
            {error && <CustomErrorField errorMessage={error} />}  
            <NumberInput
                onChange={onChange}
                isDisabled={disabled}
                defaultValue={defaultValue}
                min={min}
                max={max}
                id={id} 
                value={value}
                size='xs'>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
            </NumberInput>
        </>
    )
}

export default CustomNumberInput