import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Text,
  MeshDistortMaterial,
} from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    margin-bottom: -500px;
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
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

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #e76f51;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    margin-bottom: -500px;

  }
`;
const Img = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Manuel Murillo Peira</Title>
          <WhatWeDo>
            <Line src="../../img/Line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>Desarrollador web</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 3, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.7}>
              <MeshDistortMaterial
                color="#350946"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
            <Sphere args={[1, 100, 200]} scale={1.7} position={[1, 0, 0]}>
              <MeshDistortMaterial
                color="#ff0000"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          {/* <Img src="./../img/Img.png" /> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
