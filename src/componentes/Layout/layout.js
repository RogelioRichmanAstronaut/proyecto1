import React from 'react'
import { GlobalStyle } from "../../estilos/estilosglobales"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <main>{children}</main>
        </>
    )
}

export default Layout
