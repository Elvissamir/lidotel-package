import { Flex } from "@chakra-ui/react"

interface ContentProps {
    children: JSX.Element
    marginTop: string
    maxW: string
}

const Content = ({ children, marginTop, maxW }: ContentProps) => {
    return (
        <Flex 
            flexDirection='column'
            alignItems='flex-start'
            marginTop={marginTop}
            marginLeft='auto'
            marginRight='auto'
            marginBottom='120px'
            position='relative'
            maxW={maxW}
            w='full'
            padding='0 35px'>
                <main style={{ display: 'flex', width: '100%' }}>
                    { children }
                </main>
        </Flex>
    )
}

export default Content