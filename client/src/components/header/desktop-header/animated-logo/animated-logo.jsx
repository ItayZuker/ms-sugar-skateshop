import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import whiteLogoFrames from '../../../../assets/logo-white-frames-inline.png'
import './animated-logo.scss'

const AnimatedLogo = () => {
    /* Locale Variables */
    let [intervalId, setIntervalId] = useState(0)
    let [frameNum, setFrameNum] = useState(0)

    const animatedLogoContainerRef = useRef()
    const imgRef = useRef()

    /* Hooks */
    const navigate = useNavigate()

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

    const handlePointerDown = () => {
        navigate("/mission")
    }

    /* JSX */
    return (
        <div
            className='animated-logo-containet'
            ref={ animatedLogoContainerRef }>
            <img
                className='animated-logo'
                ref={imgRef}
                src={whiteLogoFrames}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={ handleMouseLeave}
                onPointerDown={handlePointerDown}/>
        </div>
    )
}

export default AnimatedLogo