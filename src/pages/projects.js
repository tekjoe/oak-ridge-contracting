import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/Section"
import TitleGroup from "../components/atoms/TitleGroup"
import Image from "../components/atoms/Image"

const ProjectsIntro = styled(Section)``
const ProjectsGrid = styled(Section)`
  grid-gap: 1rem !important;
`

const PartnersSection = styled(Section)``

ProjectsIntro.Content = styled.div`
  grid-column: 1/-1;
  text-align: center;
  @media (min-width: 768px) {
    grid-column: 4 / span 6;
  }
`

ProjectsGrid.Image = styled.div`
  grid-column: 1/-1;
  @media (min-width: 768px) {
    grid-column: span 6;
  }
`

PartnersSection.Content = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    grid-column: 3/-3;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

PartnersSection.Body = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

PartnersSection.Grid = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`

const Partner = styled.div`
  background: black;
  grid-column: span 2;
  height: 10rem;
  @media (min-width: 768px) {
    grid-column: span 1;
    height: auto;
  }
`

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectsIntro>
      <ProjectsIntro.Content>
        <TitleGroup>
          <h3>Portfolio</h3>
          <h2>Our Past Projects</h2>
        </TitleGroup>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
      </ProjectsIntro.Content>
    </ProjectsIntro>
    <ProjectsGrid>
      <ProjectsGrid.Image>
        <Image />
      </ProjectsGrid.Image>
      <ProjectsGrid.Image>
        <Image />
      </ProjectsGrid.Image>
      <ProjectsGrid.Image>
        <Image />
      </ProjectsGrid.Image>
      <ProjectsGrid.Image>
        <Image />
      </ProjectsGrid.Image>
    </ProjectsGrid>
    <PartnersSection>
      <PartnersSection.Content>
        <PartnersSection.Body>
          <TitleGroup>
            <h3>Partners</h3>
            <h2>We work closely with our partners</h2>
          </TitleGroup>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tellus pellentesque vel a consectetur nullam amet gravida nibh.
          </p>
        </PartnersSection.Body>
        <PartnersSection.Grid>
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
        </PartnersSection.Grid>
      </PartnersSection.Content>
    </PartnersSection>
  </Layout>
)

export default ProjectsPage
