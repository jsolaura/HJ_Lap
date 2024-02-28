import React, {useState} from 'react';
import { motion } from 'framer-motion';
import fish from '../assets/images/fish.png';
import diversity from '../assets/images/diversity.mp4';
import {Link} from "react-router-dom";
import styled from "styled-components";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
}

const StyledWrapper = styled(motion.section)`
  background: url("../assets/images/texture.jpg") no-repeat center center;

`;

const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -50;
  object-fit: cover;
`;

const StyledH1 = styled(motion.h1)`
  --base-width: 8.2vw;
  font-size: 8rem;
  text-align: center;
  font-weight: 400;
  margin: 100px 0;
  white-space: nowrap;
  position: relative;
  top: -10vw;
  left: 50%;
  transform: translateX(-50%);
  color: var(--gray);
  div {
    text-align: center;
  }
  .bold {
    font-weight: bold;
    color: var(--black);
  }
`;

const StyledUl = styled.ul`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  li {
    font-size: 1.5rem;
    a {
      transition: all .35s;
    }
  }
  li:hover a {
    color: var(--red);
  }
`;

const Home = () => {
    const [isVideo, setIsVideo] = useState<boolean>(true);
    return (
        <>
            {isVideo && <StyledVideo autoPlay muted><source src={diversity} type='video/mp4'/></StyledVideo>}
        <motion.article
            initial='hidden'
            animate='visible'
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
            <StyledH1
                variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible
                }}
                style={{
                    "--base-width": "24vw",
                    top: 0,
                    x: "-50%",
                } as any }
            >
                <div>
                    <img src={fish} alt='logo'/>
                </div>
                DESIGN <b className='bold'>LENOK</b>
            </StyledH1>
            <StyledUl>
                <motion.li variants={itemVariants}>
                    <Link to="/a-series">Aº 시리즈_240225_131024</Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <Link to="/london">White lines of Canary Wharf</Link>
                </motion.li>
            </StyledUl>
        </motion.article>
        </>
    );
};

export default Home;