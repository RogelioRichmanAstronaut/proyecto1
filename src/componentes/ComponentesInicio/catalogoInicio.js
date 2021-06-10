import React from 'react'
import styled from 'styled-components'

const ContenedorCatalogo = styled.div`
 position: relative;
 width:100%;
 height: 45vh;
 display:flex;
 
 align-items:center;
 justify-content:center;

 background: #07120F;



 @media screen and (max-height:570px) {
    min-height: 256.5px;
}`
const ContenedorTitulo = styled.div`
display:flex;
margin: 0 auto;
align-items:center;
justify-content:center;
position: absolute;
width: 200px;
height: 42px;
top: 5%;

background: #2A6F58;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 `
const Titulo = styled.div`
position: absolute;



font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

color: #EDF8F4;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ContenedorSecciones = styled.div`
position: absolute;
top: 30%;
width: 276px;
height: 197px;

background: #90D5BE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


const catalogoInicio = () => {
    return (
        <ContenedorCatalogo>
            <ContenedorTitulo>
                <Titulo>CATÁLOGO</Titulo>
            </ContenedorTitulo>
            <ContenedorSecciones>

            </ContenedorSecciones>
        </ContenedorCatalogo>
    )
}

export default catalogoInicio
