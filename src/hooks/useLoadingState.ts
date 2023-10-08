import { useState, useEffect, useContext } from 'react'
import { LidotelAuthDataContext, UserProfileContext } from '../context'
import { LoadingState } from '../core/AppStates.types'

interface UseLoadingStateProps {
   
}

const useLoadingState = (params?: UseLoadingStateProps) => {
    const { auth } = useContext(LidotelAuthDataContext)
    const { loadingProfile } = useContext(UserProfileContext)
    const [ firstLoad, setFirstLoad ] = useState(true)
    const [loadingState, setLoadingState] = useState<LoadingState>('starting')
    const [ stateMessage, setStateMessage ] = useState<string>('starting...')

    const getStateMessage = (state: string) => {
        if (state === 'starting')
            return 'Starting...'

        if (state === 'profile')
            return 'Loading profile...'

        if (state === 'apps')
            return 'Loading apps...'

        return 'Finished loading...'
    }

    useEffect(() => {
        if (firstLoad) {
            if (loadingProfile) {
                setStateMessage(getStateMessage('profile'))
                setLoadingState('profile')
            }
            else {
                setFirstLoad(false)
                setLoadingState('finished')
                setStateMessage(getStateMessage('finished'))
            }
        }
    }, [ auth, loadingProfile ])

    return {
        loadingState,
        stateMessage
    }
}

export default useLoadingState