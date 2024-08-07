import React, { createContext, useEffect, useState } from 'react'
import { get } from "../lib/fetch"

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    /* Locale */
    const [settings, setSettings] = useState({})
    const [legalData, setLegalData] = useState([])
    const [faqData, setFaqData] = useState([])
    const [loadingWebsite, setLoadingWebsite] = useState(true)
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    const [geoData, setGeoData] = useState({})
    const [dialog, setDialog] = useState({
        contact: {
            loading: false,
            success: false,
            err: false
        },
        exchange: {
            loading: false,
            success: false,
            err: false
        },
        notifyWhenAvailable: {
            loading: false,
            success: false,
            err: false
        }
    })

    /* Triggers */
    useEffect(() => {
        initWebsite()
    }, [])
    
    /* Functions */
    const initWebsite = async () => {
        const geoLocation = getGeoLocation()
        const geoCurrency = await getCountryCurrency({ countryCode: geoLocation.country_code })
        const legalData = await getLegalData()
        const faqData = await getFaqData()
        const settings = await getSettings()
        setSettings(settings)
        setLegalData(legalData)
        setFaqData(faqData)
        setGeoData(prev => ({ ...prev, geoLocation, geoCurrency }))
        setLoadingWebsite(false)
    }

    const convertLegalArrayToObject = (items) => {
        const result = {};
      
        items?.forEach(item => {
          if (!result[item.type]) {
            result[item.type] = [...item.sections]
          } else {
            result[item.type] = result[item.type].concat(item.sections)
          }
        })
      
        return result
    }

    const getSettings = async () => {
        try {
            const { payload } = await get({ rout: "/settings" })
            return payload
        } catch (err) {
            console.log(err)
            return {}
        }
    }

    const getFaqData = async () => {
        try {
            const { payload } = await get({ rout: "/faq" })
            return payload
        } catch (err) {
            console.log(err)
            return {}
        }
    }

    const getLegalData = async () => {
        try {
            const { payload } = await get({ rout: "/legal" })
            return convertLegalArrayToObject(payload)
        } catch (err) {
            console.log(err)
            return {}
        }
    }

    const getCountryCurrency = async ({ countryCode }) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            const curencyData = await res.json()
            return Object.keys(curencyData[0].currencies)[0]
        } catch (err) {
            console.log(err)
            return {}
        }
    }

    const getGeoLocation = async () => {
        try {
            const res = await fetch('https://geolocation-db.com/json/')
            return await res.json()
        } catch (err) {
            console.log(err)
            return {}
        }
    }

    const resetDialog = () => {
        setDialog({
            contact: {
                loading: false,
                success: false,
                err: false
            },
            exchange: {
                loading: false,
                success: false,
                err: false
            },
            notifyWhenAvailable: {
                loading: false,
                success: false,
                err: false
            }
        })
    }

    const payload = {
        loadingWebsite,
        isSideMenuOpen,
        dialog,
        setDialog,
        setIsSideMenuOpen,
        resetDialog,
        geoData,
        legalData,
        faqData,
        settings
    }

    return (
        <GlobalContext.Provider value={payload}>
            {children}
        </GlobalContext.Provider>
    )
}