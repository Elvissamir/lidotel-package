import { Button, Flex, Text } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { SideBarMenuItemData } from './SideBar'

interface SideBarMenuProps {
    showText: boolean
    selectedItemId: string 
    currentType: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date" | undefined
    items: SideBarMenuItemData[]
    onClickItem: (id: string) => any
}

const SideBarMenu = ({ items, selectedItemId, currentType, showText, onClickItem }: SideBarMenuProps) => {
    return (
        <Flex 
            flexDirection='column'
            marginTop='40px'
            justifyContent='center'
            overflow='hidden'
            w='auto'>
                {items.map((item, key) => 
                    <Flex   
                        key={key}
                        alignItems='center'
                        justifyContent='center'
                        padding='6px 0px'
                        _notLast={{ 
                            borderBottom: '2px', 
                            borderBottomColor: 'yellow.500' }}>
                            <Button 
                                aria-label={`Select ${item.text} item`}
                                onClick={() => onClickItem(item.id)}
                                color="white"
                                aria-current={item.id === selectedItemId? currentType : undefined}
                                display='flex'
                                justifyContent={showText? 'flex-start' : 'flex-start'}
                                key={key}
                                minW='auto'
                                w='full'
                                _hover={{ backgroundColor: "#be8100" }}>
                                    <Flex fontSize='20px' w='20px'>
                                        { item.icon }
                                    </Flex>
                                    <AnimatePresence>
                                        {showText &&
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }}>
                                                <Text
                                                    color='white'   
                                                    fontFamily='Open sans'
                                                    fontSize='12px'
                                                    fontWeight={selectedItemId === item.id? '700' : '400'}
                                                    marginLeft='10px'>{ item.text }</Text>
                                        </motion.div>}
                                    </AnimatePresence>
                            </Button>
                    </Flex>
                )}
        </Flex>
    )
}

export default SideBarMenu