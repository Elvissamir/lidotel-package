import { useContext } from "react"
import { LidotelAuthDataContext, UserProfileContext } from "../context"

interface UseTeeAuthDataProps {
    
}

const useAuthActions = (params?: UseTeeAuthDataProps) => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    const handleLogOut = async () => {
        
    }

    const handleLogIn = async () => {
        
    }

    return {
        handleLogIn, 
        handleLogOut,
    }
}

export default useAuthActions