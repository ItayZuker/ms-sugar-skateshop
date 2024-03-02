import React from "react"
import MPReletedPSlider from "./m-p-releted-p-slider/m-p-releted-p-slider"
import "./m-p-releted-p-section.scss"

const MPReletedPSction = () => {

    /* JSX */
    return (
        <section className="m-p-releted-p-section">
            <div className="m-p-releted-p-header">
                <h2>Releted Products:</h2>
            </div>
            <MPReletedPSlider/>
        </section>
    )
}

export default MPReletedPSction