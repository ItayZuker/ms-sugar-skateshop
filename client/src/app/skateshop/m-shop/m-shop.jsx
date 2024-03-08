import React from "react"
import MSTop from "./m-s-top/m-s-top"
import MSDisplay from "./m-s-display/m-s-display"
import "./m-shop.scss"

const MShop = ({ products, categories }) => {

    /* JSX */
    return (
        <div className="m-shop-container">
            <MSTop
                categories={categories}/>
            <MSDisplay
                products={products}/>
        </div>
    )
}

export default MShop