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

const ServicePage = () => (
  <Layout>
    <SEO title="Home Renovations" />
    <Masthead />
    <Section>
      <TextBlock>
        <h3>Home Renovations</h3>
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
          <ImageRenovation style={{ height: "100%" }} />
        </ImageGroup.Image>
        <ImageGroup.Image>
          <Image />
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
