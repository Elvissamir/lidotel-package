import { useState } from 'react'

const useSettingsModal = () => {
    const [ showSettingsModal, setShowSettingsModal ] = useState(false)

    const openSettingsModal = () => {
        setShowSettingsModal(true)
    }

    const hideSettingsModal = () => {
        setShowSettingsModal(false)
    }

    return {
        showSettingsModal,
        openSettingsModal,
        hideSettingsModal
    }
}

export default useSettingsModal