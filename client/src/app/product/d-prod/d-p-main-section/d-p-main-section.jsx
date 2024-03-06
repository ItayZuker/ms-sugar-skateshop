import React, { useState } from "react"
import DPGallery from "./d-p-gallery/d-p-gallery"
import DPData from "./d-p-data/d-p-data"
import "./d-p-main-section.scss"

const DPMainSection = () => {

    /* JSX */
    const [quantity, setQuantity] = useState(1)

    /* JSX */
    return (
        <section className="d-p-main-section">
            <div className="d-p-inner-main-container">
                <DPGallery/>
                <DPData quantity={quantity} setQuantity={setQuantity}/>
            </div>
        </section>
    )
}

export default DPMainSection