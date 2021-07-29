import React from 'react'

import { motion } from 'framer-motion'
import styled,{keyframes} from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled(motion.div)`
        
        
        img{
            position:fixed;
            z-index:1;
            object-fit:contain;
            height:100px;
            width:200px;
            padding-right:1800px;
            padding-left:30px;
            background-color:black;
            @media (max-width:500px){
                height:80px;
                width:150px;
                padding-bottom:10px;
            }
        }
        
        div{
            display:flex;
            flex-direction:column;
            height:100vh;
            
            justify-content:flex-start;
            
        }
        
    `
const Content = styled.div`
        
        padding-left:100px;
        max-width:500px;
        color:white;
        line-height:1.6;
        font-size:20px;
        font-weight:600;
        text-align:justify;
        @media (max-width:500px){
            padding-left:40px;
        }
        h1{
            color:red;
            letter-spacing:10px;
           
            @media (max-width:500px){
                padding-left:10px;
                font-size:20px;
                width:100px;
            }
            li{
                font-size:20px;
               
            }
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
    const Arrow = styled.div`
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            margin-top:600px;
           
            z-index:0;

            span{
            display: block;
            width:20px;
            height:20px;
            border-bottom:1px solid white;
            border-right: 1px solid white;
            transform:rotate(45deg);
            margin:10px;
            animation: ${arrow} 2s infinite;

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
const Gif = styled.div`
    margin-left:700px;
    transform:translateY(-700px);
    
    img{
       
        object-fit:contain;
        @media (max-width:500px){
            height:200px;
            width:200px;
            object-fit:contain;
        }
        
    }
    
`
const variants = {
    hidden: {
        opacity: 0,
       
    },
    visible: {
        opacity: 1,
        
        transiiton: {
            duration: 2,
            delay: 2
        }
    }
    }

const OurWorks = () => {
    
    return (
        <div style={{backgroundColor:"black",overflow:"hidden"}}> 
        <Div variants={variants}
            initial="hidden"
            animate="visible"
        >
            <div>
                <Link to="/"><img src="./logo-white.png" alt="top bar logo" /></Link> 
            
                <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Jd2GK0qDtRg?controls=0&amp;start=4&amp;loop=1&amp;autoplay=1&amp;mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Arrow>
                    <span></span>
                    <span></span>
                    <span></span>
                </Arrow>
            </div>
                 
            
            
            </Div>
            
            <Content>
           
                <h1>3-D MAPPING</h1>
                <li>3D mapping means profiling of objects in three dimensions to map the objects in real-world. There are several ways for a 3D profiling of an area or object, such as using a pair of a stereo camera. Another method is to measure the depth of an object or feature from focus. You can also create a 3D effect by detecting the light field by plenoptic methods or using active 3D imaging techniques.Advantage of 3D mapping over 2D technology
                    One of the best benefits of 3D mapping is that it provides the latest technical methods for visualisation and gathering information. Knowledge visualisation and science mapping become easier when a 3D map is available for the object/area under study.
                    A 3D map provides a realistic view of a location that can be utilised by local authorities and planners. For the construction sector, a 3D map is as useful as a blueprint is. It is very easy to visualise floor plans on a 3D map and identify possible obstructions which may occur during construction.</li>
                
            </Content>
                <Gif>
                     <img  src="https://media.giphy.com/media/TyQY0zTXX4x0c/source.gif"></img>
                </Gif>
            </div>
      
    )
}

export default OurWorks;