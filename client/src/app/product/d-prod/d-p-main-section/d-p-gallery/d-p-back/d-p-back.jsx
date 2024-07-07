import React from "react"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import { useNavigate } from "react-router-dom"
import "./d-p-back.scss"

const DPBack = () => {

    /* Global */
    const { t } = useTranslation()
    const navigate = useNavigate()

    /* Functions */
    const handlePointerDown = () => {
        navigate('/skateshop/', { replace: true });
    }

    /* JSX */
    return (
        <p className="d-p-back" onPointerDown={handlePointerDown}>
            <span className="material-symbols-outlined">keyboard_return</span>
            {t("pages.product.back_to_skateshop.title")}
        </p>
    )
}

export default DPBack