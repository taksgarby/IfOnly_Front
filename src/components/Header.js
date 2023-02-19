import React from "react";
import styled from "styled-components";


const Header = () => {
    const HeaderStyle = styled.header`
        background-color: #003049; 
        color: white;
        display: flex;
        flex-direction: row;
        margin-bottom: 3rem;
        font-family: Merriweather;
        justify-content: center;
        `

    return ( 
   
            <HeaderStyle>
                <h2>If Only ...</h2>
            </HeaderStyle>

     );
}
 
export default Header;