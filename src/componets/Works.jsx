import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FullStack from './FullStack.jsx'
import FrontEnd from './FrontEnd.jsx'
import BackEnd from './BackEnd.jsx'


const data = ["FULL STACK", "FRONT END", "BACK END", "OTROS"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 20px;
  font-weight: 300;

`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #e76f51;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #e76f51;
    -webkit-text-stroke: 0px

  }

  ::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #e76f51;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;

  }
  &:hover{
    ::after {
        animation: moveText 0.5s linear both;
        @keyframes moveText {
          to{
            width: 100%;
          }
          
        }
    }
  }
`;


const Right = styled.div`
  flex: 1;
`;

const Works = () => {

  const [work, setWork] = useState("Full Stack")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={()=> setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "FULL STACK" ? (
            <FullStack/>
            ) : work === "FRONT END" ? (
            <FrontEnd/>
            ) : (
            <BackEnd/>
            )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
