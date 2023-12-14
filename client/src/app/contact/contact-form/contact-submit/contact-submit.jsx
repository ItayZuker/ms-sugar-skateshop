import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import "./contact-submit.scss"

const ContactSubmit = () => {

    /* Global Variables */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="contact-submit-container">
            <input
                className={"submit " + (dialog?.contact?.loading ? "loading" : "")}
                type="submit"
                value="Send"/>
        </div>
    )
}

export default ContactSubmit