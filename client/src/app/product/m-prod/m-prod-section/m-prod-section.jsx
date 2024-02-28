import React, { useState } from "react"
import MPExpend from "./m-p-erxpend/m-p-erxpend"
import MPGallery from "./m-p-gallery/m-p-gallery"
import MPSticky from "./m-p-sticky/m-p-sticky"
import MPHeader from "./m-p-header/m-p-header"
import POptions from "../../parts/p-options/p-options"
// import PPrice from "../../parts/p-price/p-price"
import "./m-prod-section.scss"

const MProdSection = () => {

    /* JSX */
    const [quantity, setQuantity] = useState(1)
    const [expend, setExpend] = useState(false)

    /* JSX */
    return (
        <section className="m-prod-section">
            { expend
                ? <MPExpend setExpend={setExpend}/>
                : <>
                    <MPGallery/>
                    <MPHeader/>
                    {/* <PPrice/> */}
                    <POptions/>
                    <MPSticky quantity={quantity}/></> }
        </section>
    )
}

export default MProdSection