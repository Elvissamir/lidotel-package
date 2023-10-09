import { createContext, useEffect } from 'react'
import { LidotelAppConfig } from '../core/LidotelApp.types'
import { UserProfileContext } from './UserProfileContext'
import { useUserProfile } from '../hooks'

interface ILidotelAuthDataContext {
    LidotelAppConfig: LidotelAppConfig | null
}

export const LidotelAuthDataContext = createContext<ILidotelAuthDataContext>({
    LidotelAppConfig: null
})

interface LidotelAuthContextProviderProps {
    children: JSX.Element
    LidotelAppConfig: LidotelAppConfig
}

export const LidotelAuthDataContextProvider = ({ children, LidotelAppConfig }: LidotelAuthContextProviderProps) => {
    const { 
        userProfile, 
        setUserProfile,
        loadingProfile } = useUserProfile({ apiUrl: LidotelAppConfig.api.baseUri ?? '' })

    console.log("Lidotel package version", "1.0.0")

    return (
        <LidotelAuthDataContext.Provider value={{ LidotelAppConfig }}>
            <UserProfileContext.Provider value={{
                userProfile, 
                setUserProfile,
                loadingProfile
            }}>
                {children}
            </UserProfileContext.Provider>
        </LidotelAuthDataContext.Provider>
    )
}