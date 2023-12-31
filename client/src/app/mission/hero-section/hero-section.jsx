import React from "react"
import skelaton from "../../../assets/skeleton.gif"
import GotoMissionSectionButton from "./goto-mission-section-button/goto-mission-section-button"
import "./hero-section.scss"

const HeroSection = () => {

    /* JSX */
    return (
        <section className="hero-section">
            <img 
                className="skelaton"
                src={skelaton}
                alt="Skelaton"/>
            <GotoMissionSectionButton/>
        </section>
    )
}

export default HeroSection