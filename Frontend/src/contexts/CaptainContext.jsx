import React, { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const useCaptain = () =>{
useContext(CaptainDataContext);
if(!context){
    throw new Error("useCaptain must be used within a CaptainProvider");
}
return context;
}
// Provider component
export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [ isLoading, setIsLoading] = useState(null);

    const updateCaptain = (captainData)=>{
        setCaptain(captainData);
    }

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        updateCaptain
    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};