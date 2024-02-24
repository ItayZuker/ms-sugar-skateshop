import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import ProductOption from "../../../../components/product-option/product-option"
import "./m-s-filters.scss"

const MSFilters = ({ collectionOptions }) => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="m-s-filters-container">
            {collectionOptions.length > 0
                ? collectionOptions?.map((option, i) => {
                    return <ProductOption key={i} option={option}/>
                    })
                : <p>No filters for category:
                    <br/><span>{storeDisplay?.collection?.selected}</span></p>
            }
        </div>
    )
}

export default MSFilters