import React, {useRef} from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import {useInView} from "react-intersection-observer";
const StyledArticle = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .box {
    width: 500px;
    height: 500px;
    background: var(--accent);
    position: relative;
  }
  h1 {
    font-size: 8rem;
    color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const rotateAnimationVariants = {
    animate: {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    },
    transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
    }

}

const Main = () => {
    const { ref } = useInView({})
    return (
        <StyledArticle ref={ref}>
            <motion.div
                className="box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                }}
                whileInView={['animate', 'transition']}
            >
            </motion.div>
            <h1>Aº <br/>SERIES</h1>
        </StyledArticle>
    );
};

export default Main;