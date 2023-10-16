import { QuestionIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons"
import { Button, Flex, useColorModeValue } from "@chakra-ui/react"
import { UserProfile } from "../../core"
import useSettingsModal from "../../hooks/useSettingsModal"
import TopBarProfilePopover from "./TopBarProfilePopover"
import TopBarSettingsModal from "./TopBarSettingsModal"

interface TopBarInfoProps {
    profileData: UserProfile | null
    isClosingSession: boolean
    onLogIn: () => Promise<void>
    onLogOut: () => Promise<void>
}

const TopBarInfo = ({ profileData, isClosingSession, onLogIn, onLogOut }: TopBarInfoProps) => {
    const iconsColor = useColorModeValue("blue.900", "white")
    const { showSettingsModal, hideSettingsModal, openSettingsModal } = useSettingsModal()

    const showSearchIcon = false

    return (
        <Flex alignItems='center'>
            {false && <Button  
                aria-label="Show search menu"
                border='none'
                padding='0'
                marginRight='10px'
                variant='icon'>
                    <SearchIcon color={iconsColor} />
            </Button>}
            {false && <Button
                aria-label="Open settings modal"
                onClick={openSettingsModal}
                border='none'
                padding='0'
                marginRight='10px'
                variant='icon'>
                    <SettingsIcon color={iconsColor} />
                    <TopBarSettingsModal
                        show={showSettingsModal}
                        onClose={hideSettingsModal} />
            </Button>}
            {showSearchIcon && <Button
                aria-label="Open help modal"
                border='none'
                padding='0'
                marginRight='10px'
                variant='icon'>
                    <QuestionIcon color={iconsColor} />
            </Button>}
            <TopBarProfilePopover
                isClosingSession={isClosingSession}
                profileData={profileData} 
                onLogIn={onLogIn}
                onLogOut={onLogOut} />
        </Flex>
    )
}

export default TopBarInfo