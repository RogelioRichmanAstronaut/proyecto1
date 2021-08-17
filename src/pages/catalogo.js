import React from 'react'
import styled from 'styled-components'

import { Link } from "gatsby"

import Layout from "../componentes/Layout/layout"

import Logobar from '../componentes/logobar'
const ContenedorCatalogo = styled.div`
 position: relative;
 width:100%;
 height: 100vh;
 background: #07120F;;
 display:flex;
 justify-content:center;
 align-items: center;
 min-height: 512px;
`
const ContenedorTitulo = styled(Link)`
position: absolute;
width: 80%;
max-width:800px;
min-width:130px;
height: 6%;
min-height: 45px;
top: 15%;
margin:0 auto;



background: #2A6F58;;
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

const ContenedorSecciones = styled.div`
position: absolute;
display:flex;
min-width: 276px;
width:80%;
height: 439px;

top: 28%;

background: #2A6F58;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`

const Atras = styled(Link)`
position: absolute;
width: 200px;
height: 42px;

background: #2A6F58;;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
bottom: 5%;

color: white;
`

const catalogo = () => (
    <Layout>
        <ContenedorCatalogo>
            <Logobar />
            <ContenedorTitulo>
                <Titulo>CATÁLOGO</Titulo>
            </ContenedorTitulo>
            <ContenedorSecciones></ContenedorSecciones>
            <Atras to="/">
                <Titulo>Volver</Titulo>
            </Atras>
        </ContenedorCatalogo>
    </Layout>
    )

export default catalogo
