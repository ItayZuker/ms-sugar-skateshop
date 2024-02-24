import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { GlobalContext } from "../../../../context/global"
import MSCatItem from "./m-s-cat-item/m-s-cat-item"
import ProductOption from "../../../../components/product-option/product-option"
import "./m-s-top.scss"

const MSTop = ({ tab, setTab, categories, collectionOptions }) => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    const {
        scroll,
    } = useContext(GlobalContext)

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(false)

    /* Triggers */
    useEffect(() => {
        updateDropdownOpen()
    }, [storeDisplay?.collection?.selected])
    
    /* Functions */
    const updateDropdownOpen = () => {
        setDropdownOpen(false)
    }

    const handleFiltersClick = () => {
        setTab(prev => prev === "filters" ? "categories" : "filters")
        setDropdownOpen(false)
    }

    const hanbleCategoriesClick = () => {
        if (tab === "categories") {
            setDropdownOpen(prev => !prev)
        } else {
            setTab("categories")
        }
    }

    const handleCoverLayerClick = () => {
        setDropdownOpen(false)
    }

    /* JSX */
    return (
        <div className={"m-s-top-container " + (scroll.direction === "down" ? "scroll-down" : "scroll-up")}>
            <div className="m-s-top-inner-container">
                <div
                    onClick={handleFiltersClick}
                    className={"d-s-tab filters " + (tab === "filters" ? "active " : "")}>

                        { tab === "filters" 
                            ? <span className="material-symbols-outlined">close</span>
                            : <span className="material-symbols-outlined">tune</span> }
                </div>
                <div
                    className={"d-s-tab categories " + (tab === "categories" ? "active " : "") + (dropdownOpen && tab === "categories" ? "open" : "")}>
                        <div
                            onClick={hanbleCategoriesClick}
                            className="d-s-selected-category-container">
                            <span className="material-symbols-outlined">storefront</span>
                            <p>{storeDisplay?.collection?.selected}</p>
                        </div>
                        <div className="d-s-categories-drop-container">
                            {categories?.map((cat, i) => {
                                return <MSCatItem key={i} cat={cat}/>})}
                        </div>
                </div>
                <div className={"m-s-filters-container " + (tab === "filters" ? "active " : "")}>
                    {collectionOptions.length > 0
                        ? collectionOptions?.map((option, i) => {
                            return <ProductOption key={i} option={option}/>
                            })
                        : <p>No filters for category:
                            <br/><span>{storeDisplay?.collection?.selected}</span></p>
                    }
                </div>
                <div
                    onPointerDown={handleCoverLayerClick}
                    className={"m-s-categories-drop-cover-layer " + (dropdownOpen ? "active" : "")}></div>
            </div>
        </div>
    )
}

export default MSTop