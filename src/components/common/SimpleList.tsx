import { CheckIcon } from "@chakra-ui/icons"
import { Flex, List, ListItem, Text } from "@chakra-ui/react"
import { SimpleListItem } from "./SimpleList.types"

interface SimpleListProps {
    items: SimpleListItem[]
    width?: string
    minWidth?: string 
    maxWidth?: string
    onSelectItem: (item: SimpleListItem) => void
}

const SimpleList = ({ items, width, minWidth, maxWidth, onSelectItem }: SimpleListProps) => {
    return (
        <List 
            w={width? width : 'auto'} 
            minWidth={minWidth} 
            maxW={maxWidth}>
                {items.map((item, index) => 
                    <ListItem
                        key={`${item.name}-${index}`}
                        display='flex'
                        alignItems='center'
                        borderBottom='1px'
                        borderBottomColor='gray.300'
                        padding='10px'>
                            <Flex  
                                cursor='pointer'
                                bg={item.selected? 'blue.500' : 'white'}
                                color='white'
                                onClick={() => onSelectItem(item)}
                                border='1px solid'
                                borderColor='gray.300'
                                alignItems='center'
                                justifyContent='center'
                                h='15px'
                                w='15px'>
                                    {item.selected && <CheckIcon fontSize='10px' />}
                            </Flex>
                            <Text
                                fontFamily='Open sans'
                                fontWeight='700'
                                size='md'
                                ml='10px'>{item.name}</Text>
                    </ListItem>    
                )}
        </List>
    )
}

export default SimpleList