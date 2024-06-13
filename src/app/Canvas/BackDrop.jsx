"use client";
import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={165}
      alphaTest={0.85}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      color="#fff"
    >
      <RandomizedLight
        amount={1}
        radius={19}
        intensity={0.55}
        ambient={0.25}
        position={[15, 15, -5]}
      />
      <RandomizedLight
        amount={8}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-10, 15, -1]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
