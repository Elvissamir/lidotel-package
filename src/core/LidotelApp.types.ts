import { UserProfile } from "./User.types"

interface Api {
    baseUri: string
}
  
interface App {
    name: string
    subtitle: string
    basePath: string
    notificationsApplicationId: string 
    launcher?: string 
}
  
interface Auth {
    authority: string
    clientId: string
    redirectUri: string
    silentRedirectUri: string
    postLogoutRedirectUri: string
    scope: string
    responseType: string
    loadUserInfo: boolean
    automaticSilentRenew: boolean
    automaticSilentSignin: boolean
}

/*
interface Links {
    documentation: string
    apiPortal: string
    privacyPolicy: string
    launcherUri: string
    terms: string
    statusPage: string
    eula: string
}

interface ApiSchemas {
    'edfi': string
}
  
interface Signalr {
    global: string
    jobs: string
}

*/

export interface LidotelAppConfig {
    api: Api
    app: App
    auth: Auth
}

export interface UserProfileContextData {
    userProfile: UserProfile | null
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
    loadingProfile: boolean
}