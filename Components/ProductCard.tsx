import React from "react";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="min-h-screen  flex items-center justify-around bg-neutral-900 text-white">
      <div className="min-h-[50vh] rounded-xl p-8 min-w-[35vw] bg-zinc-800">
        <div className="product-canvas min-w-[35vw] h-[38vh] bg-white shadow-xl rounded-none mb-5">
          <Canvas></Canvas>
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
