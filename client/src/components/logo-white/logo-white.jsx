import React from 'react'
import { useNavigate } from "react-router-dom"
import logoWhite from '../../assets/logo-white.svg'
import './logo-white.scss'

const LogoWhite = () => {

    /* Global */
    const navigate = useNavigate()

    /* Functions */
    const handleClick = () => {
        navigate("/mission")
    }

    /* JSX */
    return (
        <div
            className='logo-white-containet'>
            <img
                className='logo-white'
                src={logoWhite}
                alt="Ms-Sugar Logo"
                onClick={handleClick}/>
        </div>
    )
}

export default LogoWhite