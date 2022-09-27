import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/molecules/Section"

import TextBlock from "../../components/molecules/TextBlock"
import ImageGroup from "../../components/molecules/ImageGroup"
import ImageSiding from "../../components/atoms/ImageSiding"
import ImageRoofing from "../../components/atoms/ImageRoofing"
import Highlight from "../../components/organisms/Highlight"
import PhotoGallery from "../../components/organisms/PhotoGallery"
import { graphql } from "gatsby"

export const query = graphql`
  query ImagesForRoofing {
    images: allFile(
      filter: { relativeDirectory: { eq: "roofing" } }
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
    <SEO
      title="Roofing, Siding, Window, & Door Contractor in Waukesha County"
      description="Waukesha County and Jefferson County's top roofing, siding, window, and door services. Repair, replacement, and installation - no job is too big or too small."
    />
    <Section>
      <TextBlock>
        <h1>Roofing, Siding, Windows, & Doors</h1>
        <p>
          We are committed to providing each customer with a wide range of
          products and information they need to make the correct choice that
          will fit their needs. Our goal is to provide you with the best
          high-quality products and materials that add value and efficiency to
          your home or business.
        </p>
      </TextBlock>
      <ImageGroup>
        <ImageGroup.Image>
          <ImageRoofing style={{ height: "100%" }} />
        </ImageGroup.Image>
        <ImageGroup.Image>
          <ImageSiding style={{ height: "100%" }} />
        </ImageGroup.Image>
      </ImageGroup>
      <TextBlock>
        <h2>Roofing Replacement & Installation</h2>
        <p>We use all CertainTeed roofing products and accessories!</p>
        <ul>
          <li>Roof Repair</li>
          <li>Roof Replacement</li>
          <li>New Roof Construction</li>
        </ul>
        <h2>Siding Replacement & Installation</h2>
        <ul>
          <li>Siding Installation</li>
          <li>Siding Repair</li>
          <li>Siding Replacement</li>
          <li>Vinyl Siding</li>
          <li>Insulated Vinyl Siding</li>
          <li>Cedar Siding</li>
          <li>LP SmartSide</li>
          <li>Hardie Board</li>
        </ul>
        <h2>Window and Door Replacement & Installation</h2>
        <p>
          New windows and doors increase your home or business value, improve
          safety and security, enhance curb appeal, are easy to clean/low
          maintenance and noise reduction.
        </p>
        <ul>
          <li>Andersen Windows and Doors</li>
          <li>Marvin Windows and Doors</li>
          <li>Simonton Windows and Doors</li>
          <li>ThermaTru Doors</li>
          <li>Larson Doors</li>
        </ul>
      </TextBlock>
    </Section>
    <PhotoGallery data={data} />
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
