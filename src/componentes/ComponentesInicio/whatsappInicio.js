import React from 'react'
import styled from 'styled-components'

const ContenedorWhatsapp = styled.div`
 position: relative;
 width:100%;
 height: 10vh;
 display:flex;
 
 align-items:center;
 justify-content:center;

 background: #161404;



 @media screen and (max-height:570px) {
    min-height: 84px;
}`
const ContenedorTitulo = styled.div`
display:flex;
margin: 0 auto;
align-items:center;
justify-content:center;
position: absolute;
width: 53.5%;
min-width:200px;
max-width:2214.63px;

height:58.5%;
min-height: 42px;



background: #827B17;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 `
const Titulo = styled.div`
position: absolute;



font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: calc(150% + 1vw + 1vh );
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

color: #F7F5D4;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const whatsappInicio = () => {
    return (
        <ContenedorWhatsapp>
            <ContenedorTitulo>
                <Titulo>whatsapp</Titulo>
            </ContenedorTitulo>
        </ContenedorWhatsapp>
    )
}

export default whatsappInicio
