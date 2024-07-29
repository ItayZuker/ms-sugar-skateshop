import React from 'react'
import { useNavigate } from "react-router-dom"
import { useTranslation } from '../../hooks/useTranslation'
import logoblack from '../../assets/logo-black.svg'
import './logo-black.scss'

const LogoBlack = () => {

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
            className='logo-black-containet'>
            <img
                className='logo-black'
                src={logoblack}
                aria-label={t("navigation.mission.aria_label")}
                alt="Ms-Sugar Logo"
                onClick={handleClick}/>
        </div>
    )
}

export default LogoBlack