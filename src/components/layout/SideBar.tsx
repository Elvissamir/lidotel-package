import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import SideBarMenu from "./SideBarMenu"

export interface SideBarMenuItemData {
    id: string
    text: string 
    icon: JSX.Element
}

interface SideBarProps {
    show?: boolean
    selectedItemId: string
    ariaCurrentType: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date" | undefined
    items: SideBarMenuItemData[]
    onClickItem: (id: string) => any
}

const SideBar = ({ items, selectedItemId, ariaCurrentType, onClickItem, show }: SideBarProps) => {
    const [ expanded, setExpanded ] = useState(false)
    const bg = useColorModeValue("gray.700", "blue.900")

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <Flex 
            display={show === false? 'none' : 'flex'}
            flexDirection='column'
            position='relative'
            bg={bg}
            padding={expanded? '0 20px' : '0 10px'}
            transition="all 0.5s ease-in-out"
            h='full'
            w={expanded? '180px' : '40px'}
            zIndex='1'>
                <SideBarMenu 
                    showText={expanded}
                    currentType={ariaCurrentType}
                    selectedItemId={selectedItemId}
                    items={items}
                    onClickItem={onClickItem} />
                <Button 
                    aria-label={expanded? "Close Sidebar" : "Open Sidebar"}
                    onClick={toggleExpand}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    bg='white'
                    bottom='15%'
                    color='black'
                    fontSize='md'
                    left='100%'
                    position='absolute'
                    h='48px'
                    minW='32px'
                    w='32px'>
                        {expanded? 
                        <ArrowBackIcon />
                        :
                        <ArrowForwardIcon />}
                </Button>
        </Flex>
    )
}

export default SideBar