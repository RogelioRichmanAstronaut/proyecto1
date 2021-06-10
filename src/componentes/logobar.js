import React from 'react'
import styled from 'styled-components'

const NavContenedor = styled.div`
display:flex;
width:100%;
justify-content: center;
align-items:center;
`
const Nav = styled.div`
 top: 0;
 height: 80px;
 display:flex;
 justify-content: center;
 align-items:center;
 padding: 1rem 2rem;
 width: 192px;
 background-color: #827B17;
 margin: 0 auto;

 position: absolute;
 z-index:1;

 :before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    background: radial-gradient(
      circle, 
        rgba(37, 63, 116,1) 0%,
        rgba(37, 63, 116,1)100%),
        radial-gradient(ellipse, rgba(37, 63, 116, 1) 0%, transparent 100%);
      z-index: 2;
}
`
const LogoContenedor = styled.div`
 z-index: 3;
 :before {
    content: '';
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    bottom: 16px;
    background: radial-gradient(
      circle, 
        rgba( 139, 165, 218, 1.00) 0%,
        rgba( 139, 165, 218, 1.00)100%),
        radial-gradient(ellipse, rgba( 139, 165, 218, 1.00) 0%, transparent 100%);
      z-index: 4;
}
 `
const LogoTexto = styled.div`
 position: relative;
 z-index: 5;
 color: #ECF0F9;
 cursor: pointer;
 text-decoration:none;
 font-size: 48px;`

const logobar = () => {
    return (
        <NavContenedor>
        <Nav>
            <LogoContenedor>
                <LogoTexto>VIPS</LogoTexto>
            </LogoContenedor>
        </Nav>
        </NavContenedor>
    )
}

export default logobar
