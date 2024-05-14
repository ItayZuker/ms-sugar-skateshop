import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import { useMedia } from "../../hooks/useMedia"
import MTerms from "./m-terms/m-terms"
import DTerms from "./d-terms/d-terms"
import "./terms-and-conditions.scss"

const TermsAndConditions = () => {

    /* Global */
    const { media } = useMedia()

    const location = useLocation()

    /* Triggers */
    useEffect(() => {
        goToPageTop()
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