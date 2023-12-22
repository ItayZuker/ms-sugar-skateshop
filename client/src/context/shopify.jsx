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
        display: {
            collection: {title: "all products", id: ""},
            item: {title: "", id: ""}
        }
    })

    /* Triggers */
    useEffect(() => {
        updateProducts()
        updateCollections()
    }, [])

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
    const getCollectionById = async ({ collectionId }) => {
        try {
            return await client.collection.fetchWithProducts(collectionId)
        } catch (err) {
            console.error("Error fetching collection:", err);
        }
    }


    const payload = {
        store,
        setStore,
        getCollectionById
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};