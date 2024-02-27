import React, { useState } from "react"
import MPGallery from "./m-p-gallery/m-p-gallery"
import MPSticky from "./m-p-sticky/m-p-sticky"
import PHeaderTitle from "../../parts/p-header-title/p-header-title"
import PDesctiption from "../../parts/p-desctiption/p-desctiption"
import "./m-prod-section.scss"

const MProdSection = () => {

    /* JSX */
    const [quantity, setQuantity] = useState(1)

    /* JSX */
    return (
        <section className="m-prod-section">
            <MPGallery/>
            <PHeaderTitle/>
            <PDesctiption/>
            <MPSticky quantity={quantity}/>
        </section>
    )
}

export default MProdSection