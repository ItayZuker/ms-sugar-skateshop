import React from "react"
import MSTop from "./m-s-top/m-s-top"
import MSDisplay from "./m-s-display/m-s-display"
import "./m-shop.scss"

const MShop = ({ products, tab, setTab, collectionOptions, categories }) => {

    /* JSX */
    return (
        <div className="m-shop-container">
            <MSTop
                collectionOptions={collectionOptions}
                categories={categories}
                tab={tab}
                setTab={setTab}/>
            <MSDisplay
                products={products}/>
        </div>
    )
}

export default MShop