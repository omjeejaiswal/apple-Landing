import { Canvas } from "@react-three/fiber"
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"
import MacContainer from "./MacContainer"

function App() {

  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display'] ">
      <div className="navbar line flex gap-10 py-5 absolute top-0 left-1/2 -translate-x-1/2">
        {["iphone", "iPad", "services", "ios", "mac", "products"].map(e => (
           <a href="" className="text-white font-[500] text-sm ">
            {e}
           </a>
        ))}

      </div>
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter from-[700] ">macbook pro.</h3>
        <h5 className=""> Oh so pro ! </h5>
        <p className="text-center "> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quidem minus? Id, perferendis totam. </p>
      </div>
      <Canvas camera = {{fov: 12, position: [0, -10, 220] }} >
        {/* <OrbitControls /> */}
        {/* <mesh>
          <boxGeometry />
        </mesh> */}
        <Environment 
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr"
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
    
  )
  
}

export default App
