import { useState, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import { Preference, UserProfile } from '../core'
import { fetchUserProfile } from '../services'

interface UseUserProfileProps {
    apiUrl: string
}

const useUserProfile = ({ apiUrl }: UseUserProfileProps) => {
    const auth = useAuth()
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
    const [ loadingProfile, setLoadingProfile ] = useState(true)

    const fetchProfile = async () => {
        if (auth.user) {
            try {
                const token = auth.user.access_token

                setLoadingProfile(true)
                const result = await fetchUserProfile(token, apiUrl)
                setLoadingProfile(false)

                if (result.type === 'Response') {
                    const preferences: Preference[] = result.data.preferences
                    const tenantPref = preferences.find(preference => preference.code === "selectedtenantid")
    
                    setUserProfile({...result.data, tenantId: tenantPref? tenantPref.value : "" })
                }
            }
            catch(ex) {
                console.error('Unexpected error when fetching userProfile')
            }
        }
    }

    useEffect(() => {
        if (auth.user && !auth.isLoading && auth.isAuthenticated)
            fetchProfile()
    }, [auth])

    return {
        loadingProfile,
        userProfile,
        setUserProfile
    }
}

export default useUserProfile