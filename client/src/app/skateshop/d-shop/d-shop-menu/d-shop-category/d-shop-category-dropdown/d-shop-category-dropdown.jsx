import React, { useContext, useEffect } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import DShopCollectionDropdownItem from "./d-shop-collection-dropdown-item/d-shop-collection-dropdown-item"
import "./d-shop-category-dropdown.scss"
import { useState } from "react"

const DShopCategoryDropdown = ({ open, setOpen }) => {

    /* Global Variables */
    const {
        store,
        
    } = useContext(ShopifyContext)

    /* Locale Variables */
    const [option, setOptions] = useState([])

    /* Triggers */
    useEffect(() => {
        updateOptions()
    }, [store])

    /* Functions */
    const updateOptions = () => {
        if (store?.options?.length > 0) {
            const sort = ["decks", "wheels", "bearings", "trucks", "grips", "all products"] 
            setOptions(() => {
                return store.options
                    .filter(option => sort.includes(option.title.toLowerCase()))
                    .sort((a, b) => sort.indexOf(a.title.toLowerCase()) - sort.indexOf(b.title.toLowerCase()))
            })
        }
    }

    /* JSX */
    return (
        <div className={"d-shop-category-dropdown-container " + (open ? "open " : "")}>
            {option.map((option, i) => {
                return <DShopCollectionDropdownItem
                    key={i}
                    setOpen={setOpen}
                    collection={option}
                    title={option.title}/>
            })}
        </div>
    )
}

export default DShopCategoryDropdown