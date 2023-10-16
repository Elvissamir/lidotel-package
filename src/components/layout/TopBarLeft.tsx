import { ExternalAppData } from "../../core"
import { AppsMenuMoreOption } from "../common/AppsMenu.types"
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
            <TopBarBrand
                appName={appName}
                imageUrl={imageUrl} 
                onClick={onClick} />
        </>
    )
}

export default TopBarLeft