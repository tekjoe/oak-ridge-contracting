import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/molecules/Section"
import Masthead from "../../components/molecules/Masthead"
import TextBlock from "../../components/molecules/TextBlock"
import ImageGroup from "../../components/molecules/ImageGroup"
import ImageSnow from "../../components/atoms/ImageSnow"
import ImageSnowSalt from "../../components/atoms/ImageSnowSalt"
import Highlight from "../../components/organisms/Highlight"
import PhotoGallery from "../../components/organisms/PhotoGallery"

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
      <Masthead />
      <Section>
        <TextBlock>
          <h1>Snow Removal & Ice Management</h1>
          <p>
            Oak Ridge Contracting provices reliable, efficient, and safe snow
            services in southeastern Wisconsin. We remain available 24 hours
            hours a day, 7 days a week for snow and ice removal during the
            winter season. We monitor each and every snowfall very closely to
            ensure that our crew is ready to go and is on-site when necessary.
          </p>
          <blockquote>
            We offer complimentary estimates for snow removal and ice
            management.
          </blockquote>
          <p>
            We take pride in keeping all of our accounts clean before, during,
            and after every winter storm.
          </p>
        </TextBlock>
        <ImageGroup>
          <ImageGroup.Image>
            <ImageSnow style={{ height: `100%` }} />
          </ImageGroup.Image>
          <ImageGroup.Image>
            <ImageSnowSalt style={{ height: `100%` }} />
          </ImageGroup.Image>
        </ImageGroup>
        <TextBlock>
          <h2>Our Snow and Ice Services</h2>
          <ul>
            <li>Commercial and residential snow plowing</li>
            <li>Sidewalk snow removal</li>
            <li>Salting of lots and sidewalks</li>
            <li>Sidewalk crew</li>
          </ul>
        </TextBlock>
      </Section>
      <PhotoGallery data={data} />
      <Highlight reverse="true" />
    </Layout>
  )
}
export default ServicePage
