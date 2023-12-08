import React from 'react'
import { useNavigate } from "react-router-dom"
import logoblack from '../../assets/logo-black.svg'
import './logo-black.scss'

const LogoBlack = () => {
    /* Hooks */
    const navigate = useNavigate()

    /* Functions */
    const handlePointerDown = () => {
        navigate("/mission")
    }

    /* JSX */
    return (
        <div
            className='logo-black-containet'>
            <img
                className='logo-black'
                src={logoblack}
                onPointerDown={handlePointerDown}/>
        </div>
    )
}

export default LogoBlack