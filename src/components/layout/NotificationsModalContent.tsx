import { Button, Flex, Text } from "@chakra-ui/react"
import { IMessage } from "@novu/notification-center"
import NotificationItemList from "../common/NotificationItemList"
import NotificationsEmptyMessage from "../common/NotificationsEmptyMessage"

interface NotificationsModalContentProps {
    readNotifications: IMessage[]
    unReadNotifications: IMessage[]
    unseenCount: number 
    isLoading: boolean 
    isFetching: boolean
    onMarkAllAsRead: () => void
    onSeeAllNotifications: () => void
    onMarkNotificationAsRead: (messageId: string) => void
    onRemoveNotification: (notificationId: string) => void
}

const NotificationsModalContent = ({ readNotifications, unReadNotifications, unseenCount, isLoading, isFetching, onMarkAllAsRead, onMarkNotificationAsRead, onSeeAllNotifications, onRemoveNotification }: NotificationsModalContentProps) => {
    const handleMarkAllRead = () => onMarkAllAsRead()

    return (
        <>
            <Flex alignItems='center' justifyContent='space-between' w='full'>
                <Flex alignItems='center' w='full'>
                    <Text
                        fontFamily='Poppins'
                        fontWeight='700'
                        size='lg'>Unread</Text>
                    <Flex 
                        alignItems='center'
                        justifyContent='center'
                        borderRadius='4px'
                        bg='orange.100'
                        ml='10px'
                        h='20px'
                        w='20px'>
                            <Text
                                fontFamily='Open sans'
                                fontWeight='400'
                                size='xs'>
                                    {unseenCount}
                            </Text>
                    </Flex>
                </Flex>
                <Button
                    onClick={handleMarkAllRead}
                    color='blue.500'
                    fontFamily='Open sans'
                    fontWeight='700'
                    size='md'
                    _hover={{ bg: 'white' }}>
                        Mark All As Read
                </Button>
            </Flex>
            <Flex flexDirection='column' mt='16px'>
                {unReadNotifications.length > 0? 
                    <NotificationItemList
                        notificationsList={unReadNotifications}
                        onMarkNotificationAsRead={onMarkNotificationAsRead}
                        onSeeAllNotifications={onMarkAllAsRead}
                        onRemoveNotification={onRemoveNotification} /> 
                    :     
                    <NotificationsEmptyMessage notificationsType="unread" />}
            </Flex>
            <Flex mt='32px' alignItems='center' w='full'>
                <Text
                    fontFamily='Poppins'
                    fontWeight='700'
                    size='lg'>Read</Text>
            </Flex>
            <Flex flexDirection='column' mt='16px'>
                {readNotifications.length > 0? <NotificationItemList 
                    notificationsList={readNotifications}
                    onMarkNotificationAsRead={onMarkNotificationAsRead}
                    onSeeAllNotifications={onMarkAllAsRead}
                    onRemoveNotification={onRemoveNotification} /> 
                :
                <NotificationsEmptyMessage notificationsType="read" />}
            </Flex>
        </>
    )
}

export default NotificationsModalContent