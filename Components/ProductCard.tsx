import React from "react";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};

export function Model(props: Props) {
  const { nodes, materials } = useGLTF("/gltf/shoe.gltf");
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

const ProductCard = (props: Props) => {
  return (
    <div className="min-h-screen  flex items-center justify-around bg-neutral-900 text-white">
      <div className="min-h-[50vh] rounded-xl p-8 min-w-[35vw] bg-zinc-800">
        <div className="product-canvas min-w-[35vw] h-[38vh] bg-white shadow-xl rounded-none mb-5">
          <Canvas>
            <ambientLight />
            <Model />
          </Canvas>
        </div>
        <h2>Color chooser</h2>
        <div className="flex flex-row">
          <div className="p-2">
            <input type="color" id="head" name="head" value="#e66465" />
            <label htmlFor="head">Main</label>
          </div>

          <div className="p-2">
            <input type="color" id="body" name="body" value="#f6b73c" />
            <label htmlFor="body">Stripes</label>
          </div>
          <div className="p-2">
            <input type="color" id="body" name="body" value="#f6b73c" />
            <label htmlFor="body">Soul</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
