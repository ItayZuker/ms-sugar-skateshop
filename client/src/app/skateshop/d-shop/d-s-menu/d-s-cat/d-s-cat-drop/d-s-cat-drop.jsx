import React, { useContext, useEffect } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import DSCollDropItem from "./d-s-coll-drop-item/d-s-coll-drop-item"
import { useState } from "react"
import "./d-s-cat-drop.scss"

const DSCatDrop = ({ open, setOpen }) => {

    /* Global */
    const {
        store,
    } = useContext(ShopifyContext)

    /* Locale */
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
        <ul className={"d-s-cat-drop-container " + (open ? "open " : "")}>
            {option.map((option, i) => {
                return <DSCollDropItem
                    key={i}
                    setOpen={setOpen}
                    collection={option}
                    title={option.title}/>
            })}
        </ul>
    )
}

export default DSCatDrop