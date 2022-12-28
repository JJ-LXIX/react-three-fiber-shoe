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
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.stripes}
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
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.stripes}
      />
    </group>
  );
}

const ProductCard = (props: Props) => {
  const [mesh, setMesh] = useState("#fff");
  const [stripes, setStripes] = useState("#fff");
  const [sole, setSole] = useState("#fff");

  return (
    <div className="min-h-screen  flex items-center justify-around bg-[#212121] text-white ">
      <div className="card min-h-[50vh] rounded-xl p-2 lg:p-10 min-w-[35vw] bg-[#212121] ">
        <div className="card-info product-canvas  mb-2 rounded-lg bg-neutral-700 min-w-[35vw] h-[38vh]  ">
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
              customColors={{ mesh: mesh, stripes: stripes, sole: sole }}
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Canvas>
        </div>
        <h2 className="font-semibold text-sm md:text-base lg:text-lg">
          Color Picker:
        </h2>
        <div className="flex flex-row  justify-around lg:px-32">
          <div className="p-2 flex flex-col items-center ">
            <input
              type="color"
              id="mesh"
              name="mesh"
              value={mesh}
              onChange={(e) => setMesh(e.target.value)}
              className="color-picker"
            />
            <label
              htmlFor="mesh"
              className="font-semibold text-md md:text-lg lg:text-2xl"
            >
              Primary
            </label>
          </div>

          <div className="p-2 flex flex-col items-center ">
            <input
              type="color"
              id="stripes"
              name="stripes"
              value={stripes}
              onChange={(e) => setStripes(e.target.value)}
              className="color-picker"
            />
            <label
              htmlFor="stripes"
              className="font-semibold text-md md:text-lg lg:text-2xl"
            >
              Secondary
            </label>
          </div>
          <div className="p-2 flex flex-col items-center ">
            <input
              type="color"
              id="sole"
              name="sole"
              value={sole}
              onChange={(e) => setSole(e.target.value)}
              className="color-picker"
            />
            <label
              htmlFor="sole"
              className="font-semibold text-md md:text-lg lg:text-2xl"
            >
              Sole
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
