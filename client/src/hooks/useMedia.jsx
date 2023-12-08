import { useEffect, useState } from "react"

export const useMedia = ({ HTMLelement }) => {

    /* Locale Variables */
    const [media, setMedia] = useState({type: "", width: null, isTuch: null})

    /* Triggers */
    useEffect(() => {
        activateResizeObserver()
    }, [])

    /* Functions */
    const activateResizeObserver = () => new ResizeObserver(updateMedia).observe(HTMLelement)

    const getWidth = () => {
        return HTMLelement.getBoundingClientRect().width
    }

    const getType = ({width, isTuch}) => {
       if (width > 1400) {
        return "desktop"
       }
       if (width > 1024) {
        return "laptop"
       }
       if (isTuch) {
        return "mobile"
       }
    }

    const getIsTuch = () => {
        return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
    }
 
    const updateHTMLelementClass = ({ type }) => {
        switch (type) {
            case "desktop":
                HTMLelement.classList.remove("laptop")
                HTMLelement.classList.remove("mobile")
                HTMLelement.classList.add("desktop")
            break
            case "laptop":
                HTMLelement.classList.remove("desktop")
                HTMLelement.classList.remove("mobilr")
                HTMLelement.classList.add("laptop")
            break
            case "mobile":
                HTMLelement.classList.remove("desktop")
                HTMLelement.classList.remove("laptop")
                HTMLelement.classList.add("mobile")
            break
        }
    }
    const updateMedia = () => {
        const width = getWidth();
        const isTuch = getIsTuch();
        const type = getType({ width, isTuch });
        updateHTMLelementClass({ type })
        setMedia({ width, isTuch, type })
    }

    /* Out */
    return { media }
}