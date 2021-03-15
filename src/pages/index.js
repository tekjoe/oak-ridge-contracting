import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/molecules/Masthead"
import Projects from "../components/organisms/Projects"
import Advantages from "../components/organisms/Advantages"
import Highlight from "../components/organisms/Highlight"
import Social from "../components/organisms/Social"
import VideoPlayer from "../components/molecules/VideoPlayer"

// export const query = graphql`
//   {
//     allInstagramContent {
//       edges {
//         node {
//           id
//           permalink
//           localImage {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid_tracedSVG
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
export const query = graphql`
  {
    allInstaNode(limit: 4) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Waukesha County and Jefferson County's top home renovation and home remodeling contractor."
        description="Oak Ridge Contracting is the top home renovation and home remodeling contractor in Waukesha County and Jefferson County. We make your vision a reality."
      />
      <Masthead />
      <VideoPlayer />
      <Projects />
      <Advantages />
      <Highlight reverse={false} />
      <Social instagramPosts={data.allInstaNode.edges} />
      <Highlight reverse={true} />
    </Layout>
  )
}

export default IndexPage
