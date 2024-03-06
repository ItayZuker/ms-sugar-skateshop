import React from "react"
import { useNavigate } from "react-router-dom"
import "./d-p-back.scss"

const DPBack = () => {

    /* Global */
    const navigate = useNavigate()

    /* Functions */
    const handlePointerDown = () => {
        navigate('/skateshop/', { replace: true });
    }

    /* JSX */
    return (
        <p className="d-p-back" onPointerDown={handlePointerDown}>
            <span className="material-symbols-outlined">keyboard_return</span>Back to skateshop
        </p>
    )
}

export default DPBack