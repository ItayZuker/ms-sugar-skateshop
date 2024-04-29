import React, { createContext, useState } from 'react'
import { Helmet } from 'react-helmet'

export const HelmetContext = createContext();

export const HelmetProvider = ({ children }) => {

    /* Locale */
    const [ogTags, setOgTags] = useState({
        title: "Ms-Sugar Skateshop",
        type: "website",
        url: "ms-sugar.com",
        description: "Ms-Sugar Skateshop - The place for skaters' magic.",
        siteName: "Ms-Sugar Skateshop",
        locale: "en_US",
        image: "https://ms-sugar.com/og-images/og-image-main.jpg",
        imageWidth: "1200",
        imageHeight: "630",
        imageType: "image/jpeg"
    })

    /* Functions */
    const updateOgTags = (newTags) => {
        setOgTags(prev => ({
            ...prev,
            ...newTags
        }))
    }

    const payload = {
        updateOgTags
    }

    return (
        <HelmetContext.Provider value={payload}>
            <Helmet>
                <meta property="og:title" content={ogTags.title}/>
                <meta property="og:type" content={ogTags.type}/>
                <meta property="og:url" content={ogTags.url}/>
                <meta property="og:description" content={ogTags.description}/>
                <meta property="og:site_name" content={ogTags.siteName}/>
                <meta property="og:locale" content={ogTags.locale} />
                <meta property="og:image" content={ogTags.image}/>
                <meta property="og:image:width" content={ogTags.imageWidth}/>
                <meta property="og:image:height" content={ogTags.imageHeight}/>
                <meta property="og:image:type" content={ogTags.imageType}/>
            </Helmet>
            {children}
        </HelmetContext.Provider>
    )
}