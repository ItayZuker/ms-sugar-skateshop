import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./desktop-footer-top-right.scss"

const DesktopFooterTopRight = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="desktop-footer-top-right-container">
            <p>{translate("footer.built_with_love.title")} <span className="material-symbols-outlined">favorite</span></p>
            <p>contact@ms-sugar.com</p>
        </div>
    )
}

export default DesktopFooterTopRight