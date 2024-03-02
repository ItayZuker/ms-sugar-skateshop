import React from "react"
import PTitle from "../../../../parts/p-title/p-title"
import PShare from "../../../../parts/p-share/p-share"
import "./d-s-prod-header.scss"

const DSProdHeader = () => {

    /* JSX */
    return (
        <div className="d-s-prod-header-container">
            <PTitle/>
            <PShare/>
        </div>
    )
}

export default DSProdHeader