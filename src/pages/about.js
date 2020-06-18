import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlight from "../components/organisms/Highlight"
import Section from "../components/molecules/Section"
import ImageGroup from "../components/molecules/ImageGroup"
import TitleGroup from "../components/atoms/TitleGroup"
import Image from "../components/atoms/Image"

const AboutSection = styled(Section)``

AboutSection.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
    p {
      width: 60vw;
      margin: auto;
    }
  }
`

AboutSection.FullwidthImage = styled.div`
  grid-column: 1/-1;
  height: 300px;
  @media (min-width: 768px) {
    height: 450px;
  }
`

const TextBlock = styled.div`
  grid-column: 1/-1;
  margin-top: 4rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 1.25rem;
  }
  blockquote {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
    display: block;
    line-height: 150%;
    padding-left: 1rem;
    border-left: 3px solid #3088da;
  }
  @media (min-width: 768px) {
    margin-top: 6rem;
    grid-column: 4/-4;
    margin: 6rem 0 6rem 0;
    h3 {
      font-size: 3rem;
      margin-bottom: 1.25rem;
    }
  }
`

const StatsGrid = styled.section`
  display: grid;
  grid-gap: 1rem;
  background: #f0f0f0;
  padding: 2rem 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 1200px) {
    grid-template-columns: repeat(12, 1fr);
    padding: 4rem 0;
  }
`

StatsGrid.Stat = styled.div`
  grid-column: span 1;
  padding: 1rem;
  h4 {
    font-size: 2.5rem;
    color: #3088da;
    margin-bottom: 0.5rem;
  }
  p {
    font-weight: 500;
    line-height: 140%;
  }
  @media (min-width: 1200px) {
    grid-column: span 2;
    padding: 1rem 1rem 1rem 2rem;
    border-left: 3px solid #e5e5e5;
    h4 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.125rem;
    }
    &:first-of-type {
      grid-column: 3 / span 2;
    }
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <AboutSection>
      <AboutSection.Body>
        <TitleGroup>
          <h3>About</h3>
          <h2>Oak Ridge Contracting</h2>
        </TitleGroup>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
      </AboutSection.Body>
      <AboutSection.FullwidthImage>
        <Image style={{ width: "100%", height: "100%" }} />
      </AboutSection.FullwidthImage>
      <TextBlock>
        <h3>Our company's history</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
      </TextBlock>
      <ImageGroup>
        <ImageGroup.Image>
          <Image />
        </ImageGroup.Image>
        <ImageGroup.Image>
          <Image />
        </ImageGroup.Image>
      </ImageGroup>
      <TextBlock>
        <h3>Building the future</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
      </TextBlock>
    </AboutSection>
    <StatsGrid>
      <StatsGrid.Stat>
        <h4>5</h4>
        <p>years in the construction and real estate market</p>
      </StatsGrid.Stat>
      <StatsGrid.Stat>
        <h4>240+</h4>
        <p>something something something something</p>
      </StatsGrid.Stat>
      <StatsGrid.Stat>
        <h4>35</h4>
        <p>happy customers who something something</p>
      </StatsGrid.Stat>
      <StatsGrid.Stat>
        <h4>16</h4>
        <p>something something something something</p>
      </StatsGrid.Stat>
    </StatsGrid>
    <Highlight reverse={true} />
  </Layout>
)

export default AboutPage
