import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import MPReletedPSlider from "./m-p-releted-p-slider/m-p-releted-p-slider"
import "./m-p-releted-p-section.scss"

const MPReletedPSction = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <section className="m-p-releted-p-section">
            <div className="m-p-releted-p-header">
                <h2>{t("pages.product.related_products.title")}</h2>
            </div>
            <MPReletedPSlider/>
        </section>
    )
}

export default MPReletedPSction