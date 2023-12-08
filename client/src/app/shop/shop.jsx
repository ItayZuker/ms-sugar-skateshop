import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import "./shop.scss"

const Shop = () => {

    /* Hooks */
    const location = useLocation();
    
    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])

    /* JSX */
    return (
        <div className="page shop">
            <h1>Shop</h1>
        </div>
    )
}

export default Shop