import { Flex } from "@chakra-ui/react"
import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";

interface SelectDateFromToProps {
    startDate: Date | null
    endDate: Date | null
    onUpdateStartDate: (date: Date) => null
    onUpdateEndDate: (date: Date) => null
}

const SelectDateFromTo = ({ startDate, endDate, onUpdateEndDate, onUpdateStartDate }: SelectDateFromToProps) => {
    return (
        <Flex alignItems='center' w='full' css={{ '& > .react-datepicker-wrapper': { width: '100%' } }}>
            <Flex mr='5px'>
                <DatePicker id="start-date-picker" date={startDate} onUpdateDate={onUpdateStartDate} />
            </Flex>
            -
            <Flex ml='5px'>
                <DatePicker id="end-date-picker" date={endDate} onUpdateDate={onUpdateEndDate} />
            </Flex>
        </Flex>
    )
}

export default SelectDateFromTo