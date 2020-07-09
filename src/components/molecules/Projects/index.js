import React from "react"
import styled from "styled-components"
import Image from "../../atoms/Image"
import ImageOverlay from "../../atoms/ImageOverlay"
import { Link } from "gatsby"

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
  position: relative;
  overflow: hidden;
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

const CTA = styled(Link)`
  grid-column: 4 / span 6;
  background: #3088da;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
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
          We're a team of trustworthy, hardworking, and friendly people who
          never compromise. We work hard to ensure that every project goes above
          and beyond your expectations.
        </p>
      </Projects.Body>
      <Projects.Showcase>
        <CardGrid>
          <CardGrid.Image>
            <ImageOverlay>
              <h5>Home Renovation</h5>
              <p>Waukesha</p>
            </ImageOverlay>
            <Image style={{ height: "100%" }} />
          </CardGrid.Image>
          <CardGrid.Image>
            <ImageOverlay>
              <h5>General Contracting</h5>
              <p>Palmyra</p>
            </ImageOverlay>
            <Image style={{ height: "100%" }} />
          </CardGrid.Image>
          <CardGrid.Image>
            <ImageOverlay>
              <h5>Snow Removal</h5>
              <p>Brookfield</p>
            </ImageOverlay>
            <Image style={{ height: "100%" }} />
          </CardGrid.Image>
        </CardGrid>
      </Projects.Showcase>
      <CTA to="/projects">More Projects</CTA>
    </Projects>
  )
}
