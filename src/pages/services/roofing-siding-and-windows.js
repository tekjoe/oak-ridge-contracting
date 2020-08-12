import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/molecules/Section"
import Masthead from "../../components/molecules/Masthead"
import TextBlock from "../../components/molecules/TextBlock"
import ImageGroup from "../../components/molecules/ImageGroup"
import ImageSiding from "../../components/atoms/ImageSiding"
import ImageRoofing from "../../components/atoms/ImageRoofing"
import Highlight from "../../components/organisms/Highlight"
import PhotoGallery from "../../components/organisms/PhotoGallery"

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
    <SEO title="Waukesha and Jefferson County Roofing and Siding Contractor" />
    <Masthead />
    <Section>
      <TextBlock>
        <h1>Roofing, Siding, and Windows</h1>
        <p>
          Oak Ridge Contracting's team of professional contractors in Waukesha
          and Jefferson County aim to transform your vision into a reality. We
          work with each and every homeowner or business owner to increase the
          quality and value of their property.
        </p>
        <blockquote>
          No matter what your budget or deadline is, we will satisfy your needs.
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
          <ImageRoofing style={{ height: "100%" }} />
        </ImageGroup.Image>
        <ImageGroup.Image>
          <ImageSiding style={{ height: "100%" }} />
        </ImageGroup.Image>
      </ImageGroup>
      <TextBlock>
        <h2>Roofing Replacment & Installation</h2>
        <p>
          Our team of professional roofing contractors in Waukesha and Jefferson
          County are experienced at roof repair, roof replacement, and new roof
          construction. Our goal is to provide you with the best roofing
          products given your budget. We are dedicated to providing you with a
          roof that protects your property throughout the entire year. We offer:
        </p>
        <ul>
          <li>Roof Repair</li>
          <li>Roof Replacement</li>
          <li>New Roof Construction</li>
        </ul>
        <h2>Siding Replacment & Installation</h2>
        <p>
          Our team of siding professionals offers everything from siding repair
          to replacement in Waukesha and Jefferson County. We offer high quality
          products and materials that add value and efficiency to your home or
          business.
        </p>
        <p>
          As one of the area's top siding contractors, we offer a wide range of
          products and provide each and every customer with the information they
          need to make the correct choice that will fit their budget. We offer:
        </p>
        <ul>
          <li>Siding Installation</li>
          <li>Siding Repair</li>
          <li>Siding Replacement</li>
          <li>Vinyl Siding</li>
          <li>LP SmartSide</li>
          <li>Cedar Siding</li>
        </ul>
        <h2>Widow Replacment & Installation</h2>
        <p>
          We have years of experience helping homeowners in Waukesha and
          Jefferson counties enjoy new windows that are easy to clean and
          maintain. New windows not only provide better energy efficiency, but
          they can also improve the safety and security of your home.
        </p>
      </TextBlock>
    </Section>
    <PhotoGallery data={data} />
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
