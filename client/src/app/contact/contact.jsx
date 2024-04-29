import React, { useContext, useEffect } from "react"
// import { HelmetContext } from "../../context/helmet"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import ContactTitle from "./contact-title/contact-title"
import ContactForm from "./contact-form/contact-form"
import "./contact.scss"

const Mission = () => {

    /* Global */
    // const { updateOgTags } = useContext(HelmetContext)

    const location = useLocation()
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
        // updateOgTags({url: `ms-sugar.com/${location.pathname}`})
    }, [location])

    /* JSX */
    return (
        <div className="page contact">
            <ContactTitle/>
            <ContactForm/>
        </div>
    )
}

export default Mission