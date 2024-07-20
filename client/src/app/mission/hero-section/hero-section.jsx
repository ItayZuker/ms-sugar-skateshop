import React, { useEffect, useState } from "react"
import { preloadImage } from "../../../lib/preload"
import skelaton from "../../../assets/skeleton.gif"
import LoadingCover from "../../../components/loading-cover/loading-cover"
import "./hero-section.scss"

const HeroSection = () => {

    /* Locale */
    const [imageLoaded, setImageLoaded] = useState(false)

    /* Triggers */
    useEffect(() => {
        preloadImage({ src: skelaton })
        .then(() => setImageLoaded(true))
        .catch((error) => console.error(error));
    }, [])

    /* JSX */
    return (
        <section className="hero-section">
            { imageLoaded
                ? <img 
                    className="skelaton"
                    src={skelaton}
                    alt="Skelaton"/>
                : <LoadingCover/> }
        </section>
    )
}

export default HeroSection