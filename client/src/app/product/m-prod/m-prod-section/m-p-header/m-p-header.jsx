import React from "react"
import PTitle from "../../../parts/p-title/p-title"
import PStock from "../../../parts/p-stock/p-stock"
import "./m-p-header.scss"
import PPrice from "../../../parts/p-price/p-price"

const MPHeader = () => {

    /* JSX */
    return (
        <div className="m-p-header-container">
            <PTitle/>
            {/* <PStock/> */}
            <PPrice/>
        </div>
    )
}

export default MPHeader