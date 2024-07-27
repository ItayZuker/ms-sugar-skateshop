import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import whiteLogoFrames from '../../assets/logo-white-frames-inline.png'
import { useTranslation } from '../../hooks/useTranslation'
import './animated-logo.scss'

const AnimatedLogo = () => {

    /* Global */
    const navigate = useNavigate()
    const { t } = useTranslation()

    /* Locale */
    let [intervalId, setIntervalId] = useState(0)
    let [frameNum, setFrameNum] = useState(0)
    const animatedLogoContainerRef = useRef()
    const imgRef = useRef()

    /* Functions */
    const handleMouseEnter = () => {
        const frameWidth = animatedLogoContainerRef.current.offsetWidth
        setIntervalId( intervalId = setInterval( () => {
                imgRef.current.style.left = `-${frameNum * frameWidth}px`
                frameNum === 9 ? setFrameNum( frameNum = 0 ) : setFrameNum( frameNum += 1 )
            }, 100 )            
        )
    }

    const handleMouseLeave = () => {
        clearInterval( intervalId )
    }

    const handleClick = () => {
        navigate("/mission")
    }

    /* JSX */
    return (
        <div
            className='animated-logo-containet'
            ref={ animatedLogoContainerRef }>
            <img
                aria-label={t("navigation.mission.aria_label")}
                className='animated-logo'
                ref={imgRef}
                src={whiteLogoFrames}
                alt="Ms-Sugar"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={ handleMouseLeave}
                onClick={handleClick}/>
        </div>
    )
}

export default AnimatedLogo