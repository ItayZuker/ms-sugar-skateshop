import React from 'react'
import { useNavigate } from "react-router-dom"
import logoblack from '../../assets/logo-black.svg'
import './logo-black.scss'

const LogoBlack = () => {
    /* Hooks */
    const navigate = useNavigate()

    /* Functions */
    const handleClick = () => {
        navigate("/mission")
    }

    /* JSX */
    return (
        <div
            className='logo-black-containet'>
            <img
                className='logo-black'
                src={logoblack}
                onClick={handleClick}/>
        </div>
    )
}

export default LogoBlack