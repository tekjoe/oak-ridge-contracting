import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/molecules/Masthead"
import Projects from "../components/molecules/Projects"
import Advantages from "../components/organisms/Advantages"
import Highlight from "../components/organisms/Highlight"
import Social from "../components/organisms/Social"

export const query = graphql`
  {
    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 4) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Masthead />
      <Projects />
      <Advantages />
      <Highlight reverse={false} />
      <Social instagramPosts={data.allInstaNode.edges} />
      <Highlight reverse={true} />
    </Layout>
  )
}

export default IndexPage
