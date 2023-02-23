import React from "react";
import styled from "styled-components";


const Button = ({text, value, color, onClick}) => {
    
  const Button = styled.button `
  background-color: #FFFF33;
  color: black;
  width: 100px;
  border: 2px solid grey; 
  border-radius: 8px;
  padding: 5px;
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
  margin-top: 0px;
`

    
    
    return ( 
        <Button color={color} value={value} onClick={onClick}>{text}</Button>
     );
}
 
export default Button;