'use client'
import { Canvas } from "@react-three/fiber"
import { Environment,Center  } from "@react-three/drei"
import Shirt from "./shirt";
import Backdrop from "./BackDrop";
import CameraRig from "./cameraRing";

const CanvasModel = ()=> {
    return (
      <Canvas 
      shadows dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 30  }} gl={{preserveDrawingBuffer:true}} className="w-full max-w-full h-full transition-all ease-in " >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop/>
            <Center>
              <Shirt />
            </Center>
         
        </CameraRig>
      </Canvas>
    );
}
export default CanvasModel