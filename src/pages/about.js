import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlight from "../components/organisms/Highlight"
import Section from "../components/molecules/Section"
import ImageGroup from "../components/molecules/ImageGroup"
import TitleGroup from "../components/atoms/TitleGroup"
import TextBlock from "../components/molecules/TextBlock"
import Image from "../components/atoms/Image"
import ImageTeam from "../components/atoms/ImageTeam"
import ImageNick from "../components/atoms/ImageNick"

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
          <p>About</p>
          <h2>Oak Ridge Contracting</h2>
        </TitleGroup>
        <p>
          When it comes to residential and commercial remodeling in Southeastern
          Wisconsin, Oak Ridge Contracting is the name to know. In 2015, we
          began with a vision of a construction and snow removal company that
          would provide outstanding, professional services to residential and
          commercial properties. We believe in treating all our customers like
          family and being honest with our customers at every stage of a
          project. We are dedicated to customer service and satisfaction, so
          we're not happy until you are.
        </p>
      </AboutSection.Body>
      <AboutSection.FullwidthImage>
        <Image style={{ width: "100%", height: "100%" }} />
      </AboutSection.FullwidthImage>
      <TextBlock>
        <h2>Our Commitment</h2>
        <p>
          The decision to add on, restore, or remodel your home or other
          building is no small task. We truly believe that our attention to
          detail and passion for craftsmanship sets us apart from our
          competitors. Our commitment to the most professional standards means
          that we stand behind everything we do from start to finish.
        </p>
        <h2>Fully Licensed</h2>
        <p>
          Oak Ridge Contracting is a licensed dwelling contractor, lead safe
          certified contractor and fully insured. Having all the right licenses
          and permits helps ensure that all the proper steps are taken for our
          customers project to run efficiently.
        </p>
      </TextBlock>
      <ImageGroup>
        <ImageGroup.Image>
          <ImageNick style={{ height: "100%" }} />
        </ImageGroup.Image>
        <ImageGroup.Image>
          <ImageTeam style={{ height: "100%" }} />
        </ImageGroup.Image>
      </ImageGroup>
      <TextBlock>
        <h2>Our Work</h2>
        <p>
          We're a team of trustworthy, hardworking, and friendly people who
          never compromise. We work hard to ensure that every project goes above
          and beyond your expectations. We are always learning, growing, and
          keeping up with the trends.
        </p>
      </TextBlock>
    </AboutSection>
    <Highlight reverse={true} />
  </Layout>
)

export default AboutPage
