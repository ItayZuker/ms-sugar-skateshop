import React, { createContext, useEffect, useState } from 'react'
import { useMedia } from "../hooks/useMedia"
import { useScroll } from "../hooks/useScroll"

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    /* Locale */
    const [loadingWebsite, setLoadingWebsite] = useState(true)
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
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
        }
    })
    const [geoData, setGeoData] = useState({})

    /* Hooks */
    const { media } = useMedia()
    const { scroll } = useScroll()

    /* Triggers */
    useEffect(() => {
        initWebsite()
    }, [])

    
    
    /* Functions */
    const initWebsite = async () => {
        const geoLocation = await getGeoLocation()
        const geoCurrency = await getCountryCurrency({ countryCode: geoLocation.country_code })
        setGeoData(prev => ({...prev, geoLocation, geoCurrency}))
        setLoadingWebsite(false)
    }

    const getCountryCurrency = async ({ countryCode }) => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        const curencyData = await res.json()
        return Object.keys(curencyData[0].currencies)[0];

    }

    const getGeoLocation = async () => {
        const res = await fetch('https://geolocation-db.com/json/')
        return await res.json()
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
            }
        })
    }

    const payload = {
        loadingWebsite,
        media,
        scroll,
        isSideMenuOpen,
        dialog,
        setDialog,
        setIsSideMenuOpen,
        resetDialog,
        geoData
    }

    return (
        <GlobalContext.Provider value={payload}>
            {children}
        </GlobalContext.Provider>
    );
};