import React from "react"
import { Link } from 'react-router-dom'
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-i-agree.scss"

const EFormIAgree = ({ iAgree, setIagree, data }) => {

    /* Global */
    const { t } = useTranslation()

    /* Functions */
    const toggleIAgree = () => {
        setIagree(prev => !prev)
    }

    /* JSX */
    return (
        <div 
            role="button"
            tabIndex="0"
            aria-pressed={iAgree}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleIAgree()}
            onPointerDown={toggleIAgree}
            className="e-form-i-agree-container">
            <p>{t("pages.exchange.disclamer_message")}</p>
            <p>{t("pages.exchange.read_more")} <Link
                                                    to="/terms-and-conditions"
                                                    target="_blank">{t("pages.exchange.read_more_link")}</Link></p>
            <div 
                className={"e-form-i-agree-input-container " +
                    (iAgree ? "active " : "") +
                    (data.iAgree.error ? "error " : "")}>
                <div className="i-agree-squere">
                    <span className="material-symbols-outlined" aria-hidden="true">check</span>
                </div>
                <p>{t("pages.exchange.i_agree")}</p>
            </div>
        </div>
    )
}

export default EFormIAgree