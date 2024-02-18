import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import DSCatItem from "./d-s-cat-item/d-s-cat-item"
import DSCatSelected from "./d-s-cat-selected/d-s-cat-selected"
import DSCatDrop from "./d-s-cat-drop/d-s-cat-drop"
import "./d-s-cat.scss"

const DSCat = () => {

    /* Global */
    const {
        store
    } = useContext(ShopifyContext)

    /* Locale */
    const [categories, setCategories] = useState([])

    /* Triggers */
    useEffect(() => {
        updateOptions()
    }, [store])

    /* Functions */
    const updateOptions = () => {
        if (store?.options?.length > 0) {
            const sort = ["all products", "decks", "wheels", "bearings", "trucks", "grips"] 
            setCategories(() => {
                return store.options
                    .filter(option => sort.includes(option?.title?.toLowerCase()))
                    .sort((a, b) => sort.indexOf(a?.title?.toLowerCase()) - sort?.indexOf(b?.title?.toLowerCase()))
            })
        }
    }

    /* JSX */
    return (
        <ul className="d-s-cat-container">
            {categories?.map((cat, i) => {
                return <DSCatItem key={i} cat={cat}/>
            })}
        </ul>
    )
}

export default DSCat