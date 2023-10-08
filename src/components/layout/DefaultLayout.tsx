import { Flex } from "@chakra-ui/react"

interface DefaultLayoutProps {
    topBar: JSX.Element
    notificationBar: JSX.Element
    content: JSX.Element
    footer: JSX.Element
}

const DefaultLayout = ({ topBar, notificationBar, content, footer }: DefaultLayoutProps) => {
    return (
        <>
            <Flex className="absolute" top='0' w='full'>
                { topBar }
            </Flex>
            <Flex w='full' mt='58px'>
                { notificationBar }
            </Flex>
            { content }
            { footer }
        </>
    )
}

export default DefaultLayout