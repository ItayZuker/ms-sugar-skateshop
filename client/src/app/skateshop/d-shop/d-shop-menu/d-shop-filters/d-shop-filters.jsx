import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import ProductOption from "../../../../../components/product-option/product-option"
import "./d-shop-filters.scss"

const DShopFilters = ({ open }) => {

    /* Global Variables */
    const { storeDisplay } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className={"d-shop-filters-container " + (open ? "category-open" : "")}>
            {storeDisplay?.options?.map((option, i) => {
                return <ProductOption key={i} option={option}/>
            })}
        </div>
    )
}

export default DShopFilters