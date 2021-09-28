
import { ZapparCanvas, ZapparCamera ,InstantTracker} from '@zappar/zappar-react-three-fiber'
import { useState } from 'react';


const ARcomponent = () => {
 
 
  return (
      <div style={{height:"100vh"}}>
              <ZapparCanvas>
          <ZapparCamera />
          <InstantTracker
            placementUI="placement-only"
            placementCameraOffset={[0, 0, -10]}
          >
            <mesh>
              <img src="" alt="" />
              <meshStandardMaterial color="red" />
            </mesh>
          </InstantTracker>
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
  
      </div>
     
       
    )
}
export default ARcomponent;