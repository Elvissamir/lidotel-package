import { Checkbox } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

interface CustomCheckboxProps {
    id: string 
    value: string 
    isChecked: boolean
    onCheck: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox = ({ id, value, isChecked, onCheck }: CustomCheckboxProps) => {
    return (
        <Checkbox 
            id={id}
            isChecked={isChecked}
            onChange={onCheck}
            value={value}
            _checked={{ "& > span": { 
                    background: 'blue.600',
                    borderColor: 'blue.600'
                } 
            }} />
    )
}

export default CustomCheckbox