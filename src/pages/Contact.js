import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Div = styled(motion.div)`
    background-color: black ;
    height:100vh;
    overflow:hidden;
    
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
            position:fixed;
            width:360px;
            margin-top:200px;
            margin-left:-20px;
            
        }
       
    }
  
`



const Icons = styled(motion.div)`
        
   
    h1{
        font-size:30px;
        transform:translateY(-450px);
        
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        @media (max-width:500px){
            transform:translate(-10px,110px);
            font-size:15px;
            color:white;
            
            z-index:2
            
        }
        
    }
    img{
        
       display:flex;
       justify-content:column;
       transform:translate(620px,-433px);
        height:30px;
        width:30px;
        @media (max-width:500px){
            
           transform:translate(130px,120px);
        }
        &:hover{
            height:33px;
            width:33px;
            transition: all ease-in-out 0.3s;
        }
        @media (max-width:500px){
            
            height:15px;
            width:15px;
            
        }   
        p{
            letter-spacing:4px;
            font-family:helvetica;
            position:absolute;
            transform:translate(70px,90px);
            
        }
    }
`
const Address = styled(motion.div)`
    position:fixed;
    color:white;
    font-family:halvetica;
    padding-right:650px;
    margin-top:-565px;
    margin-left:700px;
    font-size:20px;
    @media (max-width:500px){
       
        display:none;
       }
    p{ 
        
        color:white;
        @media (max-width:500px){
        letter-spacing:1px;
        font-family:halvetica;
        
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
        
    },
    visible: {
        opacity: 1,
        
        transition: {
            duration: 5,
            delay: 2,
            type:"tween"
        }
    }
}
const addresVariants = {
    hidden: {
        opacity: 0,
       
    },
    visible: {
        opacity: 1,
       
        transition: {   
            duration: 2,
            delay:2
        }
    }
}

const Contact = () => {
    const [text, setText] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 2000 });
    })
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
                
            
                
                <Icons variants={VRcontact}
                    initial="hidden"
                    animate="visible"
                >
                    {text &&<h1>CONTACT US</h1>}
                    
                    {text && <img src="./instagram.png" alt="insta-icon"/>}
                   
                    {text && <img src="./whatsapp.png" alt="whatsapp-icon" />}
                    
                    {text && <img src="./gmail.png" alt="gmail-icon" />}
                    
                </Icons>
                
           
                <Address variants={addresVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <p >instagram.com</p>
                    <p >939393939393</p>
                    <p > xrhorizon@gmail.com</p>
                </Address>
                       
            
        </Div>
    )
}

export default Contact;