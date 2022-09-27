import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/molecules/Section"
import { graphql } from "gatsby"
import TextBlock from "../../components/molecules/TextBlock"
import ImageGroup from "../../components/molecules/ImageGroup"
import Image from "../../components/atoms/Image"
import ImageRenovation from "../../components/atoms/ImageRenovation"
import Highlight from "../../components/organisms/Highlight"
import PhotoGallery from "../../components/organisms/PhotoGallery"

export const query = graphql`
  query ImagesForRenovation {
    images: allFile(
      filter: { relativeDirectory: { eq: "renovations" } }
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
      title="Remodling, Renovations, and Additions in Waukesha County"
      description="Waukesha and Jefferson County's top home renovation and home remodeling services. Basement, Bathroom, or Kitchen - no job is too big or too small."
    />
    <Section>
      <TextBlock>
        <h1>Home Renovations</h1>
        <p>
          Starting a home renovation is an exciting endeavor, but it can also be
          a stressful time. Oak Ridge Contracting's team of skilled
          professionals guides you through the entire process. From a bathroom
          remodel to a complete dream home renovation, Oak Ridge Contracting
          will be there every step of the way!
        </p>
        <p>
          We know you've been thinking about your remodel for a long time and
          are ready to get started. No matter the size of your project, we take
          pride in our craftsmanship, precision, and attention to detail. Our in
          person or over-the- phone consultations ensure that our projects get
          started without a hitch.
        </p>
        <h2>Love Where You Live</h2>
        <p>
          Whether your project is a bathroom renovation, a kitchen remodel, or
          an addition, a well-planned renovation can revitalize the place that
          you've learned to call home!
        </p>
        <blockquote>
          We use the best materials, and we work closely with you to ensure that
          your project is done with the highest quality and cost effectiveness
          in mind.
        </blockquote>
        <p>
          We work hard to preserve the parts of your home that you love, while
          enhancing the parts you don't. Our unique designs are focused on your
          individual needs and desires.
        </p>
        <ul>
          <li>Kitchen Renovations</li>
          <li>Bathroom Renovations</li>
          <li>Basement Renovations</li>
          <li>Additions</li>
          <li>Mudrooms</li>
          <li>Detached Garages</li>
          <li>Boat Houses</li>
          <li>Sheds</li>
        </ul>
      </TextBlock>
    </Section>
    <PhotoGallery data={data} />
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
