import * as React from "react"
import BuscarInicio from "../componentes/ComponentesInicio/buscarInicio"
import CatalogoInicio from "../componentes/ComponentesInicio/catalogoInicio"
import Layout from '../componentes/Layout/layout'

import Logobar from '../componentes/logobar'

const IndexPage = () => (
  <>
  <Layout>
    <Logobar />
    <BuscarInicio />
    <CatalogoInicio />
  </Layout>
  </>
)

export default IndexPage
