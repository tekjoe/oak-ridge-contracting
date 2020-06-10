import React from "react"
import styled from "styled-components"
import Card from "../Card"
import Image from "../../atoms/Image"
import TitleGroup from "../../atoms/TitleGroup"

const Projects = styled.section`
  margin: 10rem 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
`

Projects.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
  margin-bottom: 5rem;
`

Projects.Showcase = styled.div`
  grid-column: 1/-1;
`

const CardGrid = styled.div`
  display: flex;
`

const CTA = styled.button`
  grid-column: 6 / span 2;
  background: #3088da;
  text-transform: uppercase;
  border: none;
  padding: 1rem;
  font-size: 1.25rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-family: "Barlow";
  letter-spacing: 0.05rem;
  margin-top: 3rem;
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
          <Card>
            <Image />
          </Card>
          <Card>
            <Image />
          </Card>
          <Card>
            <Image />
          </Card>
        </CardGrid>
      </Projects.Showcase>
      <CTA>More Projects</CTA>
    </Projects>
  )
}
