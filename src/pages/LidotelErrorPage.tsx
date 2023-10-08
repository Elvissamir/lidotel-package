import { Flex, Img, Text } from "@chakra-ui/react"
import getAssetsUrl from "../helpers/getAssetsUrl"

export type ErrorStatus = "403" | "404" | "500"
const errorStatusMessages = {
    '403': {
        title: 'Prohibido',
        description: "No tienes permiso para acceder a esta página."
    },
    "404": {
        title: 'Página no encontrada',
        description: "La página que estas buscando no existe."
    },
    "500": {
        title: "Error Interno del Servidor",
        description: "Ha ocurrido un error. Intenta de nuevo en unos minutos."
    }
}

interface LidotelErrorPageProps {
    errorStatus: ErrorStatus
    height: string
    minHeight: string 
    width: string
    minWidth: string
}

const LidotelErrorPage = ({ errorStatus, height, minHeight, width, minWidth }: LidotelErrorPageProps) => {
    return (
        <Flex 
            flexDirection='column' 
            className="not-found"
            justifyContent='center'
            bg='gray.500'
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
                        {errorStatus}
                </Text>
                <Text 
                    color='white'
                    fontSize='32px'
                    fontWeight='700'
                    textAlign='center'>
                        {errorStatusMessages[errorStatus].title}
                </Text>
                <Text 
                    color='white'
                    marginTop='10px'
                    marginBottom='200px'
                    textAlign='center'
                    size='md'>
                        {errorStatusMessages[errorStatus].description}
                </Text>
                <Img 
                    position='absolute'
                    right='0'
                    src={`${getAssetsUrl()}/not-found-symbol.svg`} 
                    alt="" />
    </Flex>
    )
}

export default LidotelErrorPage