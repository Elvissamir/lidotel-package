import { useRef } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    useColorModeValue,
    Flex,
    Link,
    Heading,
    Text,
  } from '@chakra-ui/react'

interface AppCardProps {
    appId: string
    imageUrl: string | null
    lightBackgroundUrl?: string 
    darkImageUrl?: string
    darkBackgroundUrl?: string
    overlayColor: string
    description: string
    actionLink: string
    bookmarked: boolean
    onBookmark: (appId: string) => void
}

interface TooltipAppCardProps {
    appCardProps: AppCardProps
    cardType: 'app' | 'community'
}

const TooltipAppCard = ({ appCardProps, cardType }: TooltipAppCardProps) => {
    const bg = useColorModeValue('white', 'blue.600')
    const linkColor = useColorModeValue('blue.600', 'white')
    const ref = useRef(null)

    return (
        <Popover trigger='hover' initialFocusRef={ref}>
            <PopoverTrigger>
                <span>
                    
                </span>
            </PopoverTrigger>
            <PopoverContent bg={bg} top='-40px' left='50px'>
                <PopoverBody>
                    <Flex justifyContent='space-between'>
                        <Heading fontSize='md'>{appCardProps.description}</Heading>
                        <Link 
                            fontSize='xs' 
                            fontFamily='Open sans'
                            color={linkColor}
                            href={appCardProps.actionLink}>Go to app</Link>
                    </Flex>
                    <Flex bg='gray.300' h='0.5px' w='full' marginTop='10px' />
                    <Flex flexDir='column' marginTop='10px'>
                        <Text fontSize='sm' fontFamily='Open sans'>
                            This is the {appCardProps.description}
                        </Text>
                        <Flex marginTop='15px' w='full'>
                        
                        </Flex>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default TooltipAppCard