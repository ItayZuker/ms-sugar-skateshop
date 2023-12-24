import React, { createContext, useEffect, useState } from 'react'
import ShopifyBuy from 'shopify-buy';


export const ShopifyContext = createContext();

export const ShopifyProvider = ({ children }) => {

    /* Init Shopify */
    const client = ShopifyBuy.buildClient({
        domain: process.env.REACT_APP_SHOPIFY_SHOP_URL,
        storefrontAccessToken: process.env.REACT_APP_SHOPIFY_PUBLIC_ACCESS_TOKEN
    });

    /* Locale Variables */
    const [store, setStore] = useState({
        products: {},
        collections: [],
    })
    const [storeDisplay, setStoreDisplay] = useState({})

    /* Triggers */
    useEffect(() => {
        updateProducts()
        updateCollections()
    }, [])
    
    useEffect(() => {
        updateStoreDisplay({ display: "all products" })
    }, [store])

    /* Functions */
    const updateProducts = async () => {
        try {
            const products = await client.product.fetchAll();
            setStore(prev => ({...prev, products}));
        } catch (err) {
            console.error("Error fetching products:", err);
        } 
    }
    const updateCollections = async () => {
        try {
            const collections = await client.collection.fetchAll();
            setStore(prev => ({...prev, collections}));
        } catch (err) {
            console.error("Error fetching collections:", err);
        } 
    }
    const updateStoreDisplay = ({ display }) => {
        if (store.collections.length > 0) {
            const collection = store?.collections?.find(item => item.title.toLowerCase() === display)
            setStoreDisplay(prev => ({...prev, collection }))
        }
    }
    const getCollectionById = async ({ collectionId }) => {
        try {
            return await client.collection.fetchWithProducts(collectionId)
        } catch (err) {
            console.error("Error fetching collection:", err);
        }
    }
    const getProductVariantsByHandle = ({ productHandle }) => {
        try {
            const test = client.product.fetchByHandle(productHandle)
            console.log("test: ", test);
        } catch (err) {
            console.error("Error fetching collection variants:", err);
        }
    }
    // const updateVariants = ({ collection }) => {
    //     return collections.map(collection => {
    //         console.log("collections: ", collections)
    //     })
    // }


    const payload = {
        store,
        storeDisplay,
        // setStoreDisplay,
        updateStoreDisplay,
        getCollectionById,
        getProductVariantsByHandle
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};