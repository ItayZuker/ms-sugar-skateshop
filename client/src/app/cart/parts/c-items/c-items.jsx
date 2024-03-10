import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { useMedia } from "../../../../hooks/useMedia"
import CPlaceholder from "../c-placeholder/c-placeholder"
import CItem from "./c-item/c-item"
import "./c-items.scss"

const CItems = ({ loading, setLoading, trigerDelete, setTrigerDelete }) => {

    /* Global */
    const { cart } = useContext(ShopifyContext)

    const { media } = useMedia()

    /* JSX */
    return (
        <div className="c-items-container">
            <div className="c-items-inner-container">
                {cart?.lineItems?.map((item, i) => {
                    return <CItem
                        index={i}
                        key={i}
                        item={item}
                        loading={loading}
                        setLoading={setLoading}
                        trigerDelete={trigerDelete}
                        setTrigerDelete={setTrigerDelete}/>
                    })}
                { media.type !== "mobile" && (cart?.lineItems?.length === 0 || !cart?.lineItems?.length) && <CPlaceholder/> }
            </div>
        </div>
    )
}

export default CItems