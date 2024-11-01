import { useGLTF } from "@react-three/drei";
import React from "react";

function MacContainer() {
    let model = useGLTF("./mac.glb")
    return(
        <group> 
            <primitive object ={model.scene}/>
        </group>
    )
}

export default MacContainer