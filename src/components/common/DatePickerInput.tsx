import { forwardRef, Input } from "@chakra-ui/react";

const DatePickerInput = forwardRef((props, ref) => (
    <Input 
        className="example-custom-input" 
        onClick={props.onClick}
        onChange={props.onChange}
        ref={ref}
        value={props.value}
        size='xs'
        w='full' />
));

export default DatePickerInput