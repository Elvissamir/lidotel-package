import { UserProfile } from "../../core"
import TopBarInfo from "./TopBarInfo"

interface TopBarRightProps {
    profileData: UserProfile | null
    isClosingSession: boolean
    onLogin: () => Promise<void>
    onLogout: () => Promise<void>
    onChangeTenantId: (tenantId: string) => Promise<void>
}

const TopBarRight = ({ profileData, isClosingSession, onLogin, onLogout }: TopBarRightProps) => {
    return (
        <>
            <TopBarInfo
                profileData={profileData} 
                isClosingSession={isClosingSession}
                onLogIn={onLogin}
                onLogOut={onLogout} />
        </>
    )
}

export default TopBarRight 