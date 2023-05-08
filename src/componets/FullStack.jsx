import React from "react";
import Logoreact from "./Logoreact";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import styled from "styled-components";


const Desc = styled.div`
width: 200px;
height: 60px;
text-align: center;
padding: 20px;
border-radius: 10px;
background-color: orange;
position: absolute;
top: 20px;
right: 20px;

@media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const FullStack = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.6}>
          <Logoreact />
          <OrbitControls enableZoom={false} autoRotate />
        </Stage>
      </Canvas>
      <Desc>
        Stack MERN, (Mongo, Express.js, React.js, Node.js)
    </Desc>
    </>
  );
};

export default FullStack;
