import { Flex, Text } from "@chakra-ui/react"
import { IMessage } from "@novu/notification-center"
import NotificationItemPopover from "./NotificationItemPopover"
import getTimeAgo from "../../helpers/getTimeAgo"
import NotificationItemLeft from "./NotificationItemLeft"
import NotificationItemContent from "./NotificationItemContent"
import NotificationItemLogo from "./NotificationItemLogo"

interface NotificationItemProps {
    data: IMessage
    onMarkAsRead: (messageId: string) => void
    onSeeAll: () => void
    onRemoveNotification: (notificationId: string) => void
}

const NotificationItem = ({ data, onRemoveNotification, onMarkAsRead, onSeeAll }: NotificationItemProps) => {
    return (
        <Flex
            bg={data.seen? 'gray.50' : 'red.50'}
            h='115px' 
            w='full'>
                <Flex bg={data.seen? 'gray.50' : 'orange.400'} h='full' w='5px' />
                <Flex position='relative' py='12px' px='10px' w='full'>
                    <NotificationItemLeft data={data} />
                    <Flex flexDir='column' ml='16px' w='350px'>
                       <NotificationItemContent content={data.payload.content as string} />
                        <Flex mt='auto' w='full'>
                            <NotificationItemLogo data={data} />
                            <Text 
                                fontFamily='Open sans' 
                                color='gray.500' 
                                ml='10px'
                                size='xs'>{getTimeAgo(Date.parse(data.createdAt)).replace("minutes", "min")}</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems='center' justifyContent='center' ml='auto' w='50px'>
                        <NotificationItemPopover 
                            messageId={data._id}
                            wasRead={data.read}
                            onMarkAsRead={onMarkAsRead}
                            onSeeAll={onSeeAll}
                            onRemove={onRemoveNotification} />
                    </Flex>
                </Flex>
        </Flex>
    )
}

export default NotificationItem