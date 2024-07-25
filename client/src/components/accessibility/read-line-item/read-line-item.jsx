import React, { useState, useEffect, useContext } from "react"
import { AccessibilityContext } from "../../../context/accessibility"
import "./read-line-item.scss"

const ReadLineItem = () => {

    /* Global */
    const { readLine } = useContext(AccessibilityContext)

    /* Locale */
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    /* Triggers */
    useEffect(() => {
        if (readLine) {
            document.addEventListener('mousemove', handleMouseMove)
        } else {
            document.removeEventListener('mousemove', handleMouseMove)
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [readLine])

    /* Functions */
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    /* JSX */
    if (readLine) {
        return (
           <div className="read-line" style={{ top: cursorPosition.y }}/>
        )
    }
}

export default ReadLineItem