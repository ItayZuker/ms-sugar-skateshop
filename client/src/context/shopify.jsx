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
        collection: {selected: "", options: []},
        product: {}
    })

    /* Triggers */
    useEffect(() => {
        initStore()
    }, [])

    useEffect(() => {
        updateCollectionDisplay({ selected: "all products", resetOption: true })
    }, [store])

    /* Functions */
    const initStore = async () => {
        const collections = await getCollections()
        const options = getOptions({ collections })
        setStore(prev => ({...prev, collections}));
        setStore(prev => ({...prev, options}));
        setStoreDisplay(prev => ({...prev, collection: {...prev.collection, options}}))
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
                    product.variants.forEach(variant => {
                        if (variant.available) {
                            variant.selectedOptions.forEach((selectedOption, optIndex) => {
                                let existingOption = optionsObject.options.find(opt => opt.name === selectedOption.name);
    
                                if (existingOption) {
                                    let existingValueIndex = existingOption.values.findIndex(val => val.value === selectedOption.value);
                                    if (existingValueIndex === -1) {
                                        existingOption.values.push({
                                            value: selectedOption.value,
                                            active: false,
                                            optIndex: optIndex,
                                            optName: selectedOption.name,
                                            valIndex: existingOption.values.length,
                                            title: product.productType
                                        });
                                    }
                                } else {
                                    optionsObject.options.push({
                                        name: selectedOption.name,
                                        values: [{
                                            value: selectedOption.value,
                                            active: false,
                                            optIndex: optIndex,
                                            optName: selectedOption.name,
                                            valIndex: 0,
                                            title: product.productType
                                        }]
                                    });
                                }
                            });
                        }
                    });
                }
            });
            collectionOptions.push(optionsObject);
        });
        return collectionOptions;
    }

    const updateCollectionDisplay = ({ selected, resetOption }) => {
        setStoreDisplay(prev => {
            if (resetOption) {
                const updatedOptions = prev.collection.options.map(collection => {
                    const updatedCollection = collection.options.map(option => {
                        const updatedValues = option.values.map(value => ({
                            ...value,
                            active: false
                        }));
                        return { ...option, values: updatedValues };
                    });
                    return { ...collection, options: updatedCollection };
                });
    
                return {
                    ...prev,
                    collection: {
                        ...prev.collection,
                        options: updatedOptions,
                        selected: selected
                    },
                    product: {}
                };
            } else {
                return {
                    ...prev,
                    collection: {
                        ...prev.collection,
                        selected: selected
                    },
                    product: {}
                };
            }
        });
    }

    const updateProductDisplay = ({ product }) => {
        setStoreDisplay(prev => ({...prev, product}))
    }

    const payload = {
        store,
        storeDisplay,
        setStoreDisplay,
        updateCollectionDisplay,
        updateProductDisplay
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};