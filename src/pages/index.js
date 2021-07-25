import * as React from "react"
import BuscarInicio from "../componentes/ComponentesInicio/buscarInicio"
import CatalogoInicio from "../componentes/ComponentesInicio/catalogoInicio"
import ContactoInicio from "../componentes/ComponentesInicio/contactoInicio"
import NosotrosInicio from "../componentes/ComponentesInicio/nosotrosInicio"
import Layout from '../componentes/Layout/layout'

import Logobar from '../componentes/logobar'

const IndexPage = () => (
  <>
  <Layout>
    <Logobar />
    <BuscarInicio />
    <CatalogoInicio />
    <NosotrosInicio />
    <ContactoInicio />
  </Layout>
  </>
)

export default IndexPage
