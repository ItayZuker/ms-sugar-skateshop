import React from "react"
import { Link } from 'react-router-dom';
import "./e-form-message.scss"

const EFormMessage = () => {

    /* JSX */
    return (
        <div className="e-form-message-container">
            <p>Send a poem, a story, or any other form of text, in exchange for a 10 percent discount. You can choose to be anonymous, or you can give your name for credit. By sending your art, you agree that Ms-Sugar might use it for commercial use. Read more on <Link to="/terms-and-conditions" target="_blank">Terms and conditions.</Link></p>
        </div>
    )
}

export default EFormMessage