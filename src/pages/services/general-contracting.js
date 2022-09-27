import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/molecules/Section"
import TextBlock from "../../components/molecules/TextBlock"
import ImageGroup from "../../components/molecules/ImageGroup"
import Image from "../../components/atoms/Image"
import ImageGenCon from "../../components/atoms/ImageGenCon"
import Highlight from "../../components/organisms/Highlight"
import PhotoGallery from "../../components/organisms/PhotoGallery"

export const query = graphql`
  query ImagesForContracting {
    images: allFile(
      filter: { relativeDirectory: { eq: "contracting" } }
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
    <SEO title="General Contractor in Waukesha County and Jefferson County" />
    <Section>
      <TextBlock>
        <h1>General Contracting</h1>
        <p>
          Oak Ridge Contracting is leading the way when it comes to professional
          general contracting services in southeastern Wisconsin. We pride
          ourselves on providing outstanding customer service, communication,
          friendliness, and work hard to keep all our projects on time and under
          budget. All our contracting services are customizable to your specific
          needs.
        </p>
        <p>
          Oak Ridge Contracting's team of skilled professionals aim to transform
          your vision into a reality. We work with each homeowner or business
          owner to enhance the quality and value of their property.
        </p>
      </TextBlock>
      <ImageGroup>
        <ImageGroup.Image>
          <ImageGenCon />
        </ImageGroup.Image>
        <ImageGroup.Image>
          <Image style={{ height: "100%" }} />
        </ImageGroup.Image>
      </ImageGroup>
      <TextBlock>
        <h2>Contracting Services</h2>
        <p>
          We have the goal to be a one-stop-shop for all our customers at every
          step of a project. Our team of subcontractors are experienced in the
          fields of:
        </p>
        <ul>
          <li>Architectural and Design Services</li>
          <li>Carpentry</li>
          <li>Electrical</li>
          <li>Plumbing</li>
          <li>HVAC</li>
          <li>Drywall Installation and Repair</li>
          <li>Painting</li>
          <li>Masonry</li>
          <li>Gutter Installation</li>
          <li>Epoxy Flooring</li>
          <li>Grading and Excavation</li>
          <li>Flooring – Tile, Carpet, Hardwood, LVP</li>
          <li>Tile Showers</li>
          <li>Countertop Replacement and Installation</li>
          <li>Spray Foam Insulation</li>
        </ul>
      </TextBlock>
    </Section>
    <PhotoGallery data={data} />
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
