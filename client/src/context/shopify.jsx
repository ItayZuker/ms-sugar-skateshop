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
        item: {selected: "", options: []}
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
        const options = await getOptions({ collections })
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
                    product.options.forEach((option, optIndex) => {
                        let existingOption = optionsObject.options.find(opt => opt.name === option.name);
                        
                        if (existingOption) {
                            option.values.forEach((valueObj, valIndex) => {
                                let valueExists = existingOption.values.some(val => val.value === valueObj.value);
                                if (!valueExists) {
                                    // Include additional keys needed for handlePointerDown
                                    existingOption.values.push({
                                        value: valueObj.value,
                                        active: true,
                                        optId: option.id,  // Option identifier
                                        optIndex: optIndex,  // Option index within the collection
                                        valIndex: valIndex,  // Value index within the option
                                        title: product.productType  // Collection title
                                    });
                                }
                            });
                        } else {
                            // When creating a new option, include indices and identifiers
                            optionsObject.options.push({
                                id: option.id,
                                name: option.name,
                                values: option.values.map((val, valIndex) => ({
                                    value: val.value,
                                    active: true,
                                    optId: option.id,
                                    optIndex: optIndex,
                                    valIndex: valIndex,
                                    title: product.productType
                                }))
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
                            active: true
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
                    }
                };
            } else {
                return {
                    ...prev,
                    collection: {
                        ...prev.collection,
                        selected: selected
                    }
                };
            }
        });
    }

    const payload = {
        store,
        storeDisplay,
        setStoreDisplay,
        updateCollectionDisplay
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};