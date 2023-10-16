import { Heading, Flex, Link } from "@chakra-ui/react"
import { ExternalAppData } from "../../core"
import AppsMenu from "./AppsMenu"

interface AppsMenuPopoverContent {
    heading: string
    appsList: ExternalAppData[]
}

const AppsMenuPopoverContent = ({ heading, appsList }: AppsMenuPopoverContent) => {
    return (
        <>
            <Flex justifyContent='space-between' alignItems='flex-end'>
                <Heading fontSize='xl'>{heading}</Heading>
                <Link 
                    color='blue.500'
                    fontFamily='Open sans'
                    fontSize='12px'
                    mb='5px'
                    href="">Back to the Lidotel</Link>
            </Flex>
            <Flex marginTop='15px'>
                <AppsMenu items={appsList} />
            </Flex>
        </>
    )
}

export default AppsMenuPopoverContent