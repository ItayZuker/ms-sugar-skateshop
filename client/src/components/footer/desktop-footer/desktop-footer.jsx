import React from "react"
import DesktopFooterTop from "./desktop-footer-top/desktop-footer-top"
import DesktopFooterBottom from "./desktop-footer-bottom/desktop-footer-bottom"
import "./desktop-footer.scss"

const DesktopFooter = () => {

    /* JSX */
    return (
        <footer className="desktop">
            <div className="inner-container">
                <DesktopFooterTop />
                <DesktopFooterBottom />
            </div>
        </footer>
    )
}

export default DesktopFooter