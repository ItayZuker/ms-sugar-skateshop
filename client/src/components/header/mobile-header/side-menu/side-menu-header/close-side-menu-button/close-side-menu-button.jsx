import React, { useContext } from "react"
import { GlobalContext } from "../../../../../../context/global"
import "./close-side-menu-button.scss"

const CloseSideMenuButton = () => {

    /* Global Variables */
    const {
        setIsSideMenuOpen
    } = useContext(GlobalContext)

    /* Functions */
    const handlePointerDown = () => {
        setIsSideMenuOpen(false)
    }

    /* JSX */
    return (
        <span
            onPointerDown={handlePointerDown}
            className="close material-symbols-outlined">close</span>
    )
}

export default CloseSideMenuButton