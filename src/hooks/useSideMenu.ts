import { useState } from 'react'

const useSideMenu = () => {
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)

    const handleToggleSideMenu = () => setShowSideMenu(!showSideMenu)

    return {
        showSideMenu, 
        handleToggleSideMenu
    }
}

export default useSideMenu