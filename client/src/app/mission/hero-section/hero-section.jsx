import React from "react"
import skelaton from "../../../assets/skeleton.gif"
import "./hero-section.scss"

const HeroSection = () => {

    /* JSX */
    return (
        <section className="hero-section">
            <img 
                className="skelaton"
                src={skelaton}
                alt="Skelaton"/>
        </section>
    )
}

export default HeroSection