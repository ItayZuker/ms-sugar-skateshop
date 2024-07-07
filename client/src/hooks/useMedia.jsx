import { useEffect, useState } from "react"

export const useMedia = () => {

    /* Locale */
    const [media, setMedia] = useState({
        type: "",
        width: document.body.clientWidth,
        isTuch: null})

    /* Triggers */
    useEffect(() => {
        updateMedia()
        window.addEventListener("resize", updateMedia)
        return () => window.removeEventListener("resize", updateMedia)
    }, [])

    /* Functions */
    const getWidth = () => {
        return document.body.clientWidth
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
                document.body.classList.remove("laptop")
                document.body.classList.remove("mobile")
                document.body.classList.add("desktop")
            break
            case "laptop":
                document.body.classList.remove("desktop")
                document.body.classList.remove("mobile")
                document.body.classList.add("laptop")
            break
            case "mobile":
                document.body.classList.remove("desktop")
                document.body.classList.remove("laptop")
                document.body.classList.add("mobile")
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