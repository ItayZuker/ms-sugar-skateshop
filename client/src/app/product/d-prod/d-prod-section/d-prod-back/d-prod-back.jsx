import React from "react"
import { useNavigate } from "react-router-dom"
import "./d-prod-back.scss"

const DProdBack = () => {

    /* Global */
    const navigate = useNavigate()

    /* Functions */
    const handlePointerDown = () => {
        navigate('/skateshop/', { replace: true });
    }

    /* JSX */
    return (
        <p className="d-prod-back" onPointerDown={handlePointerDown}>
            <span className="material-symbols-outlined">keyboard_return</span>Back to skateshop
        </p>
    )
}

export default DProdBack