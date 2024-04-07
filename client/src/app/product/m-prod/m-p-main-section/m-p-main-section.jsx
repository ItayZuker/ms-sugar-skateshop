import React, { useState } from "react"
import MPGallery from "./m-p-gallery/m-p-gallery"
import PDesctiption from "../../parts/p-desctiption/p-desctiption"
import MPSticky from "./m-p-sticky/m-p-sticky"
import MPHeader from "./m-p-header/m-p-header"
import POptions from "../../parts/p-options/p-options"
import "./m-p-main-section.scss"

const MPMainSection = ({ cartButtonOnMobile, setCartButtonOnMobile, notifyWhenAvailable, setNotifyWhenAvailable }) => {

    /* JSX */
    const [quantity, setQuantity] = useState(1)

    /* JSX */
    return (
        <section className="m-p-main-section">
            <MPGallery/>
            <MPHeader/>
            <POptions/>
            <PDesctiption/>
            <MPSticky
                notifyWhenAvailable={notifyWhenAvailable}
                setNotifyWhenAvailable={setNotifyWhenAvailable}
                cartButtonOnMobile={cartButtonOnMobile}
                setCartButtonOnMobile={setCartButtonOnMobile}
                quantity={quantity}
                />
        </section>
    )
}

export default MPMainSection