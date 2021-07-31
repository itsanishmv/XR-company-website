import React, { useState } from 'react'
import styled from 'styled-components'

import Nav from './Nav'
import { motion } from 'framer-motion'

import Mobilemenu from './Mobilemenu'

const Div = styled(motion.div)`
    position:fixed;
    height:30px;
    width:40px;
    top:20px;
    right:25px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-around;
    z-index:2;
    
    &:hover{
        cursor: pointer;
        
    }

    div{
       height:4px;
       width:40px;
       background-color:grey;
       transition: all 0.3s linear;
       transform-origin:6px;

       &:nth-child(1){
        transform:${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
        
       }
       &:nth-child(2){
        transform:${({ open }) => open ? "translateX(100px)":"translate(0)"};
        opacity:${({open})=>open? 0: 1};
        }
       &:nth-child(3){
            transform:${({ open }) => open ? "rotate(-45deg)" : "rotate(0deg)"};
            
       }
    }
    
    @media (min-width:501px){
        display:none;
    }
    
`
const Hamburger = () => {
    const [open, setOpen] = useState(false)
   
    return (
        <div>
            {open && <Mobilemenu open={open} setOpen={ setOpen}/>}
        <Div whileHover={{scale:1.1}} open={open}onClick={()=>setOpen(!open)}>
            <div />

            <div />
            
            <div />
            
        </Div>
            <Nav open={open} setOpen={setOpen}/>
            
            
         </div>
    )
}

export default Hamburger;