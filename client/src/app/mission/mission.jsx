import React, { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { HelmetContext } from "../../context/helmet"
import { goToPageTop } from "../../lib/helpers"
import HeroSection from "./hero-section/hero-section"
import "./mission.scss"

const Mission = () => {

    /* Global */
    const { updateOgTags } = useContext(HelmetContext)
    const location = useLocation()

    /* Triggers */
    useEffect(() => {
        goToPageTop()
        updateOgTags({
            url: `ms-sugar.com/${location.pathname}`,
            title: "Ms-Sugar Mission"
        })
    }, [location])

    /* JSX */
    return (
        <div className="page mission">
            <HeroSection/>
        </div>
    )
}

export default Mission