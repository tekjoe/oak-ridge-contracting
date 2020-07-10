import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/Section"
import Masthead from "../components/molecules/Masthead"
import TextBlock from "../components/molecules/TextBlock"
import ImageGroup from "../components/molecules/ImageGroup"
import ImageSnow from "../components/atoms/ImageSnow"
import ImageSnowSalt from "../components/atoms/ImageSnowSalt"
import Highlight from "../components/organisms/Highlight"

const ServicePage = () => (
  <Layout>
    <SEO title="Snow Removal" />
    <Masthead />
    <Section>
      <TextBlock>
        <h3>Snow Removal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          ex suscipit facilis dolorem quibusdam numquam cumque velit? Quidem
          saepe necessitatibus et, aliquid illum consectetur error debitis
          voluptatem in doloremque veniam.
        </p>
        <blockquote>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut culpa
          saepe fugit sed soluta amet earum deserunt fugiat veniam facilis?
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          mollitia?
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
        <h3>Interesting Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          ex suscipit facilis dolorem quibusdam numquam cumque velit? Quidem
          saepe necessitatibus et, aliquid illum consectetur error debitis
          voluptatem in doloremque veniam.
        </p>
        <blockquote>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut culpa
          saepe fugit sed soluta amet earum deserunt fugiat veniam facilis?
        </blockquote>
      </TextBlock>
    </Section>
    <Highlight reverse="true" />
  </Layout>
)

export default ServicePage
