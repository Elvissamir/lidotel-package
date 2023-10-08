import { Flex } from "@chakra-ui/react"
import { ExternalAppData } from "../../core"
import { AppsMenuPopover } from "../common"
import { AppsMenuMoreOption } from "../common/AppsMenu.types"
import AppsMenuPopoverContent from "../common/AppsMenuPopoverContent"
import TopBarBrand from "./TopBarBrand"

interface TopBarLeftProps {
    appName?: string 
    imageUrl?: string
    list: ExternalAppData[]
    menuOptions: AppsMenuMoreOption[]
    onClick?: () => void
}

const TopBarLeft = ({ appName, imageUrl, list, menuOptions, onClick }: TopBarLeftProps) => {
    return (
        <>
            <AppsMenuPopover 
                content={<AppsMenuPopoverContent 
                    heading="APPS" 
                    appsList={list.filter(app => app.showInQuickLauncher && app.isUserLicensed)} />} 
                footer={<Flex></Flex>} />
            <TopBarBrand
                appName={appName}
                imageUrl={imageUrl} 
                onClick={onClick} />
        </>
    )
}

export default TopBarLeft