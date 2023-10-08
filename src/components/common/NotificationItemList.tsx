import { Box, Flex, List, ListItem } from "@chakra-ui/react"
import { IMessage } from "@novu/notification-center"
import NotificationItem from "./NotificationItem"

interface NotificationItemListProps {
    notificationsList: IMessage[]
    onSeeAllNotifications: () => void
    onMarkNotificationAsRead: (messageId: string) => void
    onRemoveNotification: (messageId: string) => void
}

const NotificationItemList = ({ notificationsList, onSeeAllNotifications, onMarkNotificationAsRead, onRemoveNotification }: NotificationItemListProps) => {
    const getGradientNotification = () => {
        if (notificationsList.length > 2) {
            return notificationsList.slice(0, 3)[2]
        }

        return notificationsList[0]
    }

    return (
        <List>
            {notificationsList.map((notification) => 
                <ListItem 
                    key={notification._id}
                    _notFirst={{ mt: '10px' }}>
                        <NotificationItem 
                            data={notification}
                            onSeeAll={onSeeAllNotifications}
                            onMarkAsRead={onMarkNotificationAsRead}
                            onRemoveNotification={onRemoveNotification} />
                </ListItem>).slice(0, 2)}
            {notificationsList.length > 2 && 
            <ListItem 
                key={getGradientNotification()._id}
                _notFirst={{ mt: '10px' }}>
                    <Flex 
                        className="gradient"
                        h='115px' 
                        w='full'
                        position='relative'
                        zIndex='2'>
                            <NotificationItem
                                data={getGradientNotification()}
                                onSeeAll={onSeeAllNotifications}
                                onMarkAsRead={onMarkNotificationAsRead}
                                onRemoveNotification={onRemoveNotification} />
                            <Box
                                className="abs-flex"
                                bgGradient='linear(to-b, transparent, #ffffffb1, white)'
                                position='absolute'
                                h='115px'
                                w='100%' />
                    </Flex>
            </ListItem>}
        </List>
    )
}

export default NotificationItemList