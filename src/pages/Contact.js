import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Div = styled(motion.div)`
    background-color: black;
    height:100vh;
    img{
        height:80px;
        width:200px;
        padding-left:30px;
        object-fit:contain;
        margin-top:10px;
        @media (max-width:500px){
            height:50px;
            width:150px;
        }
        div{
            height:200px;
            width:200px;
            padding-left:30px;
           
           
        }
        
    }
    
`
const VR = styled(motion.div)`
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        height:600px;
        width:1800px;
        @media (max-width:500px){
            height:300px;
            width:300px;
            margin-right:25px;
            
        }
       
    }
  
`
const Contactus = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    transform:translateY(-400px); 
    color:white;
    letter-spacing:10px;
    h1{
        
          
        @media (max-width:500px){
            font-size:16px;
            letter-spacing:8px;
            transform:translate(5px,220px); 
        }
    }
   
`
const Icons = styled(motion.div)`
    display:flex;
    flex-direction:column;
    
    img{
        
        height:20px;
        width:20px;
        margin-top:20px;

        @media (max-width:500px){
            margin-top:20px;
        }
        &:hover{
            height:25px;
            width:25px;
            transition: all 0.25s;
        }
        @media (max-width:500px){
            transform:translateY(300px);
            
        }
    }
`
const VRvariants = {
    hidden:{
        opacity:0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 3,
            delay:0
        }
    }
}
const VRcontact = {
    hidden:{
        opacity: 0,
        scale:2
    },
    visible: {
        opacity: 1,
        scale:1,
        transition: {
            duration: 3,
            delay:0
        }
    }
}
const Contact = () => {
    const [text, setText] = useState(false)
    setTimeout(() => {
        setText(true)
    },2000)
    return (
        <Div>
            <div>
                <Link to="/"><img src="./mainlogo.svg" alt="logo" /></Link>
            </div>
           
                <VR variants={VRvariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img src="./VR-element.png" alt="sds" />
                </VR>
                
            <Contactus>
                
                <Icons variants={VRcontact}
                    initial="hidden"
                    animate="visible"
                >
                    {text &&
                        <h1>CONTACT US</h1>}
                    
                   {text&& <img src="./instagram.png" alt="insta-icon"/>}
                    {text&& <img src="./whatsapp.png" alt="whatsapp-icon" />}
                    {text&& <img src="./gmail.png" alt="gmail-icon" />}
                    
                </Icons>
                
           </Contactus>
            
        </Div>
    )
}

export default Contact;