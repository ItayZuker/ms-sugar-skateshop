import React, { useContext, useEffect } from "react"
import "./a-m-underline-links.scss"
import { AccessibilityContext } from "../../../../context/accessibility"

const AMUnderlineLinks = () => {

    /* Global */
    const { underlineLinks, setUnderlineLinks } = useContext(AccessibilityContext)

    /* Triggers */
    useEffect(() => {
        if (underlineLinks) {
            document.body.classList.add('underline-links-active')
        } else {
            document.body.classList.remove('underline-links-active')
        }
    }, [underlineLinks])

    /* Functions */
    const toggleUnderlinLinks = () => {
        setUnderlineLinks(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-underline-links-container">
            <button onClick={toggleUnderlinLinks} className={underlineLinks ? "active" : ""}>
                <span className="material-symbols-outlined">format_underlined</span>
                Underline links
            </button>
        </div>
    )
}

export default AMUnderlineLinks