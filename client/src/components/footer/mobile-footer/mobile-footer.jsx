import React from "react"
import MobileFooterTop from "./mobile-footer-top/mobile-footer-top"
import MobileFoolerCenter from "./mobile-fooler-center/mobile-fooler-center"
import MobileFooterBottom from "./mobile-footer-bottom/mobile-footer-bottom"
import "./mobile-footer.scss"

const MobileFooter = () => {

    /* JSX */
    return (
        <footer className="mobile">
            <div className="inner-container">
                <MobileFooterTop/>
                <MobileFoolerCenter/>
                <MobileFooterBottom/>
            </div>
        </footer>
    )
}

export default MobileFooter