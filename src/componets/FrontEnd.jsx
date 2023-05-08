import React from 'react'
import Pc from './Pc'
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
const FrontEnd = () => {
  return (
    <>
    <Canvas>
      <Stage enviroment ="city" intensity={0.6}>
      <Pc />
      <OrbitControls enableZoom={false} autoRotate/>
      </Stage>
    </Canvas>
    <Desc>
      HTML & CSS , React, Pub
    </Desc>
    </>
  )
}

export default FrontEnd
