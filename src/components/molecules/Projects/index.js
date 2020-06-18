import React from "react"
import styled from "styled-components"
import Image from "../../atoms/Image"
import TitleGroup from "../../atoms/TitleGroup"

const Projects = styled.section`
  margin: 3rem 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (min-width: 768px) {
    margin: 6rem 1rem;
  }
  @media (min-width: 1024px) {
    grid-gap: 1rem;
    margin: 10rem 1rem;
  }
`

Projects.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    margin-bottom: 3rem;
    p {
      width: 45vw;
      margin: auto;
    }
  }
`

Projects.Showcase = styled.div`
  grid-column: 1/-1;
`

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`

CardGrid.Image = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  @media (min-width: 768px) {
    height: 350px;
    &:nth-of-type(even) {
      margin: 0 1rem;
    }
  }
  @media (min-width: 1200px) {
    height: 400px;
  }
`

const CTA = styled.button`
  grid-column: 4 / span 6;
  background: #3088da;
  text-transform: uppercase;
  border: none;
  padding: 1rem;
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-family: "Barlow";
  letter-spacing: 0.05rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    grid-column: 6 / span 2;
    font-size: 1.25rem;
  }
`

export default () => {
  return (
    <Projects>
      <Projects.Body>
        <TitleGroup>
          <h3>Projects</h3>
          <h2>Latest Projects</h2>
        </TitleGroup>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
      </Projects.Body>
      <Projects.Showcase>
        <CardGrid>
          <CardGrid.Image>
            <Image style={{ height: "100%" }} />
          </CardGrid.Image>
          <CardGrid.Image>
            <Image style={{ height: "100%" }} />
          </CardGrid.Image>
          <CardGrid.Image>
            <Image style={{ height: "100%" }} />
          </CardGrid.Image>
        </CardGrid>
      </Projects.Showcase>
      <CTA>More Projects</CTA>
    </Projects>
  )
}
