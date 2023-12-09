import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import DesktopFooterTopLeft from "./desktop-footer-top-left/desktop-footer-top-left"
import DesktopFooterTopCenter from "./desktop-footer-top-center/desktop-footer-top-center"
import DesktopFooterTopRight from "./desktop-footer-top-right/desktop-footer-top-right"
import "./desktop-footer-top.scss"

const DesktopFooterTop = () => {

    /* Global Variables */
    const { media } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="desktop-footer-top-container">
            <DesktopFooterTopLeft/>
            <DesktopFooterTopCenter/>
            <DesktopFooterTopRight/>
        </div>
    )
}

export default DesktopFooterTop