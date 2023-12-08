import React from 'react'
import { useNavigate } from "react-router-dom"
import logoWhite from '../../assets/logo-white.svg'
import './logo-white.scss'

const LogoWhite = () => {
    /* Hooks */
    const navigate = useNavigate()

    /* Functions */
    const handlePointerDown = () => {
        navigate("/mission")
    }

    /* JSX */
    return (
        <div
            className='logo-white-containet'>
            <img
                className='logo-white'
                src={logoWhite}
                onPointerDown={handlePointerDown}/>
        </div>
    )
}

export default LogoWhite