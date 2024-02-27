import React from "react"
import MobileFooterTop from "./mobile-footer-top/mobile-footer-top"
import MobileFoolerCenter from "./mobile-fooler-center/mobile-fooler-center"
import MobileFooterBottom from "./mobile-footer-bottom/mobile-footer-bottom"
import { useLocation } from "react-router-dom"
import "./mobile-footer.scss"

const MobileFooter = () => {

    /* Global */
    const location = useLocation();

    /* JSX */
    return (
        <footer className="mobile">
            {(location.pathname !== "/exchange")
                && <div className="inner-container">
                        <MobileFooterTop/>
                        <MobileFoolerCenter/>
                        <MobileFooterBottom/>
                    </div>}
        </footer>
    )
}

export default MobileFooter