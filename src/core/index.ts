import { ExternalAppData } from './Apps.types'
import { Preference, Tenant, UserData, UserProfile } from './User.types'
import { LidotelAppConfig } from './LidotelApp.types'
import { User } from 'oidc-client-ts'
import { Route } from './AppRoutes.types'
import { LoadingState } from './AppStates.types'

export type {
    LidotelAppConfig,
    User,
    ExternalAppData,
    Preference,
    Tenant,
    UserProfile,
    UserData,
    Route,
    LoadingState,
}