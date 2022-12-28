import React from "react";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};

type Props1 = {
  customColors: {
    mesh: string;
    stripes: string;
    sole: string;
  };
};

function Model(props: Props1) {
  const { nodes, materials } = useGLTF("/gltf/shoe.gltf");
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={"blue"}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={"blue"}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={"blue"}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={"blue"}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={"blue"}
      />
    </group>
  );
}

const ProductCard = (props: Props) => {
  return (
    <div className="min-h-screen  flex items-center justify-around bg-neutral-900 text-white">
      <div className="min-h-[50vh] rounded-xl p-8 min-w-[35vw] bg-zinc-800">
        <div className="product-canvas min-w-[35vw] h-[38vh] bg-zinc-600 shadow-xl rounded-none mb-5">
          <Canvas>
            <ambientLight />
            <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Model
              customColors={{ mesh: "pink", stripes: "blue", sole: "white" }}
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Canvas>
        </div>
        <h2>Color chooser</h2>
        <div className="flex flex-row">
          <div className="p-2">
            <input type="color" id="mesh" name="mesh" value="#e66465" />
            <label htmlFor="mesh">Main</label>
          </div>

          <div className="p-2">
            <input type="color" id="stripes" name="stripes" value="#f6b73c" />
            <label htmlFor="stripes">Stripes</label>
          </div>
          <div className="p-2">
            <input type="color" id="sole" name="sole" value="#f6b73c" />
            <label htmlFor="sole">Soul</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
