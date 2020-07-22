import React from "react"
import styled from "styled-components"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import Section from "../../molecules/Section"

const GallerySection = styled(Section)`
  @media (min-width: 768px) {
    margin-top: -6rem !important;
  }
`

GallerySection.PhotoGallery = styled.div`
  grid-column: 1/-1;
  @media (min-width: 768px) {
    grid-column: 2/-2;
  }
  @media (min-width: 1920px) {
    grid-column: 3/-3;
  }
`

export default ({ data }) => {
  const images = data.images.edges.map(({ node }) => node.childImageSharp)
  return (
    <GallerySection>
      <GallerySection.PhotoGallery>
        <Gallery images={images} />
      </GallerySection.PhotoGallery>
    </GallerySection>
  )
}
