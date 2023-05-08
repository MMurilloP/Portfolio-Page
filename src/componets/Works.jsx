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
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  -webkit-text-stroke: 1px white;
  position: relative;

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
