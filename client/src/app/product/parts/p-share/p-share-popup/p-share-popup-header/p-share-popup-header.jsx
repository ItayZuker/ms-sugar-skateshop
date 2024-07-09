import React from "react"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./p-share-popup-header.scss"

const PSharePopupHeader = ({ setShare }) => {

    /* Global */
    const { t } = useTranslation()

    /* Functions */
    const closeShare = () => {
        setShare(false)
    }

    /* JSX */
    return (
        <div className="p-share-popup-header-container">
            <h3>{t("pages.product.share.title")}</h3>
            <div
                onClick={closeShare}
                className="p-share-popup-icon-container">
                <span className="material-symbols-outlined">close</span>
            </div>
        </div>
    )
}

export default PSharePopupHeader