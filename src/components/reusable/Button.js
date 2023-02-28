import React from "react";
import styled from "styled-components";


const Button = ({text, value, color, onClick}) => {
    
  const Button = styled.button `
  background-color: #36B37E;
  color: black;
  width: 100px;
  border: 2px solid #36B37E; 
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