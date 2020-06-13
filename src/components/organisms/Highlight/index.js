import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"
import Button from "../../atoms/Button"
import Image from "../../atoms/Image"

const Highlight = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

Highlight.Body = styled.div`
  grid-column: 1/-1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 2rem;
  background: hsl(230, 21%, 23%);
  grid-row: ${({ reverse }) => (reverse ? "1" : "auto")};
  p {
    color: white;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    height: calc(100% - 2rem);
    grid-column: ${({ reverse }) => (reverse ? " span 6" : "7 / span 6")};
    padding: 6rem;
    p {
      padding-right: 8rem;
    }
  }
`

Highlight.Image = styled.div`
  grid-column: 1/-1;
  @media (min-width: 768px) {
    grid-column: ${({ reverse }) => (reverse ? "7 / span 6" : "span 6")};
  }
`

export default ({ reverse }) => {
  return (
    <Highlight>
      <Highlight.Image>
        <Image style={{ height: "100%" }} />
      </Highlight.Image>
      <Highlight.Body reverse={reverse}>
        <TitleGroup>
          <h3>Another Title</h3>
          <h2>Lorem Ipsum</h2>
        </TitleGroup>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nullam
          rhoncus eu eget vitae in vitae. Et fermentum pharetra, cras
          condimentum quis.
        </p>
        <Button variant="inverse">Contact Us</Button>
      </Highlight.Body>
    </Highlight>
  )
}
