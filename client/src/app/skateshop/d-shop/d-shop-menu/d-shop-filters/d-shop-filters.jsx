import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import DDecksFilter from "./d-decks-filter/d-decks-filter"
import DWheelsFilter from "./d-wheels-filter/d-wheels-filter"
import DBearingsFilter from "./d-bearings-filter/d-bearings-filter"
import DTrucksFilter from "./d-trucks-filter/d-trucks-filter"
import "./d-shop-filters.scss"

const DShopFilters = () => {

    /* Global Variables */
    const { storeDisplay } = useContext(ShopifyContext)

    /* Locale Variables */
    const [filter, setFilter] = useState("")

    /* Triggers */
    useEffect(() => {
        updateFilter()
    }, [storeDisplay])

    /* Functions */
    const updateFilter = () => {
        setFilter(storeDisplay?.collection?.title?.toLowerCase())
    }

    /* JSX */
    return (
        <div className="d-shop-filters-container">
            { filter === "decks" ? <DDecksFilter/> : null }
            { filter === "wheels" ? <DWheelsFilter/> : null }
            { filter === "bearings" ? <DBearingsFilter/> : null }
            { filter === "trucks" ? <DTrucksFilter/> : null }
        </div>
    )
}

export default DShopFilters