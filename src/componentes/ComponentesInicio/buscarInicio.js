import React from 'react'
import styled from 'styled-components'

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
const ContenedorTitulo = styled.div`
position: absolute;
width: 130px;
height: 45px;
top: 35%;
margin:0 auto;


background: #253F74;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 `
const Titulo = styled.div`
position: absolute;
margin: 0 auto;
width: 100%;
heigt:100%;
justify-content: center;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

color: #ECF0F9;
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
width: 276px;
height: 47px;
top: 72%;

background: #8BA5DA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 `


const buscarInicio = () => {
    return (
        <ContenedorBuscar>
            <ContenedorTitulo>
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
