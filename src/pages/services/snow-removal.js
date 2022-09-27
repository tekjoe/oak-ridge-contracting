import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/molecules/Section"
import TextBlock from "../../components/molecules/TextBlock"
import ImageGroup from "../../components/molecules/ImageGroup"
import ImageSnow from "../../components/atoms/ImageSnow"
import ImageSnowSalt from "../../components/atoms/ImageSnowSalt"
import Highlight from "../../components/organisms/Highlight"
import PhotoGallery from "../../components/organisms/PhotoGallery"
import VideoPlayer from "../../components/molecules/VideoPlayer"

export const query = graphql`
  query ImagesForSnowRemoval {
    images: allFile(
      filter: { relativeDirectory: { eq: "snow" } }
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

const ServicePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Snow Removal" />
      <Section style={{ marginBottom: 0 }}>
        <TextBlock style={{ marginBottom: 0 }}>
          <h1>Snow Removal and Ice Management</h1>
          <p>
            Oak Ridge Contracting provides reliable, efficient, and safe snow
            services in southeastern Wisconsin. We remain available 24 hours a
            day, 7 days a week for snow removal and ice management during the
            winter season. We monitor each snow event very closely to ensure
            that our crew is ready to go and is on-site when necessary. We take
            pride in keeping all our accounts clean before, during, and after
            every winter storm.
          </p>
        </TextBlock>
      </Section>
      <VideoPlayer url="https://www.youtube.com/watch?v=rI5oJkUeVl8" />
      <Section>
        <TextBlock>
          <h2>Snow Plowing and Salting Services</h2>
          <ul>
            <li>Commercial and residential snow plowing</li>
            <li>Commercial and residential salting</li>
            <li>Sidewalk snow removal and salting</li>
          </ul>
        </TextBlock>
      </Section>
      <PhotoGallery data={data} />
      <Highlight reverse="true" />
    </Layout>
  )
}
export default ServicePage
