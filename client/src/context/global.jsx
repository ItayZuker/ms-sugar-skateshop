import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [data, setData] = useState("data-test")

    const payload = {
        setData,
        data
    }

    return (
        <GlobalContext.Provider value={payload}>
            {children}
        </GlobalContext.Provider>
    );
};