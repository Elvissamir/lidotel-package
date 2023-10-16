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

export interface LidotelAppConfig {
    api: Api
    app: App
}

export interface UserProfileContextData {
    userProfile: UserProfile | null
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
    loadingProfile: boolean
}