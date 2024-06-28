import React from "react"
import { Link } from 'react-router-dom'
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-i-agree.scss"

const EFormIAgree = ({ iAgree, setIagree, data }) => {

    /* Global */
    const { translate } = useTranslation()

    /* Functions */
    const toggleIAgree = () => {
        setIagree(prev => !prev)
    }

    /* JSX */
    return (
        <div 
            onPointerDown={toggleIAgree}
            className="e-form-i-agree-container">
            <p>{translate("pages.exchange.disclamer_message")}</p>
            <p>{translate("pages.exchange.read_more")} <Link to="/terms-and-conditions" target="_blank">{translate("pages.exchange.read_more_link")}</Link></p>
            <div className={"e-form-i-agree-input-container " +
                    (iAgree ? "active " : "") +
                    (data.iAgree.error ? "error " : "")}>
                <div className="i-agree-squer">
                    <span className="material-symbols-outlined">check</span>
                </div>
                <p>{translate("pages.exchange.i_agree")}</p>
            </div>
        </div>
    )
}

export default EFormIAgree