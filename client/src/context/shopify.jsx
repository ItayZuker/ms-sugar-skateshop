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
    const [loadingStore, setLoadingStore] = useState(true)
    const [store, setStore] = useState({
        collections: [],
        options: []
    })
    const [storeDisplay, setStoreDisplay] = useState({
        collection: [],
        options: [],
        item: {}
    })

    /* Triggers */
    useEffect(() => {
        initStore()
    }, [])

    useEffect(() => {
        updateCollectionDisplay({ display: "all products" })
        updateOptionsDisplay({ display: "all products" })
    }, [store])

    /* Functions */
    const initStore = async () => {
        const collections = await getCollections()
        const options = await getOptions({ collections })
        setStore(prev => ({...prev, collections}));
        setStore(prev => ({...prev, options}));
        setLoadingStore(false)
    }

    const getCollections = async () => {
        try {
            const collections = await client.collection.fetchAll();
            const collectionPromises = collections.map(collection => 
                client.collection.fetchWithProducts(collection.id)
            );
            return await Promise.all(collectionPromises);
        } catch (err) {
            console.error("Error fetching collections:", err);
        } 
    }
    
    const getOptions = ({ collections }) => {
        let collectionOptions = [];

        collections.forEach(collection => {
            let optionsObject = {
                title: collection.title,
                options: []
            };

            collection.products.forEach(product => {
                if (product.productType.toLowerCase() === collection.title.toLowerCase()) {
                    product.options.forEach(option => {
                        let existingOption = optionsObject.options.find(opt => opt.name === option.name);

                        if (existingOption) {
                            option.values.forEach(valueObj => {
                                if (!existingOption.values.includes(valueObj.value)) {
                                    existingOption.values.push(valueObj.value);
                                }
                            });
                        } else {
                            optionsObject.options.push({
                                id: option.id,
                                name: option.name,
                                values: option.values.map(val => val.value)
                            });
                        }
                    });
                }
            });

            collectionOptions.push(optionsObject);
        });
        return collectionOptions;
    };

    const updateCollectionDisplay = async ({ display }) => {
        if (!loadingStore) {
            const collection = store.collections.find(collection => {
                return collection.title.toLowerCase() === display.toLowerCase()
            })
            setStoreDisplay(prev => ({...prev, collection}))
        }
    }

    const updateOptionsDisplay = ({ display }) => {
        const selected = store.options.find(option => option.title.toLowerCase() === display.toLowerCase())
        if (selected?.options) {
            const options = selected?.options.map((option, optI) => {
                return {
                    // index: i,
                    name: option.name,
                    values: option.values.map((value, valI) => ({
                        value,
                        active: true,
                        optIndex: optI,
                        valIndex: valI
                    }))
                }
            })
            setStoreDisplay(prev => ({...prev, options}));
        } else {
            setStoreDisplay(prev => ({...prev, options: []}));
        }        
    }

    const payload = {
        store,
        storeDisplay,
        setStoreDisplay,
        updateCollectionDisplay,
        updateOptionsDisplay
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};