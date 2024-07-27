import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from '../../../../hooks/useTranslation'
import TenPersentButton from '../../../../assets/ten-percent-button.png'
import './ten-percent-button.scss'

const TenPercentButton = () => {

    /* Global */
    const location = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation()

    /* Locale */
    let [intervalId, setIntervalId] = useState(0)
    let [frameNum, setFrameNum] = useState(0)
    const [button, setButton] = useState("off")
    const tenPercentButtonContainerRef = useRef()
    const imgRef = useRef()

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

    const handleClick = () => {
        if (frameNum <= 1) {
            turnButtonOn()
            setTimeout(() => navigate("/exchange"), 250)
            }
        if (frameNum >= 5) {
            turnButtonOff()
            setTimeout(() => navigate("/mission"), 250)
        }
    }

    return (
        <div
            ref={tenPercentButtonContainerRef}
            className='ten-percent-button-containet'>
            <img
                aria-label={t("navigation.exchange.aria_label")}
                className='ten-percent-button'
                ref={imgRef}
                src={TenPersentButton}
                alt="Ten Percent Button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                ></img>
        </div>
    )
}

export default TenPercentButton