import React from "react"
import DSProdHeaderTitle from "./d-s-prod-header-title/d-s-prod-header-title"
// import DSProdHeaderPrice from "./d-s-prod-header-price/d-s-prod-header-price"
import "./d-s-prod-header.scss"

const DSProdHeader = () => {

    /* JSX */
    return (
        <div className="d-s-prod-header-container">
            <DSProdHeaderTitle/>
            {/* <DSProdHeaderPrice/> */}
        </div>
    )
}

export default DSProdHeader