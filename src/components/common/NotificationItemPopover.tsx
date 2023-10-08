import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
    Flex,
  } from '@chakra-ui/react'
import { HiDotsHorizontal } from "react-icons/hi"

interface NotificationItemPopoverProps {
    messageId: string 
    wasRead: boolean
    onMarkAsRead: (messageId: string) => void
    onSeeAll: () => void
    onRemove: (messageId: string) => void
}

const NotificationItemPopover = ({ messageId, wasRead, onMarkAsRead, onRemove, onSeeAll }: NotificationItemPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button 
                    aria-label='Open notification menu'
                    color='blue.900'
                    variant='simple'
                    minW='auto'>
                        <HiDotsHorizontal size='20px' />
                </Button>
            </PopoverTrigger>
            <PopoverContent w='150px'>
                <PopoverBody>
                    <Flex flexDir='column' w='full'>
                        {!wasRead && <Button    
                            aria-label="Mark notification as read"
                            color='gray.700'
                            fontFamily='Open sans'
                            fontWeight='400'
                            onClick={() => onMarkAsRead(messageId)}
                            _hover={{ bg: "#e9ecf7" }}
                            w='full'>
                                Mark as Read
                        </Button>}
                        <Button    
                            aria-label='See all notifications'
                            color='gray.700'
                            fontFamily='Open sans'
                            fontWeight='400'
                            onClick={onSeeAll}
                            _hover={{ bg: "#e9ecf7" }}
                            w='full'>
                                See All Notifications
                        </Button>
                        <Button    
                            aria-label='Remove notification'
                            color='gray.700'
                            fontFamily='Open sans'
                            fontWeight='400'
                            onClick={() => onRemove(messageId)}
                            _hover={{ bg: "#e9ecf7" }}
                            w='full'>
                                Remove
                        </Button>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default NotificationItemPopover