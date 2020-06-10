import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"
import Image from "../../atoms/Image"
import Card from "../../molecules/Card"

const Social = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 10rem 0;
`

Social.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
`

Social.Group = styled.div`
  grid-column: 3 / span 8;
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
    <Social>
      <Social.Body>
        <TitleGroup>
          <h3>Social</h3>
          <h2>Latest Photos & Videos</h2>
        </TitleGroup>
      </Social.Body>
      <Social.Group>
        <Card variant="fourth">
          <Image style={{ height: "100%" }} />
        </Card>
        <Card variant="fourth">
          <Image style={{ height: "100%" }} />
        </Card>
        <Card variant="fourth">
          <Image style={{ height: "100%" }} />
        </Card>
        <Card variant="fourth">
          <Image style={{ height: "100%" }} />
        </Card>
      </Social.Group>
      <CTA>See More</CTA>
    </Social>
  )
}
