import React from "react"
import { Link } from 'react-router-dom';
import "./navigation.scss"

const Navigation = () => {

    /* JSX */
    return (
        <nav>
            <ul>
                <li><Link to="/homepage">Hompage</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/discount">Discount</Link></li>
                <li><Link to="/mission">Mission</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation