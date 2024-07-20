import React, { useEffect, useRef } from "react"
import "./p-n-email.scss"

const PNEmail = ({ data }) => {

    /* Locale */
    const inputRef = useRef()

    /* Triggers */
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    /* JSX */
    return (
        <div className="p-n-email-container">
            <input
                aria-label="Email"
                aria-invalid={data?.email?.error ? "true" : "false"}
                aria-describedby={data?.email?.error ? "email-error" : null}
                ref={inputRef}
                className={"email " + (data?.email?.error ? "error" : "")}
                name="email"
                type="email"
                placeholder={data?.email?.placeholder}/>
        </div>
    )
}

export default PNEmail