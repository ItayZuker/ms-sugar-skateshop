import React, { useContext, useEffect } from "react"
import { HelmetContext } from "../../context/helmet"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import { useMedia } from "../../hooks/useMedia"
import MTerms from "./m-terms/m-terms"
import DTerms from "./d-terms/d-terms"
import "./terms-and-conditions.scss"

const TermsAndConditions = () => {

    /* Global */
    const { updateOgTags } = useContext(HelmetContext)

    const { media } = useMedia()

    const location = useLocation()

    /* Triggers */
    useEffect(() => {
        goToPageTop()
        updateOgTags({
            url: `ms-sugar.com/${location.pathname}`,
            title: "Ms-Sugar Terms & Conditions"
        })
    }, [location])

    /* JSX */
    return (
        <div className="page terms-and-conditions">
            {media?.type === "mobile"
                ? <MTerms/>
                : <DTerms/>
            }
        </div>
    )
}

export default TermsAndConditions