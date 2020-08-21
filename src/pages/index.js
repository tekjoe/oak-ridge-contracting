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
      <SEO
        title="Waukesha County and Jefferson County's top home renovation and home remodeling contractor."
        description="Oak Ridge Contracting is the top home renovation and home remodeling contractor in Waukesha County and Jefferson County. We make your vision a reality."
      />
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
