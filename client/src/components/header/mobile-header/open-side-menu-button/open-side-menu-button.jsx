import React, { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { GlobalContext } from "../../../../context/global"
import "./open-side-menu-button.scss"

const OpenSideMenuButton = () => {

    /* Global */
    const { setIsSideMenuOpen } = useContext(GlobalContext)
    const location = useLocation()

    /* Triggers */
    useEffect(() => {
        updateIsSideMenuOpen()
    }, [location])

    /* Functions */
    const updateIsSideMenuOpen = () => {
        setIsSideMenuOpen(false)
    }

    const handleClick = () => {
        setIsSideMenuOpen(prev => !prev)
    }

    /* JSX */
    return <span
        onClick={handleClick}
        className="open material-symbols-outlined">more_horiz</span>
}

export default OpenSideMenuButton