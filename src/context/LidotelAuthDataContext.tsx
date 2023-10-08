import { createContext, useEffect } from 'react'
import { LidotelAppConfig } from '../core/LidotelApp.types'
import { AuthContextProps, useAuth } from 'react-oidc-context'
import { UserProfileContext } from './UserProfileContext'
import { useUserProfile } from '../hooks'

interface ILidotelAuthDataContext {
    LidotelAppConfig: LidotelAppConfig | null
    auth: AuthContextProps | null
}

export const LidotelAuthDataContext = createContext<ILidotelAuthDataContext>({
    LidotelAppConfig: null,
    auth: null
})

interface LidotelAuthContextProviderProps {
    children: JSX.Element
    LidotelAppConfig: LidotelAppConfig
}

export const LidotelAuthDataContextProvider = ({ children, LidotelAppConfig }: LidotelAuthContextProviderProps) => {
    const auth = useAuth() 
    const { 
        userProfile, 
        setUserProfile,
        loadingProfile } = useUserProfile({ apiUrl: LidotelAppConfig.api.baseUri ?? '' })

    console.log("Lidotel package version", "1.0.0")

    useEffect(() => {
        auth.events.addSilentRenewError(async () => {
            await auth.signinRedirect()
        })
    }, [])

    return (
        <LidotelAuthDataContext.Provider value={{ auth, LidotelAppConfig }}>
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