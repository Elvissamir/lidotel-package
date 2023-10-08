import { useState, useEffect, useContext } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { LidotelAuthDataContext } from '../context'

interface UseIdleSessionProps {
    timeout: number
}

const useIdleSession = ({ timeout }: UseIdleSessionProps) => {
    const [ showInactiveModal, setShowInactiveModal ] = useState(false)
    const [ isSessionInactive, setIsSessionInactive ] = useState(false)

    const onCloseInactiveModal = async () => {
        setShowInactiveModal(false)
        setIsSessionInactive(false)
    }

    const handleIdle = () => setIsSessionInactive(true)

    const idleTimer = useIdleTimer({
        timeout,
        onIdle: handleIdle
    })

    useEffect(() => {
        if (isSessionInactive) {
            idleTimer.reset()
            setShowInactiveModal(true)
        }
    }, [ isSessionInactive ])

    return {
        showInactiveModal,
        onCloseInactiveModal
    }
}

export default useIdleSession