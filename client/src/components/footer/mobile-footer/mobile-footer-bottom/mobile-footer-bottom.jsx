import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./mobile-footer-bottom.scss"

const MobileFooterBottom = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="mobile-footer-bottom-container">
            <p>contact@ms-sugar.com</p>
            <p>{translate("footer.built_with_love.title")} <span className="material-symbols-outlined">favorite</span></p>
            <p>{translate("footer.copyright.line_one")}</p>
        </div>
    )
}

export default MobileFooterBottom