import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/global"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import LoadingCover from "../../components/loading-cover/loading-cover"
import ContactSuccess from "./contact-success/contact-success"
// import ContactErr from "./contact-err/contact-err"
import ContactTitle from "./contact-title/contact-title"
import ContactForm from "./contact-form/contact-form"
import "./contact.scss"

const Mission = () => {
    /* Global Variables */
    const {
        dialog
    } = useContext(GlobalContext)

    /* Hooks */
    const location = useLocation();
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page contact">
            {dialog.contact.loading ? <LoadingCover/> : null}
            {dialog.contact.success ? <ContactSuccess/> : null}
            <ContactTitle/>
            <ContactForm/>
        </div>
    )
}

export default Mission