import { createContext } from 'react'
import { LidotelAppConfig } from '../core/LidotelApp.types'
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
    return (
        <LidotelAuthDataContextProvider LidotelAppConfig={LidotelAppConfig}>
            {children}
        </LidotelAuthDataContextProvider>
    )
}