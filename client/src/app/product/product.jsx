import React, { useContext, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { ShopifyContext } from "../../context/shopify"
import { useMedia } from "../../hooks/useMedia"
import { goToPageTop } from "../../lib/helpers"
import MProd from "./m-prod/m-prod"
import DProd from "./d-prod/d-prod"
import "./product.scss"

const Product = () => {

    /* Global */
    const { updateProductDisplay, storeDisplay, loadingStore } = useContext(ShopifyContext)
    const { media } = useMedia()
    const { productId, variantId } = useParams()
    const location = useLocation()
   
    /* Locale */
    const [notifyWhenAvailable, setNotifyWhenAvailable] = useState(false)

    /* Triggers */
    useEffect(() => {
        goToPageTop()
        updateProduct()
    }, [location, loadingStore, storeDisplay?.product])
 
    /* Functions */
    const updateProduct = () => {
        updateProductDisplay({ productId, variantId })
    }

    /* JSX */
    if (storeDisplay?.product) {
        return (
            <div className="page product">
                {media?.type === "mobile"
                    ? <MProd
                        notifyWhenAvailable={notifyWhenAvailable}
                        setNotifyWhenAvailable={setNotifyWhenAvailable}/>
                    : <DProd
                        notifyWhenAvailable={notifyWhenAvailable}
                        setNotifyWhenAvailable={setNotifyWhenAvailable}/>
                }
            </div>
        )
    }
}

export default Product