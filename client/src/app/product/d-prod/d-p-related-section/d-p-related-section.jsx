import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import DPRelatedPSlider from "./d-p-related-p-slider/d-p-related-p-slider"
import "./d-p-related-section.scss"

const DPRelatedSection = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <section className="d-p-related-section">
            <div className="d-p-related-p-header">
                <h3>{t("pages.product.related_products.title")}</h3>
            </div>
            <DPRelatedPSlider/>
        </section>
    )
}

export default DPRelatedSection