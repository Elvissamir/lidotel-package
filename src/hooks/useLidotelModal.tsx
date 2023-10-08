import { useState } from 'react'

const useLidotelModal = () => {
    const [ showLidotelModal, setShowLidotelModal ] = useState(false)

    const openLidotelModal = () => {
        setShowLidotelModal(true)
    }

    const hideLidotelModal = () => {
        setShowLidotelModal(false)
    }

    return {
        showLidotelModal,
        openLidotelModal,
        hideLidotelModal
    }
}

export default useLidotelModal