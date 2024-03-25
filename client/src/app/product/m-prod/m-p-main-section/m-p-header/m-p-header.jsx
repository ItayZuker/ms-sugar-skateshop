import React from "react"
import PTitle from "../../../parts/p-title/p-title"
import PPrice from "../../../parts/p-price/p-price"
import "./m-p-header.scss"

const MPHeader = () => {

    /* JSX */
    return (
        <div className="m-p-header-container">
            <PTitle/>
            <PPrice/>
        </div>
    )
}

export default MPHeader