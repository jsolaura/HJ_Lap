import React, {cloneElement} from 'react';
import './App.css';
import {useLocation, useRoutes} from "react-router-dom";
import Home from "./components/Home";
import {AnimatePresence} from "framer-motion";
import ASeries from "./components/ASeries";

function App() {
    const location = useLocation();
    const element = useRoutes([
        {
            path: '/',
            // element: <Home />
            element: <ASeries />
        },
        {
            path: '/a-series',
            element: <ASeries />
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
