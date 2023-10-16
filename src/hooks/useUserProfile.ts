import { useState, useEffect } from 'react'
import { Preference, UserProfile } from '../core'
import { fetchUserProfile } from '../services'

interface UseUserProfileProps {
    apiUrl: string
}

const useUserProfile = ({ apiUrl }: UseUserProfileProps) => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
    const [ loadingProfile, setLoadingProfile ] = useState(true)

    const fetchProfile = async () => {
        try {
            const token = ''

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

    useEffect(() => {
        fetchProfile()
    }, [])

    return {
        loadingProfile,
        userProfile,
        setUserProfile
    }
}

export default useUserProfile