import { Canvas } from "@react-three/fiber"
import './App.css'
import "./style.css"
import { Environment, OrbitControls } from "@react-three/drei"
import MacContainer from "./MacContainer"

function App() {

  return (
    <Canvas camera = {{fov: 20, position: [0, -3, 120] }} >
      <OrbitControls />
      {/* <mesh>
        <boxGeometry />
      </mesh> */}
      <Environment 
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr"
        ]}
      />
      <MacContainer />
    </Canvas>
  )
  
}

export default App
