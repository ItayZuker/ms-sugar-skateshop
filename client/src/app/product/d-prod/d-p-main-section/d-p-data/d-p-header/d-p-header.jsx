import React from "react"
import PTitle from "../../../../parts/p-title/p-title"
import PShare from "../../../../parts/p-share/p-share"
import "./d-p-header.scss"

const DPHeader = () => {

    /* JSX */
    return (
        <div className="d-p-header-container">
            <PTitle/>
            <PShare/>
        </div>
    )
}

export default DPHeader