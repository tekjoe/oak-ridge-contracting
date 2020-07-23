import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/Section"
import Masthead from "../components/molecules/Masthead"
import TextBlock from "../components/molecules/TextBlock"
import ImageGroup from "../components/molecules/ImageGroup"
import Image from "../components/atoms/Image"
import ImageRenovation from "../components/atoms/ImageRenovation"
import Highlight from "../components/organisms/Highlight"
import PhotoGallery from "../components/organisms/PhotoGallery"

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
    <SEO title="Home Renovations" />
    <Masthead />
    <Section>
      <TextBlock>
        <h1>Home Renovations</h1>
        <p>
          Starting a home renovation is an exciting endeavor, but it can also be
          a stressful time. From a bathroom remodel to a complete dream home
          renovation, Oak Ridge Contracting's team of skilled professionals
          guides you through the entire process.
        </p>
        <blockquote>
          We know you've been thinking about your remodel for a long time and
          are ready to get started.
        </blockquote>
        <p>
          No matter the size of your project, we take pride in our
          craftsmanship, precision, and attention to detail. Our in person or
          over-the-phone consultations ensure that our projects get started
          without a hitch.
        </p>
      </TextBlock>
      <ImageGroup>
        <ImageGroup.Image>
          <ImageRenovation style={{ height: "100%" }} />
        </ImageGroup.Image>
        <ImageGroup.Image>
          <Image style={{ height: "100%" }} />
        </ImageGroup.Image>
      </ImageGroup>
      <TextBlock>
        <h2>Love Where You Live</h2>
        <p>
          Whether your project requires a bathroom renovation, a kitchen
          remodel, or an entire new home addition, a well planned renovation can
          revitalize the place that you've learned to call home.
        </p>
        <blockquote>
          We use the best materials and we work closely with you to ensure that
          your project is done with the highest quality and cost effectiveness
          in mind.
        </blockquote>
        <p>
          We work hard to preserve the parts of your home that you love, while
          enhancing the parts you don't. Our unique designs are focused on your
          individual needs and desires.
        </p>
      </TextBlock>
    </Section>
    <PhotoGallery data={data} />
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
