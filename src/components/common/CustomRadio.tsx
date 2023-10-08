import { Radio } from "@chakra-ui/react"

interface CustomRadioProps {
    value: any
    text: string 
    isChecked?: boolean
}

const CustomRadio = ({ isChecked, text, value }: CustomRadioProps) => {
    return (
        <Radio 
            isChecked={isChecked}
            _checked={{
                _before: {
                    bg: "currentColor",
                    borderRadius: "50%",
                    content: "\"\"",
                    display: 'inline-block',
                    h: '50%',
                    pos: 'relative',
                    w: '50%'
                },
                bg: 'blue.600',
                borderColor: 'blue.600',
                color: 'white'
            }}
            value={value}>
                {text}
        </Radio>
    )
}

export default CustomRadio