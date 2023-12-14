import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./contact-loading.scss"

const ContactLoading = () => {

    /* Global Variables */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    if (dialog?.contact?.loading) {
        return (
            <div className={"contact-loading-container " + (dialog?.contact?.loading ? "loading" : "")}>
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
}

export default ContactLoading