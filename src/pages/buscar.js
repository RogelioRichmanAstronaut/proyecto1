import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../componentes/Layout/layout"

import Logobar from '../componentes/logobar'

const ContenedorBuscar = styled.div`
position: relative;
width:100%;
height: 100vh;
background: #060B13;
display:flex;
justify-content:center;
align-items: center;

`
const ContenedorTitulo = styled.div`
position: absolute;
width: 34.5%;
max-width:800px;
min-width:130px;
height: 4%;
min-height: 45px;
top: 17%;
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

color: #ECF0F9;
`
const ContenedorBuscador = styled.div`
position: absolute;
width: 74%;
height: 47px;
top: 30%;

background: #8BA5DA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ContenedorInfo = styled.div`
position: absolute;
width: 221px;
height: 21px;

top: 58%;

background: #3D69C2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`
const Subtitulo = styled.div``

const Atras = styled.div`
position: absolute;
width: 200px;
height: 42px;

background: #253F74;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
bottom: 5%;
`

const buscar = () => (
    <Layout>
        <ContenedorBuscar>
            <Logobar />
            <ContenedorTitulo>
                <Titulo>Buscar</Titulo>
            </ContenedorTitulo>
            <ContenedorBuscador></ContenedorBuscador>
            <ContenedorInfo>
                <Subtitulo></Subtitulo>
            </ContenedorInfo>
            <Atras>Volver</Atras>
        </ContenedorBuscar>
    </Layout>
)

export default buscar
