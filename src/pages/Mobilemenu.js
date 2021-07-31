import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bounce } from './Nav'

const Button = styled(motion.button)`
   color: grey;
   border:none;
   background: none;
   font-weight:900;
   letter-spacing: 5px;
   overflow:hidden;
   
   box-sizing:border-box;       
   &:hover{

       animation: ${Bounce} 2s;
       color : white ;
   }
`
const Div = styled(motion.div)`
        display:flex;
            
        justify-content:center;
        flex-direction: column;
        align-items: center;
        background-color:black;
        position:fixed;
        height:100vh;
        overflow:hidden;
        
        z-index:2;
        width:100%;
        box-sizing:border-box;
        div2{
            position:relative;
            margin-bottom:20px;
            margin-top:20px;

        }
        
    `
const ButtonVariants = {
    hidden: {
            x:-200,
    },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            delay:0.2
            }
    }
    }
const Mobilemenu = ({open,setOpen}) => {
    return (
        <Div
            
            initial={{opacity:0,x:-360}}
            animate={{ opacity:1}}
            onClick={open ? () => (setOpen(false)) : null}>
            <div1>
            <Link style={{textDecoration:"none"}} to="/">
                    <Button variants={ButtonVariants} initital="hidden" animate="visible">HOME</Button>
            </Link>
          </div1>
          <div2>
              <Link style={{textDecoration:"none"}} to="/ourworks">
                  <Button >OUR WORKS</Button>
              </Link>
          </div2>
          <div3>
            <Link style={{textDecoration:"none"}} to="/contact">
                <Button >CONTACT</Button>
          </Link>
          </div3>
        </Div>
    )
}
export default Mobilemenu;