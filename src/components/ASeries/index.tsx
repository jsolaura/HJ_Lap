import React from 'react';
import {motion, useScroll, useSpring} from "framer-motion";
import styled from "styled-components";
import Main from "./Main";
import About from "./About";
import Detail from "./Detail";

const StyledSection = styled.section`
    background: var(--background);
`;

const Index = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    return (
        <StyledSection>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Main />
            <About />
            <Detail />
            {/*<article style={{ height: '200vh', borderBottom: '1px solid salmon' }}/>*/}
            {/*<article style={{ height: '200vh', borderBottom: '1px solid salmon' }}/>*/}
            {/*<article style={{ height: '200vh', borderBottom: '1px solid salmon' }}/>*/}
            {/*<article style={{ height: '200vh' }}/>*/}
        </StyledSection>
    );
};

export default Index;