import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { goToPageTop } from "../../lib/helpers"
import HeroSection from "./hero-section/hero-section"
import NewCollectionSection from "./new-collection-section/new-collection-section"
import MissionSection from "./mission-section/mission-section"
import "./mission.scss"

const Mission = () => {

    /* Global */
    const location = useLocation()

    /* Triggers */
    useEffect(() => {
        goToPageTop()
    }, [location])
    
    /* JSX */
    return (
        <div className="page mission">
            <HeroSection/>
            {/* <NewCollectionSection/>
            <MissionSection/> */}
        </div>
    )
}

export default Mission