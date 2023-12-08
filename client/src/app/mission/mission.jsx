import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import HeroSection from "./hero-section/hero-section"
import MissionSection from "./mission-section/mission-section"
import "./mission.scss"

const Mission = () => {

    /* Hooks */
    const location = useLocation();

    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])
    
    /* JSX */
    return (
        <div className="page mission">
            <HeroSection/>
            <MissionSection/>
        </div>
    )
}

export default Mission