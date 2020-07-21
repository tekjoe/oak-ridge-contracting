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
          <h3>About</h3>
          <h2>Oak Ridge Contracting</h2>
        </TitleGroup>
        <p>
          When it comes to residential and commercial remodeling in southeastern
          Wisconsin, Oakridge Contracting is the name to know. Since 2015, we've
          provided outstanding, fully licensed building and construction
          remodeling services. We also specialize in residential and commercial
          snow removal so you can feel safe before, during, and after any winter
          storm.
        </p>
      </AboutSection.Body>
      <AboutSection.FullwidthImage>
        <Image style={{ width: "100%", height: "100%" }} />
      </AboutSection.FullwidthImage>
      <TextBlock>
        <h1>Our company's history</h1>
        <p>
          In 2015, we began with a vision of a construction company that treated
          all of its customers like family. We believe in being honest with our
          customers at every stage of a project.
        </p>
        <blockquote>
          If our customers ever have questions, we urge them to let us know! We
          keep all lines of communication open during our projects.
        </blockquote>
        <p>
          Oakridge Contracting delivers professional services to residential and
          commercial properties at reasonable and affordable prices. We're
          dedicated to customer service and satisfaction, so we're not happy
          until you are.
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
        <h2>Our Commitment</h2>
        <p>
          The decision to add on, restore, or remodel your home or other
          building is no small task. We truly believe that our attention to
          detail and passion for craftsmanship set us apart from our
          competitors. Our commitment to the most professional standards means
          that we stand behind everything we do from start to finish.
        </p>
        <h3>Fully Licensed</h3>
        <p>
          Having all the right licenses and permits ensures that a project can
          go smoothly. We are proud to be a licensed dwelling contractor, US DOT
          certified business, and lead safe certified contractor.
        </p>
      </TextBlock>
    </AboutSection>
    {/* <StatsGrid>
      <StatsGrid.Stat>
        <h4>5</h4>
        <p>years serving southeastern Wisconsin</p>
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
    </StatsGrid> */}
    <Highlight reverse={true} />
  </Layout>
)

export default AboutPage
