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
    const [products, setProducts] = useState([]);

    /* Triggers */
    useEffect(() => {
        getProducts()
    }, [])

    /* Functions */
    const getProducts = async () => {
        try {
            const products = await client.product.fetchAll();
            setProducts(products);
        } catch (err) {
            console.error("Error fetching products:", err);
        } 
    }


    const payload = {
        products,
        getProducts
    }

    /* JSX */
    return (
        <ShopifyContext.Provider value={payload}>
            {children}
        </ShopifyContext.Provider>
    );
};