import { Flex, Img } from "@chakra-ui/react"
import { IMessage } from "@novu/notification-center"
import getAssetsUrl from "../../helpers/getAssetsUrl"

interface NotificationItemLogoProps {
    data: IMessage
}

interface ApplicationImageNames {
    [key: string]: string
}

const applicationImageNames: ApplicationImageNames = {
    Lidotel: 'tx-notification-icon.svg',
    community: 'tx-notification-icon.svg'
}

const NotificationItemLogo = ({ data }: NotificationItemLogoProps) => {
    const getImageName = (applicationName: string) => {
        if (applicationName === 'Lidotel')
            return applicationImageNames.community
        
        return applicationImageNames.Lidotel
    }

    if (data.payload.from) {
        const applicationImageName = applicationImageNames[data.payload.from as string]

        return (
            <Img 
                src={`${getAssetsUrl()}/${getImageName(applicationImageName)}`}
                borderRadius='4px'
                h='16px'
                w='16px'
                alt={applicationImageName} />
        )
    }

    return (
        <Flex 
            bg='blue.600'
            borderRadius='4px'
            h='16px' 
            w='16px' />
    )
}

export default NotificationItemLogo