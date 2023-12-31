/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 model3d1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model3d1.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.base2.geometry} material={nodes.base2.material} />
        <mesh geometry={nodes.keyboard3.geometry} material={nodes.keyboard3.material} />
        <mesh geometry={nodes.screen_connector4.geometry} material={nodes.screen_connector4.material} />
        <mesh geometry={nodes.clip25.geometry} material={nodes.clip25.material} />
        <mesh geometry={nodes.clip16.geometry} material={nodes.clip16.material} />
        <mesh geometry={nodes.screen7.geometry} material={nodes.screen7.material} />
        <mesh geometry={nodes.new_kickstand8.geometry} material={nodes.new_kickstand8.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/model3d1.glb')
