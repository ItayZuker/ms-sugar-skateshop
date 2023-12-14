import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import ContactTitle from "./contact-title/contact-title"
import ContactForm from "./contact-form/contact-form"
import "./contact.scss"

const Mission = () => {

    /* Hooks */
    const location = useLocation();
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
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