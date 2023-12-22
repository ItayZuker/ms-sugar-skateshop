import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import DShopCollectionDropdownItem from "./d-shop-collection-dropdown-item/d-shop-collection-dropdown-item"
import "./d-shop-category-dropdown.scss"

const DShopCategoryDropdown = ({ open, setOpen }) => {

    /* Global Variables */
    const { store, setStore } = useContext(ShopifyContext)


    /* Functions */
    const selectCollection = ({ title, id }) => {
        setStore(prev => ({...prev, display: {...prev.display, collection: {title, id}}}))
    }

    /* JSX */
    return (
        <div className={"d-shop-category-dropdown-container " + (open ? "open" : "")}>
            <DShopCollectionDropdownItem
                setOpen={setOpen}
                id={null}
                selectCollection={ selectCollection}
                title={"all products"}/>
            {store.collections.map((collection, i) => {
                return <DShopCollectionDropdownItem
                    key={i}
                    setOpen={setOpen}
                    id={collection.id}
                    selectCollection={selectCollection}
                    title={collection.title}/>
            })}
        </div>
    )
}

export default DShopCategoryDropdown