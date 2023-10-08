import { useContext } from "react"
import { LidotelAuthDataContext, UserProfileContext } from "../context"
import { updateTenantIdPreference } from "../services"

interface UseTeeAuthDataProps {
    
}

const useAuthActions = (params?: UseTeeAuthDataProps) => {
    const { auth, LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    const handleLogOut = async () => {
        if (auth) await auth.signoutRedirect()
    }

    const handleLogIn = async () => {
        if (auth) await auth.signinRedirect()
    }

    const handleChangeTenantId = async (tenantId: string) => {
        if (userProfile && auth && auth.user) {
            const nuserProfile = {...userProfile}
            nuserProfile.tenantId = tenantId

            const result = await updateTenantIdPreference(auth.user.access_token, tenantId, LidotelAppConfig? LidotelAppConfig.api.baseUri ?? '' : '' )

            if (result) await auth.signinRedirect()
        }
    }

    return {
        handleLogIn, 
        handleLogOut,
        handleChangeTenantId
    }
}

export default useAuthActions