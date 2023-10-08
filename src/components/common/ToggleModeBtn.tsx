import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"

const ToggleModeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("blue.900", "white")

    return (
        <Button 
            aria-label="Toggle dark mode"
            border='none'
            padding='0'
            variant='icon'
            onClick={() => toggleColorMode()}>
                { colorMode === 'light'? <MoonIcon /> : <SunIcon color={color} /> }
        </Button>
    )
}

export default ToggleModeBtn