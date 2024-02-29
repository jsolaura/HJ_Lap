import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {pointList} from "../../constans/data";

const StyledContainer = styled.div`
  position: relative;
  padding: 100px;
  color: var(--black);
  
  .description {
    .stickyContainer {
      position: sticky;
      position: -webkit-sticky;
      top: 100px;
      left: 100px;
      width: 60%;
      height: auto;
      z-index: 50;
      img {
        width: 100%;
        height: auto;
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
      width: 35%;
      margin-left: auto;
      display: flex;
      white-space: pre-line;
      line-height: 1.5;
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
    .pointList {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 100px;
      .itemEl{
        width: 100%;
        text-transform: uppercase;
        font-size: 3vw;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: flex-end;
        &:first-child {
          border-top: 1px solid black;
        }
      }
      .itemEl h2{
        margin-top: 40px;
        margin-bottom: 20px;
        cursor: pointer;
      }
    }
  }
`;


const Detail = () => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    return (
        <StyledContainer>
            <div className='description'>
                <div className='stickyContainer'>
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
                <div className='pointList'>
                    {pointList.map((item, index) => (
                        <div key={index} onMouseOver={() => {setSelectedItem(index)}} className='itemEl'>
                            <h2>{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </StyledContainer>
    );
};

export default Detail;