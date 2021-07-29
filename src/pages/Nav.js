import React from 'react'
import styled from 'styled-components'
import {motion, MotionConfig} from 'framer-motion'
import {BrowserRouter as Router,Link,NavLink, Redirect} from 'react-router-dom'
import { css, keyframes } from 'styled-components'
import './Nav.css'
export const Bounce = keyframes`
    0% {
      transform: translateY(-4px);
    }
    25% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-4px);
    }
    100%{
        transform: translateY(0px);
    }
  }
`

export const Button = styled.button`
    background-Color:transparent;
    cursor:pointer;
    color:grey;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size:16px;
    letter-spacing: 3px;
    transition: color 0.5s;
   
    &:hover{
         color:white;
         animation:${Bounce} 2s;
    }
`

const Div = styled(motion.div)`
    display:flex;
    margin-top:40px;
    margin-right:150px;
    position: fixed;
    justify-content:center;
    z-index:3;

    @media (max-width:500px){
      display:none;
    }
    
`


const Nav = ({ open, setOpen }) => {
  return (
  
    <Div open={open} onClick={open ? () => (setOpen(false)) : null}>
          
          <div1>
           <NavLink exact className="button" activeStyle={{ color: "white"  }} to="/">
                  HOME
            </NavLink>
          </div1>
          <div2>
          <NavLink className="button" activeStyle={{color:'white'}} to="/ourworks">
                  OUR WORKS
              </NavLink>
          </div2>
          <div3>
            <NavLink exact className="button" activeStyle={{color:'white'}}  to="/contact">
                CONTACT
          </NavLink>
          </div3>
        
        </Div>
      
    
    )
}

export default Nav;