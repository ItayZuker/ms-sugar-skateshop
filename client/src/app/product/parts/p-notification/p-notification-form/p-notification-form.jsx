import React, { useContext, useEffect, useRef, useState } from "react"
import { GlobalContext } from "../../../../../context/global"
import { ShopifyContext } from "../../../../../context/shopify"
import { post } from "../../../../../lib/fetch"
import PNMessageTop from "./p-n-message-top/p-n-message-top"
import PNEmail from "./p-n-email/p-n-email"
import PNMessageBottom from "./p-n-message-bottom/p-n-message-bottom"
import PNSubmit from './p-n-submit/p-n-submit'
import "./p-notification-form.scss"

const PNotificationForm = ({ setNotifyWhenAvailable }) => {

    /* Global */
    const { setDialog } = useContext(GlobalContext)
    const { storeDisplay } = useContext(ShopifyContext)

    /* Locale */
    const [ data, setData ] = useState({
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
        const email = e?.target?.email?.value
        if (data?.email?.error) {
            return
        }
        if (!email) {
            triggerError({ type: "email" })
        }
        if (!!email) {
            if (!storeDisplay?.product?.title || !storeDisplay?.product?.idNumber) {
                setDialog(prev => ({...prev, notifyWhenAvailable: {...prev.notifyWhenAvailable, err: true}}))
                return
            }
            const product = {
                title: storeDisplay?.product?.title,
                idNumber: storeDisplay?.product?.idNumber
            }
            setDialog(prev => ({...prev, notifyWhenAvailable: {...prev.notifyWhenAvailable, loading: true}}))
            const res = await post({ data: {email, product}, rout: "/product" })

            setDialog(prev => ({...prev, notifyWhenAvailable: {...prev.notifyWhenAvailable, loading: false}}))
            setNotifyWhenAvailable(false)
            if (res.err) {
                setDialog(prev => ({...prev, notifyWhenAvailable: {...prev.notifyWhenAvailable, err: true, res}}))
            }
            if (res.payload) {
                setDialog(prev => ({...prev, notifyWhenAvailable: {...prev.notifyWhenAvailable, success: true, res}}))
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
        <form
            onSubmit={handleSubmit}
            className="p-notification-form">
            <PNMessageTop/>
            <PNEmail data={data}/>
            <PNMessageBottom/>
            <PNSubmit/>
        </form>
    )
}

export default PNotificationForm