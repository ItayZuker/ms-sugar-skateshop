import React from "react"
import "./faq-input.scss"

const FAQInput = ({ setString }) => {

    /* Functions */
const handleChange = (e) => {
    setString(e.target.value)
}

    /* JSX */
    return (
        <div className="faq-input-container">
            <input
                onChange={handleChange}
                name="faq"
                type="text"
                placeholder="Question here..."/>
        </div>
    )
}

export default FAQInput