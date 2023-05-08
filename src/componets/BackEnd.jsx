import React from 'react'
import Servers from './Servers'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import styled from 'styled-components'


const Desc = styled.div`
width: 200px;
height: 60px;
text-align: center;
padding: 20px;
border-radius: 10px;
background-color: orange;
position: absolute;
bottom: 20px;
right: 20px;

@media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const BackEnd = () => {
  return (
    <>
    <Canvas>
      <Stage enviroment ="city" intensity={0.6}>
      <Servers />
      <OrbitControls enableZoom={false} autoRotate/>
      </Stage>
    </Canvas>
    <Desc>
      Node.js + Express.js + Mongo DB / PostgresSQL
    </Desc>
    </>
  );
};

export default BackEnd
