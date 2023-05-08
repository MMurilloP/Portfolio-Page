import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import {OrbitControls } from "@react-three/drei";

import Cube from "./Cube"


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 50px;
`;
const Subtitle = styled.h2`
  color: #e76f51;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #e76f51;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position: [5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Manuel Murillo Peira</Title>
          <WhatWeDo>
            <Line src="../../img/Line.png" />
            <Subtitle>What we are</Subtitle>
          </WhatWeDo>
          <Desc>Web developer </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
