import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import { ShopifyContext } from "../../../../context/shopify"
import { useNavigate } from "react-router-dom"
import { Img } from "react-image"
import "./c-item-img.scss"

const CItemImg = ({ img, item }) => {

    /* Global */
    const {
        media
    } = useContext(GlobalContext)

    const {
        store
    } = useContext(ShopifyContext)

    const navigate = useNavigate()

    /* Functions */
    const handleMobileClick = () => {
        if (media?.type === "mobile") {
            const variantId = item?.variant?.id
            const variantSplit = variantId?.split("/")
            const variantIdNumber = variantSplit[variantSplit?.length - 1]
            const product = store?.products?.find(product => {
                return product?.variants?.find(variant => variant?.idNumber === variantIdNumber)
            })
            navigate(`/product/${product?.idNumber}/${variantIdNumber}`, { replace: true });
        }
    }

    /* JSX */
    return (
        <div
            onClick={handleMobileClick}
            className="c-item-img-container">
            <Img src={img?.src} alt={img?.altText}/>
        </div>
    )
}

export default CItemImg