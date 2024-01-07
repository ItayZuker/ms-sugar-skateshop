import React, { useContext, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { GlobalContext } from "../../context/global"
import { ShopifyContext } from "../../context/shopify"
import { goToPageTop } from "../../lib/helpers"
import MProduct from "./m-product/m-product"
import DProduct from "./d-product/d-product"
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
    let { productId } = useParams()

    /* Triggers */
    useEffect(() => {
        goToPageTop()
        updateProduct()
    }, [location, loadingStore])


    /* Functions */
    const updateProduct = () => {
        updateProductDisplay({ productId })
    }

    /* JSX */
    if (!storeDisplay?.variant?.available) {

    } else {
        return (
            <div className="page product">
                {media?.type === "mobile"
                    ? <MProduct/>
                    : <DProduct/>
                }
            </div>
        )
    }
}

export default Product