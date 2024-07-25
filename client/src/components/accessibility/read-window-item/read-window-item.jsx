import React, { useContext, useState, useEffect } from "react"
import { AccessibilityContext } from "../../../context/accessibility"
import "./read-window-item.scss"

const ReadWindowItem = () => {

    /* Global */
    const { readWindow } = useContext(AccessibilityContext)

    /* Locale */
    const [position, setPosition] = useState({ x: 0, y: 0 })

    /* Triggers */
    useEffect(() => {
        if (readWindow) {
            document.addEventListener('mousemove', handleMouseMove)
        } else {
            document.removeEventListener('mousemove', handleMouseMove)
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [readWindow])

    /* Functions */
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    /* JSX */
    if (readWindow) {
        return (
            <>
                <div
                    className="read-window-before"
                    style={{
                        height: position.y - 100
                        }}/>
                <div
                    className="read-window-after"
                    style={{
                        top: position.y + 100,
                        height: `calc(100vh - ${position.y + 100}px)`
                        }}/>
            </>
        )
    }
}

export default ReadWindowItem