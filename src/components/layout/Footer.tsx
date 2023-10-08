import { Flex, Image, Img, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import getAssetsUrl from "../../helpers/getAssetsUrl"

const Footer = () => {
    const { colorMode } = useColorMode()
    const bgColor = useColorModeValue("white", "blue.900")
    const borderColor = useColorModeValue("gray.200", "blue.600")

    return (
        <footer 
            style={{ marginTop: 'auto' }}>
                <Flex 
                    bg={bgColor}
                    borderTop='2px'
                    borderTopColor={borderColor}
                    alignItems='center'
                    justifyContent='space-between'
                    h='86px'
                    w='full'
                    overflow='hidden'
                    padding='20px 45px'>
                        <Flex fontSize='sm'>
                            <Img 
                                src="https://lidoteltest.legendsoft.com/wp-content/uploads/2020/10/main_logo.jpg"
                                h='90px' />
                        </Flex>
                        <Flex 
                            position='relative'
                            h='full'>
                                <Flex 
                                    flexDir='column'
                                    marginRight='100px'>
                                        <Text 
                                            color='black'
                                            fontFamily='Open sans'
                                            fontWeight='700'
                                            fontSize='12px'>Creado por Lidotel</Text>
                                </Flex>
                                <Image 
                                    position='absolute'
                                    top='-86px'
                                    right='-30px'
                                    src={ colorMode === 'light'? `${getAssetsUrl()}/footer-symbol-light.svg` : `${getAssetsUrl()}/footer-symbol-dark.svg` }
                                    h='150px'
                                    w='160px'
                                    alt="footer Lidotel symbol" />
                        </Flex>
                </Flex>
        </footer>
    )
}

export default Footer