import React from 'react'
import styled from 'styled-components'

const ContenedorNosotros = styled.div`
 position: relative;
 width:100%;
 height: 45vh;
 display:flex;
 
 align-items:center;
 justify-content:center;

 background: #161404;



 @media screen and (max-height:570px) {
    min-height: 256.5px;
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

height:11%;
min-height: 42px;

top: 5%;

background: #827B17;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 `
const Titulo = styled.h1`
position: absolute;



font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: calc(150% + 1vw + 1vh );
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

color: white;

`
const RecuadroNosotros = styled.div`
position: absolute;
top: 30%;
width: 80%;
height: 55%;

background: #827B17;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const CTexto = styled.div`
display:flex;
margin-top:0%;
padding: 0 15px;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;

width:90%;;
height:75%;


@media screen and (max-width: 768px){
 padding: 0;}
`
const Texto = styled.h2`
display:flex;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: calc(80% + 1vw + 1vh );
line-height: calc(80% + 1vw + 1vh );
display: flex;
align-items: center;
text-align: center;
color:white;


`
const CVerMas = styled.div`
display:flex;
height:22%;
width:65%;
margin: 0 auto;`
const VerMas = styled.h2`
margin: 0 auto;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: calc(80% + 1vw + 1vh );
line-height: calc(80% + 1vw + 1vh );
display: flex;
align-items: center;
text-align: center;
color:white;
`


const nosotrosInicio = () => {
    return (
        <ContenedorNosotros>
            <ContenedorTitulo>
                <Titulo>Nosotros</Titulo>
            </ContenedorTitulo>
            <RecuadroNosotros>
                <CTexto>
                    <Texto>Hola buenardos xd soy danielvi alias el vicentini me gusta el queso y la salchipapa</Texto>
                </CTexto>
                <CVerMas>
                    <VerMas>Ver más {">"}</VerMas>
                </CVerMas>
            </RecuadroNosotros>
        </ContenedorNosotros>
    )
}

export default nosotrosInicio
