import React from 'react'
import styled from 'styled-components'

import { Link } from "gatsby"

const ContenedorBuscar = styled.div`
 top: 0;
 position: relative;
 width:100%;
 height: 45vh;
 background-color:#060B13;
 display:flex;
 

 
 align-items:center;
 justify-content:center;
 @media screen and (max-height:570px) {
    min-height: 256.5px;
}`
const ContenedorTitulo = styled(Link)`
position: absolute;
width: 34.5%;
max-width:800px;
min-width:130px;
height: 8%;
min-height: 45px;
top: 35%;
margin:0 auto;



background: #253F74;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Titulo = styled.div`

position: absolute;
margin: 0 auto;
width: 100%;
height:100%;
justify-content: center;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: calc(210% + 1vw + 1vh );
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

color: white;
`

const ContenedorInfo = styled.div`
position: absolute;
width: 221px;
height: 21px;

top: 58%;

background: #3D69C2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`
const Subtitulo = styled.div``
const ContenedorBuscador = styled.div`
position: absolute;
width: 74%;
height: 47px;
top: 72%;

background: #253F74;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 `


const buscarInicio = () => {
    return (
        <ContenedorBuscar>
            <ContenedorTitulo to="/buscar">
                <Titulo>Buscar</Titulo>
            </ContenedorTitulo>
            <ContenedorInfo>
                <Subtitulo></Subtitulo>
            </ContenedorInfo>
            <ContenedorBuscador>
            </ContenedorBuscador>
        </ContenedorBuscar>
    )
}

export default buscarInicio
