import { Flex, Img, Text } from "@chakra-ui/react"
import getAssetsUrl from "../helpers/getAssetsUrl"

interface NotFoundPageProps {
    height: string
    minHeight: string 
    width: string
    minWidth: string
}

const NotFoundPage = ({ height, minHeight, width, minWidth }: NotFoundPageProps) => {
    return (
        <Flex 
            flexDirection='column' 
            className="not-found"
            justifyContent='center'
            bg='blue.700'
            h={height} 
            minH={minHeight}
            w={width}
            minW={minWidth}>
                <Text 
                    color='white'
                    fontFamily='Poppins'
                    fontWeight='700'
                    textAlign='center'
                    height='150px'
                    fontSize='137px'>
                        404
                </Text>
                <Text 
                    color='white'
                    fontSize='32px'
                    fontWeight='700'
                    textAlign='center'>
                        Page Not Found
                </Text>
                <Text 
                    color='white'
                    marginTop='10px'
                    marginBottom='200px'
                    textAlign='center'
                    size='md'>
                        Sorry, the page you were looking for could not be found. 
                </Text>
                <Img 
                    position='absolute'
                    right='0'
                    src={`${getAssetsUrl()}/not-found-symbol.svg`} 
                    alt="not found symbol" />
        </Flex>
    )
}

export default NotFoundPage