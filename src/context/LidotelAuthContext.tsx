import { createContext } from 'react'
import { LidotelAppConfig } from '../core/LidotelApp.types'
import { AuthProvider } from 'react-oidc-context'
import { createLidotelAppConfig } from '../helpers'
import { LidotelAuthDataContextProvider } from './LidotelAuthDataContext'

interface ILidotelAuthContext {
    LidotelAppConfig: LidotelAppConfig | null
}

export const LidotelAuthContext = createContext<ILidotelAuthContext>({
    LidotelAppConfig: null
})

interface LidotelAuthContextProviderProps {
    children: JSX.Element
    LidotelAppConfig: LidotelAppConfig
}

export const LidotelAuthContextProvider = ({ children, LidotelAppConfig }: LidotelAuthContextProviderProps) => {
    const oidcLidotelAppConfig = createLidotelAppConfig(LidotelAppConfig)

    return (
        <AuthProvider {...oidcLidotelAppConfig}>
            <LidotelAuthDataContextProvider LidotelAppConfig={LidotelAppConfig}>
                {children}
            </LidotelAuthDataContextProvider>
        </AuthProvider>
    )
}