import React from "react"
import "./faq-top.scss"
import FAQInput from "./faq-input/faq-input"

const FAQTop = ({ setString }) => {

    /* JSX */
    return (
        <div className="faq-top-container">
            <FAQInput setString={setString}/>
        </div>
    )
}

export default FAQTop