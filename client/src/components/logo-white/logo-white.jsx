import React from 'react'
import { useNavigate } from "react-router-dom"
import { useTranslation } from "../../hooks/useTranslation"
import logoWhite from '../../assets/logo-white.svg'
import './logo-white.scss'

const LogoWhite = () => {

    /* Global */
    const navigate = useNavigate()
    const { t } = useTranslation()

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
                aria-label={t("navigation.mission.aria_label")}
                src={logoWhite}
                alt="Ms-Sugar Logo"
                onClick={handleClick}/>
        </div>
    )
}

export default LogoWhite