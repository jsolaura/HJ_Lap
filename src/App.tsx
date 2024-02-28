import React, {cloneElement} from 'react';
import './App.css';
import {useLocation, useRoutes} from "react-router-dom";
import Home from "./components/Home";
import {AnimatePresence} from "framer-motion";
import Index from "./components/ASeries";

function App() {
    const location = useLocation();
    const element = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/a-series',
            element: <Index />
        },

    ])
    if (!element) return null;
    return (
        <AnimatePresence mode='wait'>
            {cloneElement(element, { key: location.pathname })}
        </AnimatePresence>

    )

}


export default App;
