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
        updateCollections()
        updateProducts()
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
    const updateStoreDisplay = async ({ display }) => {
        if (store.collections.length > 0) {
            const collection = store?.collections?.find(item => item.title.toLowerCase() === display)
            const products = await getProductsByCollectionId({ collectionId: collection.id })
            const options = await getProductOptions({ products, product: display })
            setStoreDisplay(prev => ({...prev, collection, products, options }))
        }
    }
    const getProductsByCollectionId = async ({ collectionId }) => {
        try {
            const res = await client.collection.fetchWithProducts(collectionId)
            return res.products
        } catch (err) {
            console.error("Error fetching collection products:", err);
        }
    }
    const getCollectionById = async ({ collectionId }) => {
        try {
            return await client.collection.fetchWithProducts(collectionId)
        } catch (err) {
            console.error("Error fetching collection:", err);
        }
    }

    const getProductOptions = async ({ products, product }) => new Promise(resolve => {
        const arr = products?.filter(item => {
            return item?.productType?.toLowerCase() === product.toLowerCase()
        })
        if (arr) {
            const mergedOptions = arr.reduce((acc, deck) => {
                deck.options.forEach(option => {
                    if (!acc[option.name]) {
                        acc[option.name] = new Set()
                    }
                    option.values.forEach(valueObj => {
                        acc[option.name].add(valueObj.value)
                    })
                })
                return acc
            }, {})
            const options = Object.keys(mergedOptions).map(key => ({
                name: key,
                values: Array.from(mergedOptions[key])
            }))
            resolve(options)
        } else {
            resolve([])
        }
    })

    const payload = {
        store,
        storeDisplay,
        updateStoreDisplay,
        getCollectionById,
        getProductOptions,
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};