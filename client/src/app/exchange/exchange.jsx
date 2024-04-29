import React, { useContext, useEffect } from "react"
import { HelmetContext } from "../../context/helmet"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import EFormSection from "./e-form-section/e-form-section"
import "./exchange.scss"

const Exchange = () => {

    /* Global */
    const { updateOgTags } = useContext(HelmetContext)

    const location = useLocation()

    /* Triggers */
    useEffect(() => {
        goToPageTop()
        updateOgTags({url: `ms-sugar.com/${location.pathname}`})
    }, [location])

    /* JSX */
    return (
        <div className="page exchange">
            <EFormSection/>
        </div>
    )
}

export default Exchange