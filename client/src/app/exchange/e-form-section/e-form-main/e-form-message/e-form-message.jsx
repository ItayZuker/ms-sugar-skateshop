import React from "react"
import { Link } from 'react-router-dom';
import "./e-form-message.scss"

const EFormMessage = () => {

    /* JSX */
    return (
        <div className="e-form-message-container">
            <p>Send a poem, a story, or any other form of text, in exchange for a 10 percent discount. By sending your art, you agree that Ms-Sugar might share it on social media, and might use it for commercial use. You can choose to be anonymous, or you can give your name for credit. More details on the <Link to="/terms-and-conditions" target="_blank">Terms page.</Link></p>
        </div>
    )
}

export default EFormMessage