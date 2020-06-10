import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/molecules/Masthead"
import Projects from "../components/molecules/Projects"
import Advantages from "../components/organisms/Advantages"
import Highlight from "../components/organisms/Highlight"
import Social from "../components/organisms/Social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead />
    <Projects />
    <Advantages />
    <Highlight reverse={false} />
    <Social />
    <Highlight reverse={true} />
  </Layout>
)

export default IndexPage
