


import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import ScrollButton from './ScrollButton'
import { useState ,useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const fade = keyframes`
0%{
  opacity:0px;
}
50%{
  opacity:0.5;
}
100%{
  opacity:1;
}

`
const arrow = keyframes`
0%{
  opacity:0;
  transform:rotate(45deg) translate(-20px,-20px);
}
50%{
  opacity:1;
 
}
100%{
  opacity:0;
  transform:rotate(45deg) translate(20px,20px);
}
`

const Div = styled(motion.div)`


display:flex;
justify-content: center;
height:100vh;
align-items: center;
background-image:url("earth-back.jpg");
background-size: cover ;
background-repeat:no-repeat ;
background-position: center ;
overflow:hidden;

@media (max-width:500px){
 
  background-position: center center;
  
}
`
const logodelay = keyframes`
0%{
  opacity:0;
 
}
50%{
  opacity:0.5;
}

100%{
  opacity:100%;
  
}
`
const H1 = styled(motion.h1)`
color: white;
display:flex;
justify-content:center;
align-items:center;
transform:translate(-10px,-50px);
margin-left:10px;
animation:${fade} 2s;

@media (max-width:500px){
  
  height:50px;
  width:100px;
}

img{
  object-fit:contain;
  height:400px;
  width:400px;
  animation:${(logo)=>logo? logodelay:""};
  animation-duration:3s;
  
  
  @media (max-width:500px){
    position:fixed;
    object-fit:contain;
    height:300px;
    width:300px;
    animation:${logodelay} 2s;
    animation-duration:3s;
  }
}


`
const Arrow = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
margin-top:200px;

span{
  display: block;
  width:20px;
  height:20px;
  border-bottom:1px solid white;
  border-right: 1px solid white;
  transform:rotate(45deg);
  margin:10px;
  animation: ${arrow} 2s infinite;
  animation-delay:6s;

  &:nth-child(2){
      animation-delay:-0.2s;
  transform:rotate(45deg) translate(-20px,-20px);

  }
  &:nth-child(3){
    animation-delay:-0.4s;
  }
  &:nth-child(1){
    
  }
}


`
const About = styled(motion.div)`

display:flex;
justify-content:center;
background-color:black;
flex-direction:column;
align-items:center;
padding-bottom:100px;
h1{
  letter-spacing:10px;
  font-weight:700;
  color:white;  
  
}
li{
  
  text-align:center;
  letter-spacing:2px;
  font-weight:700;
  line-height:1.6;
  max-width:800px;
  color:	#DCDCDC;
  font-size:15px;
  @media(max-width:500px){
    max-width:300px;
  }
}
`
const drag = keyframes`
  0%{
    transform:translateX(1510px);
    opacity:0.5;
  }
  25%{
    transform:translateX(50px);
  
  }
  
  75%{
    transform:translateX(-100px);
    
  }
  100%{
    transform:translateX(-2000px);
    
  }
`
const P = styled.p`
  animation:${drag}  ;
  animation-duration:10s;
  animation-delay:10s;

  transform:translateX(1600px);
  position:fixed;
 
  @media (max-width:500px){
    width:500px;
    transform:translateX(-2000px);
    position:fixed;
    
  }
`

const homeVariants = {
from:{
  opacity:0.5,
  
},
to: {
  opacity: 1,
  
  transition: {
    delay: 0,
    duration:3
  }
},
exit: {

  opacity:0
  
}
}


function Home() {
  const [logo, setLogo] = useState(false)
  setTimeout(() => {
      setLogo(true)
    },3000)

  useEffect(() => {
    Aos.init({ duration: 1000 });
  },[])
  return (
    
    <div style={{backgroundColor:"black"}}>
      <Div 
        variants={homeVariants}
        initial="from"
        animate="to"
       
      >
        <H1 
         
        >{logo &&
          <img src="./mainlogo.svg" alt="logo xr" />
         }
        </H1>
        <Arrow>
          <span></span>
          <span></span>
          <span></span>
        </Arrow>
        
      </Div>
         <About>
            <h1>About Us</h1>
            <li data-aos="fade-up">Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. Applications of virtual reality include entertainment (e.g. video games), education (e.g. medical or military training) and business (e.g. virtual meetings). Other distinct types of VR-style technology include augmented reality and mixed reality, sometimes referred to as extended reality or XR.[1]

            One may distinguish between two types of VR; immersive VR and text-based networked VR (also known as "Cyberspace").[2] The immersive VR changes your view, when you move your head. While both VRs are appropriate for training, Cyberspace is preferred for distance learning.[2] In some cases these two types are even complementary to each other. This page mainly focuses on the immersive VR.</li>
          
         </About>
         
            <ScrollButton/>
      <P style={{ letterSpacing: "2px", fontWeight: "700", paddingBottom: "100px", color: '#DCDCDC', display: 'flex', justifyContent: 'center', marginTop: "-1200px"}}>OUR WEBISTE IS UNDER DEVELOPMENT  PLEASE VISIT US AFTER SOMETIME , WE HAVE A LOT OF EXCITING STUFF TO SHARE WITH YOU  </P>
          
    </div>
  );
}

export default Home;
