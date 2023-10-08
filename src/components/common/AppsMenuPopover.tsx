import { Popover, PopoverTrigger, PopoverContent, PopoverBody, Button, useColorModeValue } from '@chakra-ui/react'
import modeColors from '../../themes/baseTheme/modeColors'
import { CgMenuGridO } from 'react-icons/cg'

interface AppsMenuPopoverProps {
    content: JSX.Element
    footer: JSX.Element
}

const AppsMenuPopover = ({ content, footer }: AppsMenuPopoverProps) => {
    const { colorblued } = modeColors
    const bg = useColorModeValue(colorblued.light, colorblued.dark)

    return (
        <Popover>
            <PopoverTrigger>
                <Button 
                    aria-label="Show Quick Launcher Menu"
                    display='flex'
                    bg='white'
                    color='yellow.700'
                    variant='icon'
                    border='none' 
                    marginRight='8px'
                    _hover={{ 
                        backgroundColor: '#e9ecf7', 
                        color: 'yellow.500' 
                    }}
                    padding='0'>
                        <CgMenuGridO fontSize='30px' />
                </Button>
            </PopoverTrigger>
            <PopoverContent 
                left='15px' 
                bg={bg} 
                width='auto'>
                <PopoverBody padding='16px'>
                    { content }
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default AppsMenuPopover