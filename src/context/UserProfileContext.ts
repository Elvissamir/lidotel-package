import { createContext } from 'react'
import { UserProfileContextData } from '../core/LidotelApp.types'

export const UserProfileContext = createContext<UserProfileContextData>({
    userProfile: null, 
    loadingProfile: false,
    setUserProfile: () => null
})