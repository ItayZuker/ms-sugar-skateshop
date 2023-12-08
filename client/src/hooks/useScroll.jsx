import { useEffect, useState } from "react"

export const useScroll = () => {

    /* Locale Variables */
    const [scroll, setScroll] = useState({ direction: "", position: 0 })
    let lastScrollY = window.pageYOffset

    /* Functions */
    const updateScroll = () => {
        const currentScrollY = window.pageYOffset
        const direction = currentScrollY > lastScrollY ? "down" : "up"
        setScroll({
            direction: currentScrollY !== lastScrollY ? direction : scroll.direction,
            position: currentScrollY
        });
        lastScrollY = currentScrollY
    }

    /* Triggers */
    useEffect(() => {
        window.addEventListener("scroll", updateScroll)
        return () => {
            window.removeEventListener("scroll", updateScroll)
        }
    }, [])

    /* Out */
    return { scroll }
}