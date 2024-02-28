import React, {useLayoutEffect, useRef, useState} from 'react';
import styled from "styled-components";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {pointList} from "../../constans/data";

const StyledContainer = styled.div`
  position: relative;
  padding: 10%;
  color: var(--black);

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5%;
    .stickyContainer {
      position: relative;
      width: 50%;
      height: auto;
      display: flex;
      flex-direction: column;
      z-index: 100;
      img {
        width: 100%;
        object-fit: contain;
        margin-bottom: 1rem;
      }
      p {
        display: flex;
        justify-content: center;
        gap: 1rem;
        text-transform: uppercase;
        color: var(--white);
        span {
          padding: 0.5rem 1rem;
          border-radius: 10px;
        }
      }
    } 
    .infoBox {
      display: flex;
      height: 100%;
      white-space: pre-line;
      line-height: 1.5;
      width: 100%;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      text-align: right;
      font-size: 1.2rem;
      .itemList {
        text-align: left;
        margin-top: 2rem;
        font-size: 0.8rem;
        color: var(--gray);
      }
    }
  }
  .pointList {
    display: flex;
    flex-direction: column;
    position: relative;
    .itemEl{
      width: 100%;
      text-transform: uppercase;
      font-size: 3vw;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: flex-end;
    }
    .itemEl h2{
      margin-top: 40px;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
`;


const Detail = () => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const container = useRef(null);
    const stickyContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: stickyContainer.current,
            pin: true,
            start: 'top-=100px',
            end: document.body.offsetHeight - window.innerHeight + 300
        })
    }, [])
    return (
        <StyledContainer ref={container}>
            <div className='description'>
                <div ref={stickyContainer} className='stickyContainer'>
                    <img src={require(`../../assets/images/${pointList[selectedItem].imgUrl}`)} alt={pointList[selectedItem].title}/>
                    <p>
                        {pointList[selectedItem].keywords.map((keyword, index) => (
                            <span key={`keyword${index}`} style={{ background: pointList[selectedItem].color }}>{keyword}</span>
                        ))}
                    </p>
                </div>

                <div className='infoBox'>
                    <p>{pointList[selectedItem].description}</p>
                    <p className='itemList'>ITEM LIST : {pointList[selectedItem].itemList.join('∙')}</p>
                </div>
            </div>
            <div className='pointList'>
                {pointList.map((item, index) => (
                    <div key={index} onMouseOver={() => {setSelectedItem(index)}} className='itemEl'>
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>
        </StyledContainer>
    );
};

export default Detail;