
import { keyframes } from 'popmotion';
import React, {useState} from 'react';
import styled from 'styled-components';
const Bounce = keyframes`
    0%{
      opacity:0;
      transform:scale(2);
    }
    50%{
      opacity:1;
      transform:scale(1);

    }
    100%{
      opacity:0;
      transform:scale(2);
      
    }
`
const Div = styled.div`
   
    height:100px;
    width:50px;
    margin-left:48%;
    img{
      
      animation: ${Bounce} 1s infinite;
    }
    &:hover{
      cursor:pointer;
    }
    @media(max-width:500px){
      margin-left:155px;
    }

`
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
            <Div>
               <img src="./arrow-up.svg" alt="up" onClick={scrollToTop} />
            </Div>
  );
}
  
export default ScrollButton;