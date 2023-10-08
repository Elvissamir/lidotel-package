import { BellIcon } from "@chakra-ui/icons"
import { Button, Flex, useColorModeValue } from "@chakra-ui/react"

import {
    NovuProvider
  } from '@novu/notification-center';
import { useState } from "react";
import NotificationsModal from "../layout/NotificationsModal";

interface NotificationsPopoverProps {
    notificationsSubscriberId: string 
    notificationsAppId: string 
}

const NotificationsBtn = ({ notificationsAppId, notificationsSubscriberId }: NotificationsPopoverProps) => {
    const [ showNotificationsModal, setShowNotificationsModal ] = useState(false)
    const [ hasNotifications, setHasNotifications ] = useState(false)
    const iconColor = useColorModeValue("blue.900", "white")

    const handleShowNotificationsModal = () => setShowNotificationsModal(true)
    const handleHideNotificationsModal = () => setShowNotificationsModal(false)

    const handleHasUnseenNotifications = () => setHasNotifications(true)
    const handleHasZeroNotifications = () => setHasNotifications(false)

    return (
        <Flex marginRight='10px'>
            <NovuProvider 
                subscriberId={notificationsSubscriberId && notificationsSubscriberId !== ''? notificationsSubscriberId : 'example@mail.com'} 
                applicationIdentifier={notificationsAppId && notificationsAppId !== ''? notificationsAppId : 'z2WFYMjyRNEI'}
                initialFetchingStrategy={{ fetchNotifications: true, fetchUserPreferences: true }}>
                    <Button 
                        aria-label="Open notifications modal"
                        onClick={handleShowNotificationsModal}
                        display='flex'
                        position='relative'
                        padding='0'
                        border='none'
                        variant='icon'>
                            {hasNotifications && <Flex 
                                bg="orange.400"
                                position='absolute'
                                top='5px'
                                right='8px'
                                borderRadius='full'
                                h='8px'
                                w='8px' />}   
                            <BellIcon 
                                color={iconColor} 
                                h='18px' 
                                w='full' />
                    </Button>
                    <NotificationsModal 
                        show={showNotificationsModal}
                        onClose={handleHideNotificationsModal}
                        onActiveNotifications={handleHasUnseenNotifications}
                        onZeroNotifications={handleHasZeroNotifications} />
            </NovuProvider>
        </Flex>
    )
}

export default NotificationsBtn