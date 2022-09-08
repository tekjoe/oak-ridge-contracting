import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/molecules/Section"
import TextBlock from "../../components/molecules/TextBlock"
import Highlight from "../../components/organisms/Highlight"
import PhotoGallery from "../../components/organisms/PhotoGallery"

export const query = graphql`
  query ImagesForDesign {
    images: allFile(
      filter: { relativeDirectory: { eq: "design" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Design and 3D Rendering in Waukesha County and Jefferson County" />
    <Section>
      <TextBlock>
        <h1>Design & 3D Rendering</h1>
        <p>Choosing to work with our in-house designer ensures:</p>
        <ul>
          <li>Accuracy</li>
          <li>Clear communication</li>
          <li>Precise measurements</li>
          <li>Saved time and energy</li>
          <li>Best end results achieved for your project</li>
        </ul>
        <p>
          You will have one-on-one meetings to discuss your vision. Our design
          services include 3D renderings, hand-picked selections, and design
          selection boards. These items are key to visualizing your project
          before it begins and a smooth process.
        </p>
      </TextBlock>
    </Section>
    <PhotoGallery data={data} />
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
