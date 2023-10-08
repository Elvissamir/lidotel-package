import { useEffect } from 'react'
import { useNotifications } from "@novu/notification-center"
import LidotelModal from "./LidotelModal"
import NotificationsModalContent from "./NotificationsModalContent"

interface NotificationsModalProps {
    show: boolean 
    onClose: () => void
    onActiveNotifications: () => void
    onZeroNotifications: () => void
}

const NotificationsModal = ({ show, onClose, onActiveNotifications, onZeroNotifications }: NotificationsModalProps) => {
    const { 
        notifications, 
        isLoading, 
        isFetching, 
        refetch,
        removeMessage,
        markNotificationAsRead,
        markAllNotificationsAsRead } = useNotifications()

    const onRemoveNotification = (messageId: string) => {
        removeMessage(messageId)
        refetch()
    }

    const onMarkAllAsRead = () => {
        markAllNotificationsAsRead()
        onZeroNotifications()

        refetch()
    }

    const onSeeAllNotifications = () => {
        console.log("go to notifications page...")
    }

    const unreadNotifications = notifications? notifications.filter(notification => !notification.read) : []
    const unseenNotifications = notifications? notifications.filter(notification => !notification.seen) : []
    const readNotifications = notifications? notifications.filter(notification => notification.read) : []

    useEffect(() => {
        // console.log('unseen count', unseenCount)
        if (unseenNotifications.length > 0) 
            return onActiveNotifications()

        onZeroNotifications()
    }, [ notifications ])

    return (
        <LidotelModal 
            show={show}
            hideControls={true}
            heading="Notifications"
            onClose={onClose}>
                <NotificationsModalContent 
                    unReadNotifications={unreadNotifications}
                    readNotifications={readNotifications}
                    unseenCount={unreadNotifications.length}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    onSeeAllNotifications={onSeeAllNotifications}
                    onMarkNotificationAsRead={markNotificationAsRead}
                    onMarkAllAsRead={onMarkAllAsRead}
                    onRemoveNotification={onRemoveNotification} />
        </LidotelModal>
    )
}

export default NotificationsModal