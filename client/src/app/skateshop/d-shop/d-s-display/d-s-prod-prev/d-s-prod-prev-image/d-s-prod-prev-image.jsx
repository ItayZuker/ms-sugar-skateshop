import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { Img } from "react-image"
import placeholder from "../../../../../../assets/image-placeholder.svg"
import "./d-s-prod-prev-image.scss"

const DSProdPrevImage = ({ product }) => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [img, setImg] = useState({src: "", alt: ""})

    /* triggers */
    useEffect(() => {
        updateImg()
    }, [storeDisplay, product])

    /* Functions */
    const updateImg = () => {
        if (product.images[0]) {
            setImg({
                src: product.images[0].src,
                alt: product.images[0].alt
            })
        } else {
            setImg({src: placeholder, alt: "Skateshop image placeholder"})
        }

    }

    /* JSX */
    return (
        <div className={"d-s-prod-prev-image-container " + (product.availableForSale ? "" : "out-of-stock")}>
            <Img src={img.src} loading="lazy" alt={img.alt} />
            {/* {product.variants.map((variant, i) => {
                if (variant.available) {
                    return <p key={i}>{variant.title}</p>                }
            })} */}
        </div>
    )
}

export default DSProdPrevImage