import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/Section"
import Masthead from "../components/molecules/Masthead"
import TextBlock from "../components/molecules/TextBlock"
import ImageGroup from "../components/molecules/ImageGroup"
import Image from "../components/atoms/Image"
import ImageGenCon from "../components/atoms/ImageGenCon"
import Highlight from "../components/organisms/Highlight"
import PhotoGallery from "../components/organisms/PhotoGallery"

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
    <SEO title="General Contracting" />
    <Masthead />
    <Section>
      <TextBlock>
        <h1>General Contracting</h1>
        <p>
          At Oak Ridge Contracting, we pride ourselves on providing outstanding
          customer service to Waukesha County and surrounding areas. We work
          hard hard to keep all of our projects on time and under budget. All of
          our contracting services are customizable to your specific needs.
        </p>
        <blockquote>
          As a local business in Waukesha County, we understand the importance
          of communication and friendliness.
        </blockquote>
        <p>
          We are highly qualified and are dedicated to providing you with
          excellent worksmanship. No job is too big or small – we treat every
          project with the utmost respect. We know how important your home is to
          you, that's why we treat it as if it were our own.
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
          We have the goal to be a one-stop-shop for all of our customers at
          every step of a project. Our team of contractors are experienced in
          the fields of:
        </p>
        <ul>
          <li>Carpentry</li>
          <li>Electrical</li>
          <li>Plumbing</li>
          <li>HVAC</li>
          <li>Design & Architecture</li>
        </ul>
      </TextBlock>
    </Section>
    <PhotoGallery data={data} />
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
