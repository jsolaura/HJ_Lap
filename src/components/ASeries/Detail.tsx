import React, {useLayoutEffect, useRef, useState} from 'react';
import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Detail = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: 'top-=100px',
            end: document.body.offsetHeight - window.innerHeight - 50

        })

    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Detail;