import { Flex, Spinner, Img, Text, useColorMode } from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from 'framer-motion';
import getAssetsUrl from "../../helpers/getAssetsUrl";

interface LoadingWindowProps {
    loading: boolean 
    state: string
    delay: number
}

const LoadingScreen = ({ loading, delay, state }: LoadingWindowProps) => {
    const { colorMode } = useColorMode()

    const variants: Variants = {
        "animate": {
            opacity: 1
        },
        "exit": {
            opacity: 0,
            transition: { delay }
        }
    }

    return (
        <AnimatePresence initial={false}>
            {loading && <motion.div 
                id='container-load'
                animate="animate"
                exit='exit'
                variants={variants}
                style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: 0,
                    height: '100vh',
                    width: '100vw',
                    zIndex: 1000 }}>
                        <Flex 
                            bg={colorMode === 'light'? 'white' : 'blue.900'}
                            justifyContent='center'
                            h='100vh' 
                            w='100vw'>
                            <Flex 
                                flexDir='column'
                                alignItems='center'
                                justifyContent='center'
                                marginBottom='150px'>
                                    <Flex 
                                        alignItems='center'
                                        justifyContent='center'
                                        h='50px'>
                                            <Img 
                                                src={`${getAssetsUrl()}/logo-symbol.svg`}
                                                h='full'
                                                w='50px'
                                                alt="Lidotel logo symbol" />
                                            <Img 
                                                src={ colorMode === 'light'? `${getAssetsUrl()}/Lidotel-word.svg` : `${getAssetsUrl()}/Lidotel-word-white.svg`}
                                                marginTop='10px'
                                                marginLeft='15px'
                                                h='full'
                                                w='full'
                                                alt="The Lidotel" />
                                    </Flex>
                                    <Spinner 
                                        color={colorMode === 'light'? 'blue.900' : 'white'}
                                        size='xl'
                                        marginTop='50px' />
                                    <Text marginTop='20px'>{ state }</Text>
                            </Flex>
                        </Flex>
            </motion.div>}
        </AnimatePresence>
    );
}
 
export default LoadingScreen