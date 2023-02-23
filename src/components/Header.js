import React from "react";
import styled from "styled-components";


const Header = () => {
    const HeaderStyle = styled.header`

        background-color: #F28C28;
        color: white;
        display: flex;
        flex-direction: row;
        margin-bottom: 3rem;
        font-family: 'Tilt Prism';
        justify-content: center;
        font-size: 1.2rem;
        padding:
        `

    return ( 
   
            <HeaderStyle>
                <h2>If Only ...</h2>
            </HeaderStyle>

     );
}
 
export default Header;