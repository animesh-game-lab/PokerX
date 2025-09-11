"use client"

import React, {useState} from 'react';

import {MainContext} from "../context/index.js";

const MainProvider = ({children}) => {
    const [open , setOpen] = useState(false);
    const toggleDiv = () => {
        setOpen(!open);
    };

    return (
        <MainContext.Provider value={{open, setOpen, toggleDiv }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;