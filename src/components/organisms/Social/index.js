import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"
import Image from "../../atoms/Image"

const Social = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 3rem 1rem;
  @media (min-width: 768px) {
    margin: 6rem 1rem;
  }
`

Social.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
`

Social.Group = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    grid-column: 2 / span 10;
  }
  @media (min-width: 1920px) {
    grid-column: 3 / span 8;
  }
`

Social.Image = styled.div`
  margin-bottom: 1rem;
  flex: 1;
  @media (min-width: 768px) {
    height: 350px;
    margin: 0.5rem;
  }
  @media (min-width: 1200px) {
    height: 400px;
  }
`

const CTA = styled.a`
  grid-column: 4 / span 6;
  text-align: center;
  display: block;
  background: #3088da;
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
    grid-column: 5 / span 4;
    font-size: 1.25rem;
  }
  @media (min-width: 1024px) {
    grid-column: 6 / span 2;
    font-size: 1.25rem;
  }
`

export default () => {
  return (
    <Social>
      <Social.Body>
        <TitleGroup>
          <h3>Social</h3>
          <h2>Latest Photos & Videos</h2>
        </TitleGroup>
      </Social.Body>
      <Social.Group>
        <Social.Image>
          <Image style={{ height: "100%" }} />
        </Social.Image>
        <Social.Image>
          <Image style={{ height: "100%" }} />
        </Social.Image>
        <Social.Image>
          <Image style={{ height: "100%" }} />
        </Social.Image>
        <Social.Image>
          <Image style={{ height: "100%" }} />
        </Social.Image>
      </Social.Group>
      <CTA
        href="https://www.instagram.com/oakridge_contracting/"
        target="_blank"
      >
        See More
      </CTA>
    </Social>
  )
}
