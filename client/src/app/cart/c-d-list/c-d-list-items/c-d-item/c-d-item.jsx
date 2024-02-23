import React, { useContext } from "react"
import CItemLoading from "../../../parts/c-item-loading/c-item-loading"
import CItemDelete from "../../../parts/c-item-delete/c-item-delete"
import CItemCan from "../../../parts/c-item-can/c-item-can"
import CItemImg from "../../../parts/c-item-img/c-item-img"
import CItemData from "../../../parts/c-item-data/c-item-data"
import CItemQuantity from "../../../parts/c-item-quantity/c-item-quantity"
import CItemPrice from "../../../parts/c-item-price/c-item-price"
import { useNavigate } from "react-router-dom"
import { ShopifyContext } from "../../../../../context/shopify"
import "./c-d-item.scss"

const CDItem = ({ item, trigerDelete, setTrigerDelete, index, loading, setLoading }) => {

    /* Global */
    const {
        store
    } = useContext(ShopifyContext)

    const navigate = useNavigate()

    /* Functions */
    const handlePinterDown = () => {
        const variantId = item.variant.id
        const variantSplit = variantId.split("/")
        const variantIdNumber = variantSplit[variantSplit.length - 1]
        const product = store.products.find(product => {
            return product.variants.find(variant => variant.idNumber === variantIdNumber)
        })
        navigate(`/product/${product.idNumber}/${variantIdNumber}`, { replace: true });
    }

    /* JSX */
    return (
        <div className="c-d-item-container">
            <CItemLoading
                index={index}
                loading={loading}
                setLoading={setLoading}/>
            <CItemDelete
                setLoading={setLoading}
                index={index}
                trigerDelete={trigerDelete}
                setTrigerDelete={setTrigerDelete}
                item={item}/>
            <div className="c-d-item-inner-container">
                <div
                    onPointerDown={handlePinterDown}
                    className="c-d-item-part-one">
                    <CItemImg img={item?.variant?.image}/>
                    <CItemData item={item}/>
                </div>
                <div className="c-d-item-part-two">
                    <div className="c-d-item-inner-part-two">
                        <CItemQuantity
                            index={index}
                            setTrigerDelete={setTrigerDelete}
                            item={item}/>
                        <CItemPrice item={item}/>
                    </div>
                    <CItemCan
                        index={index}
                        setTrigerDelete={setTrigerDelete}/>
                </div>
            </div>
        </div>
    )
}

export default CDItem