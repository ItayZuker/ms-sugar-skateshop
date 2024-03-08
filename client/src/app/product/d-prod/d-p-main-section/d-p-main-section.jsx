import React, { useState } from "react"
import DPGallery from "./d-p-gallery/d-p-gallery"
import DPData from "./d-p-data/d-p-data"
import "./d-p-main-section.scss"

const DPMainSection = ({ setNotifyWhenAvailable }) => {

    /* JSX */
    const [quantity, setQuantity] = useState(1)

    /* JSX */
    return (
        <section className="d-p-main-section">
            <div className="d-p-inner-main-container">
                <DPGallery/>
                <DPData
                    setNotifyWhenAvailable={setNotifyWhenAvailable}
                    quantity={quantity}
                    setQuantity={setQuantity}/>
            </div>
        </section>
    )
}

export default DPMainSection