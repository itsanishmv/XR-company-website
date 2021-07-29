import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Loading = () => {
    const Div = styled(motion.div)`
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background-color:black;
        
        img{
            max-height:400px;
            max-width:300px;
            object-fit:contain;
        }
    `
    const divVariants = {
        hidden: {
            opacity: 0,
            scale:1
        },
        visible: {
            opacity: 1,
            scale:2
        }
    }
    return (
        <Div variants={divVariants}
            initial="hidden"
            animate="visible"

        >
            <img src="./VR-element.png" alt="element" />
        </Div>
    )
}
export default Loading;