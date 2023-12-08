import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TenPersentButton from '../../../../assets/ten-percent-button.png'
import './ten-percent-button.scss'

const TenPercentButton = () => {
    /* Locale Variables */
    let [intervalId, setIntervalId] = useState(0)
    let [frameNum, setFrameNum] = useState(0)
    const [button, setButton] = useState("off")

    const tenPercentButtonContainerRef = useRef()
    const imgRef = useRef()

    /* Hooks */
    const location = useLocation();
    const navigate = useNavigate()

    /* Triggers */
    useEffect(() => {
        updateTenPencentButton()
    }, [location])
 
    /* Functions */
    const updateTenPencentButton = () => {
        if (location.pathname.includes("/exchange")) {
            turnButtonOn()
        } else if (button === "on") {
            turnButtonOff()
        }
    }

    const handleMouseEnter = () => {
        const frameWidth = tenPercentButtonContainerRef.current.offsetWidth
        if (frameNum === 0) {
            setFrameNum(frameNum = 1)
            imgRef.current.style.left = `-${frameNum * frameWidth}px`
        } else if (frameNum === 5) {
            setFrameNum(frameNum = 6)
            imgRef.current.style.left = `-${frameNum * frameWidth}px`
        }
    }

    const handleMouseLeave = () => {
        const frameWidth = tenPercentButtonContainerRef.current.offsetWidth
        if (frameNum === 1) {
            setFrameNum(frameNum = 0)
            imgRef.current.style.left = `-${frameNum * frameWidth}px`
        } else if (frameNum === 6) {
            setFrameNum(frameNum = 5)
            imgRef.current.style.left = `-${frameNum * frameWidth}px`
        }
    }

    const turnButtonOff = () => {
        const frameWidth = tenPercentButtonContainerRef.current.offsetWidth
        setIntervalId(intervalId = setInterval(() => {
            if (frameNum === 9) {
                setButton("off")
                clearInterval(intervalId)
                setFrameNum(frameNum = 0)
                imgRef.current.style.left = `-${frameNum * frameWidth}px`
            } else {
                setFrameNum(frameNum += 1)
                imgRef.current.style.left = `-${frameNum * frameWidth}px`
            }        
        }, 50))
    }

    const turnButtonOn = () => {
        const frameWidth = tenPercentButtonContainerRef.current.offsetWidth
        setIntervalId(intervalId = setInterval(() => {
            if (frameNum === 5) {
                setButton("on")
                clearInterval(intervalId)
            } else {
                setFrameNum(frameNum += 1)
                imgRef.current.style.left = `-${frameNum * frameWidth}px`
            }       
        }, 50))
    }

    const handlePointerDown = () => {
        if (frameNum <= 1) {
            turnButtonOn()
            navigate("/exchange")
            }
        if (frameNum >= 5) {
            turnButtonOff()
            navigate("/mission")
        }
    }

    return (
        <div
            ref={tenPercentButtonContainerRef}
            className='ten-percent-button-containet'>
            <img
                className='ten-percent-button'
                ref={imgRef}
                src={TenPersentButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onPointerDown={handlePointerDown}
                ></img>
        </div>
    )
}

export default TenPercentButton