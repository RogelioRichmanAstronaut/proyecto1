import React from 'react'
import styled from 'styled-components'

const ContenedorCatalogo = styled.div`
 position: relative;
 width:100%;
 height: 45vh;
 display:flex;
 
 align-items:center;
 justify-content:center;

 background: #060B13;



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

height:13%;
min-height: 42px;

top: 5%;

background: #253F74;
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

color: #ECF0F9;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ContenedorSecciones = styled.div`
position: absolute;
top: 30%;
width: 80%;
height: 55%;

background: #8BA5DA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
const ContenedorColumnas = styled.div`
display:grid;
grid-auto-columns: minmax(auto,1fr);
align-items:center;

width:100%;
height:75%;

grid-template-areas :'col2 col1';

/*@media screen and (max-width: 768px){
  grid-template-areas: 'col1' 'col2';
}*/
`
const Columna1 = styled.div`
margin-top:0%;
padding: 0 15px;
display: flex;
flex-direction: column;
align-items:center;

@media screen and (max-width: 768px){
 padding: 0;}
 @media screen and (min-height: 672px){
    margin-top:10%;
}
@media screen and (min-width: 443px){
    margin-top:1%;
}`
const Columna2 = styled.div`
margin-top:0%;
padding: 0 15px;
display: flex;
flex-direction: column;
@media screen and (max-width: 768px){
 padding: 0;
}
@media screen and (min-height: 672px){
    margin-top:10%;
}
@media screen and (min-width: 443px){
    margin-top:1%;
}`
const LinkWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
box-sizing: border-box;
padding-top: 0%;
justify-content: center;
align-items: center;

width:100%;

@media screen and (max-width: 768px){
    width: 100%;
}

@media screen and (min-height: 770px){
    padding-top: 0%;
}`
const TituloSeccion = styled.h1`
margin-bottom: 24px;
font-size: calc(110% + 1vw + 1vh );
line-height: 1.1;
font-weight: 600;
color:white;


box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

/*@media screen and (min-width: 525px){
    margin-bottom: 10px;
}
@media screen and (max-width: 865px){
    margin-bottom: 0px;
}*/`

const ContenedorVerMas = styled.div`
height:30%;
width:70%;
max-width:790px;
margin: 0 auto;
justify-content: center;
align-items: center;
text-align: center;
`
const VerMas = styled.h2`

font-size: calc(80% + 1vw + 1vh );
line-height: 1.1;
font-weight: 600;
color:white;


box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

/*@media screen and (min-width: 525px){
    margin-bottom: 10px;
}
@media screen and (max-width: 865px){
    margin-bottom: 0px;
}*/`
const contactoInicio = () => {
    return (
        <ContenedorCatalogo>
            <ContenedorTitulo>
                <Titulo>Contacto</Titulo>
            </ContenedorTitulo>
            <ContenedorSecciones>
                <ContenedorColumnas>
                    <Columna1>
                        <LinkWrapper>
                            <TituloSeccion>Llamada</TituloSeccion>
                        </LinkWrapper>
                        <LinkWrapper>
                            <TituloSeccion>Ver Mapa</TituloSeccion>
                        </LinkWrapper>
                    </Columna1>
                    <Columna2>
                        <LinkWrapper>
                            <TituloSeccion>Whatsapp</TituloSeccion>
                        </LinkWrapper>
                        <LinkWrapper>
                            <TituloSeccion>Otro</TituloSeccion>
                        </LinkWrapper>
                    </Columna2>
                </ContenedorColumnas>
                <ContenedorVerMas>
                    <VerMas>Ver todas</VerMas>
                </ContenedorVerMas>
            </ContenedorSecciones>
            
        </ContenedorCatalogo>
    )
}

export default contactoInicio
