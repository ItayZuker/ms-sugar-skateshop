import React, { useEffect, useState } from "react"
import { goToPageTop } from "../../lib/helpers"
import HeroSection from "./hero-section/hero-section"
import "./mission.scss"

const Mission = () => {
    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [])

    /* JSX */
    return (
        <div className="mission">
            <HeroSection />
        </div>
    )
}

export default Mission