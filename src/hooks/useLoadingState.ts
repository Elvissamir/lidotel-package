import { useState, useEffect, useContext } from 'react'
import { UserProfileContext } from '../context'
import { LoadingState } from '../core/AppStates.types'

const useLoadingState = () => {
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
    }, [ loadingProfile ])

    return {
        loadingState,
        stateMessage
    }
}

export default useLoadingState