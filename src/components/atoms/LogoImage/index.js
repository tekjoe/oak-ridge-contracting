import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ style, imgStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "oak_ridge_logo_transparent.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Img
      style={style}
      imgStyle={imgStyle}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Image
