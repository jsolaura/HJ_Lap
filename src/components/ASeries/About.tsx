import React from 'react';
import {motion} from "framer-motion";
import {pointList} from "../../constans/data";
import {useInView} from "react-intersection-observer";
import styled from "styled-components";

const StyledAbout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  h1 {
    font-size: 2.5rem;
    color: var(--ash-black);
    letter-spacing: 2px;
    padding: 1rem 4rem;
    margin-right: auto;
    span {
      display: block;
      padding-left: 2rem;
      font-size: 3rem;
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 10%;
    gap: 2rem;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--ash-black);
        padding: 4rem;
        border-radius: 25px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        .circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-bottom: 2rem;
        }
        h2 {
          text-transform: uppercase;
          margin-bottom: 2rem;
        }
        p {
          white-space: pre;
          line-height: 1.5;
        }
      }
    
  }
`;
const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * index
        }
    })

}
const About =  () => {
    const { ref, inView } = useInView({})
    return (
        <StyledAbout ref={ref}>
            <motion.h1
                animate={{ opacity: inView ? 1 : 0, left: inView ? 0 : -100 }}
                transition={{ duration: 1 }}
            >
                ABOUT <span>Aº SERIES</span>
            </motion.h1>
            <ul>
                {pointList.map((point, index) => (
                    <motion.li
                        initial='initial'
                        key={index}
                        variants={fadeInAnimationVariants}
                        whileInView='animate'
                        custom={index}
                        className='item'
                    >
                        <div className='circle' style={{ background: point.color }} />
                        <h2>{point.title}</h2>
                        <p>{point.description}</p>
                    </motion.li>
                ))}
            </ul>
        </StyledAbout>
    );
};

export default About;