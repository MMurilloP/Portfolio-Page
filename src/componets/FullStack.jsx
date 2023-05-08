import React from 'react'
import Logoreact from './Logoreact'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'


const FullStack = () => {
  return (
    <Canvas>
      <Stage enviroment ="city" intensity={0.6}>
      <Logoreact />
      <OrbitControls enableZoom={false} autoRotate/>

      </Stage>
      
    </Canvas>
  )
}

export default FullStack
