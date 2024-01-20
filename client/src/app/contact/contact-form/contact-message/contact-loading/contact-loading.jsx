import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./contact-loading.scss"

const ContactLoading = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="contact-loading-container">
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ContactLoading