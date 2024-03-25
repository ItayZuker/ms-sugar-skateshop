import React, { useState, useEffect, useRef, useContext } from "react"
import { GlobalContext } from "../../../context/global"
import { post } from "../../../lib/fetch"
import ContactMessage from "./contact-message/contact-message"
import ContactEmail from "./contact-email/contact-email"
import ContactSubmit from "./contact-submit/contact-submit"
import "./contact-form.scss"

const ContactForm = () => {

    /* Global */
    const { setDialog } = useContext(GlobalContext)

    /* Locale */
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

    /* Triggers */
    useEffect(() => {
        return () => clearTimeout(timeoutRef?.current)
    }, [])
 
    /* Functions */
    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = e.target.message.value
        const email = e.target.email.value
        if (data.message.error) {
            return
        }
        if (data.email.error) {
            return
        }
        if (!message) {
            triggerError({ type: "message" })
        }
        if (!email) {
            triggerError({ type: "email" })
        }
        if (!!message && !!email) {
            setDialog(prev => ({...prev, contact: {...prev.contact, loading: true}}))
            const res = await post({ data: {message, email}, rout: "/contact" })
            setDialog(prev => ({...prev, contact: {...prev.contact, loading: false}}))
            if (res.err) {
                setDialog(prev => ({...prev, contact: {...prev.contact, err: true}}))
            }
            if (res.payload) {
                setDialog(prev => ({...prev, contact: {...prev.contact, success: true}}))
                e.target.message.value = ""
                e.target.email.value = ""
            }
        }
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

    /* JSX */
    return (
        <div className="contact-form-container">
            <form
                className="contact-form"
                onSubmit={handleSubmit}>
                <ContactMessage data={data}/>
                <ContactEmail data={data}/>
                <ContactSubmit/>
            </form>
        </div>
    )
}

export default ContactForm