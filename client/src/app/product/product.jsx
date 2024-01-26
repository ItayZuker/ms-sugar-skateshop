import React, { useContext, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { GlobalContext } from "../../context/global"
import { ShopifyContext } from "../../context/shopify"
import { goToPageTop } from "../../lib/helpers"
import MProd from "./m-prod/m-prod"
import DProd from "./d-prod/d-prod"
import "./product.scss"

const Product = () => {

    /* Global */
    const {
        media,
    } = useContext(GlobalContext)

    const {
        updateProductDisplay,
        storeDisplay,
        loadingStore
    } = useContext(ShopifyContext)
   
    /* Hooks */
    const location = useLocation()
    const { productId, variantId } = useParams()

    /* Triggers */
    useEffect(() => {
        goToPageTop()
        updateProduct()
    }, [location, loadingStore, storeDisplay.product])
 
    /* Functions */
    const updateProduct = async () => {
        updateProductDisplay({ productId, variantId })
    }

    /* JSX */
    if (!storeDisplay?.variant?.available) {
        return (
            <div className="page product"/>
        )
    } else {
        return (
            <div className="page product">
                {media?.type === "mobile"
                    ? <MProd/>
                    : <DProd/>
                }
            </div>
        )
    }
}

export default Product