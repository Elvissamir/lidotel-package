import { Heading, Flex, Link } from "@chakra-ui/react"
import { useContext } from "react"
import { LidotelAuthDataContext } from "../../context"
import { LidotelAppConfig, ExternalAppData } from "../../core"
import AppsMenu from "./AppsMenu"

interface AppsMenuPopoverContent {
    heading: string
    appsList: ExternalAppData[]
}

const selectBackToTheLidotelLink = (config: LidotelAppConfig | null) => {
    if (config) {
        const backToTheLidotelUrl = config.app.launcher

        if (backToTheLidotelUrl)
            return backToTheLidotelUrl

        const LidotelBase = "https://apps.txedLidotel"
        const environmentIdentifier = config.auth.redirectUri.includes(".dev") || config.auth.redirectUri.includes("localhost")? '.dev' : '.net'
        const communityRoute = '/community/dashboard'

        return `${LidotelBase}${environmentIdentifier}${communityRoute}`
    }
}

const AppsMenuPopoverContent = ({ heading, appsList }: AppsMenuPopoverContent) => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)

    return (
        <>
            <Flex justifyContent='space-between' alignItems='flex-end'>
                <Heading fontSize='xl'>{heading}</Heading>
                <Link 
                    color='blue.500'
                    fontFamily='Open sans'
                    fontSize='12px'
                    mb='5px'
                    href={selectBackToTheLidotelLink(LidotelAppConfig)}>Back to the Lidotel</Link>
            </Flex>
            <Flex marginTop='15px'>
                <AppsMenu items={appsList} />
            </Flex>
        </>
    )
}

export default AppsMenuPopoverContent