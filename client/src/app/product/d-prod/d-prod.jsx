import React from "react"
import PNotification from "../parts/p-notification/p-notification"
import DPMainSection from "./d-p-main-section/d-p-main-section"
import DPRelatedSection from "./d-p-related-section/d-p-related-section"
import "./d-prod.scss"

const DProd = ({ setNotifyWhenAvailable, notifyWhenAvailable }) => {

    /* JSX */
    return (
        <div className="d-prod-container">
            <PNotification
                setNotifyWhenAvailable={setNotifyWhenAvailable}
                notifyWhenAvailable={notifyWhenAvailable}/>
            <DPMainSection
                setNotifyWhenAvailable={setNotifyWhenAvailable}/>
            <DPRelatedSection/>
        </div>
    )
}

export default DProd