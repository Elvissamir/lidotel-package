import { Flex } from '@chakra-ui/react';
import Picker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from './DatePickerInput';

interface DatePickerProps {
    date: Date | null
    id?: string
    onUpdateDate: (date: Date) => null
}

const DatePicker = ({ date, id, onUpdateDate }: DatePickerProps) => {
    return (
        <Flex data-testid={id} w='full'>
            <Picker
                selected={date}
                className='container'
                monthClassName={() => 'supermonth'}
                customInput={<DatePickerInput />}
                onChange={onUpdateDate} />
        </Flex>
    )
}

export default DatePicker