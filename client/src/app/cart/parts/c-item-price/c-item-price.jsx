import React, { useEffect, useState } from "react"
import { formatPrice } from "../../../../lib/helpers"
import "./c-item-price.scss"

const CItemPrice = ({ item }) => {

    /* Locale */
    const [price, setPrice] = useState(0)

    /* Triggers */
    useEffect(() => {
        updatePrice()
    }, [item?.quantity])

    /* Functions */
    const updatePrice = () => {
        const amountOfOne = Number(item?.variant?.price?.amount)
        setPrice(amountOfOne * item.quantity)
    }

    /* JSX */
    return (
        <div className="c-item-price-container">
            <p>{formatPrice(price, item?.variant?.price?.currencyCode)}</p>
        </div>
    )
}

export default CItemPrice