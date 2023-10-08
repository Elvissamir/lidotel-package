import { useState } from 'react'

interface UseNotificationsBarProps {
    show: boolean
}

const useNotificationsBar = ({ show }: UseNotificationsBarProps) => {
    const [showNotificationsBar, setShowNotificationsBar] = useState(show)

    const onCloseNotificationsBar = () => {
        setShowNotificationsBar(false)
    }

    return {
        showNotificationsBar,
        onCloseNotificationsBar
    }
}

export default useNotificationsBar