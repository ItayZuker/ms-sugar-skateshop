import React from "react"
import { Link } from "react-router-dom"
import "./faq-contact.scss"

const FAQContact = () => {

    /* JSX */
    return (
        <div className="faq-contact-container">
            <Link to="/contact">(Go to Contact if you don't find your Answer)</Link>
        </div>
    )
}

export default FAQContact