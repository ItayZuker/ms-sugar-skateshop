import React, { useState, useEffect, useRef } from "react"
import "./contact-form.scss"

const ContactForm = () => {

    /* Locale Variables */
    const [ data, setData ] = useState({
        message: {
            error: false,
            placeholder: "Write here..."
        },
        email: {
            error: false,
            placeholder: "example@mail.com"
        }
    })

    const timeoutRef = useRef(null);

    /* Hooks */
    useEffect(() => {
        return () => clearTimeout(timeoutRef?.current)
    }, [])
 
    /* Functions */
    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.message.error)
            return
        if (data.email.error)
            return
        const isMassege = e.target.message.value !== ""
        const isEmail = e.target.email.value !== ""
        if (!isMassege)
            triggerError({ type: "message" })
        if (!isEmail)
            triggerError({ type: "email" })
        if (isMassege && isEmail)
            submitForm(e)
    }

    const triggerError = ({ type }) => {
        setData(prev => {
            return {...prev, [type]: {...prev[type], error: true}}
        })
        timeoutRef.current = setTimeout(() => {
            setData(prev => {
                return {...prev, [type]: {...prev[type], error: false}}
            })  
        }, 2000)
    }

    const submitForm = () => {

    }

    /* JSX */
    return (
        <div className="contact-form-container">
            <form
                className="contact-form"
                onSubmit={handleSubmit}>
                <textarea
                    className={"message " + (data.message.error ? "error" : "")}
                    placeholder={data.message.placeholder}
                    name='message'
                    type='textarea'
                    />
                <input
                    className={"email " + (data.email.error ? "error" : "")}
                    name="email"
                    type="email"
                    placeholder={data.email.placeholder}
                    />
                <input
                    className="submit"
                    type="submit"
                    value="send"/>
            </form>
        </div>
    )
}

export default ContactForm