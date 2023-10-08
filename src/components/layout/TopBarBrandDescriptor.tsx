import { Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import getAssetsUrl from "../../helpers/getAssetsUrl"

const logoLightUri = `${getAssetsUrl()}/Lidotel-word.svg`
const logoDarkUri = `${getAssetsUrl()}/Lidotel-word-white.svg`

interface TopBarBrandDescriptorProps {
    imageUrl?: string
    appName?: string
}

const TopBarBrandDescriptor = ({ appName, imageUrl }: TopBarBrandDescriptorProps) => {
    const textColor = useColorModeValue("blue.600", "white")
    const { colorMode } = useColorMode()

    if (appName) {
        return (
            <Text
                color={textColor}
                fontFamily='Poppins'
                fontWeight='600'
                size='sm'
                margin='auto 0 auto 70px'>
                    {appName}
            </Text>
        ) 
    }

    if (imageUrl) {
        return (
            <Image 
                h='30px'
                margin='auto 0 auto 70px'
                src={imageUrl}
                alt='app descriptor' />)
    }

    return (
        <Image 
            h='30px'
            margin='auto 0 auto 70px'
            src={colorMode === 'light'? logoLightUri : logoDarkUri}
            alt='' />)
}

export default TopBarBrandDescriptor