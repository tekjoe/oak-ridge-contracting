import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"
import Image from "../../atoms/Image"

const Highlight = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

Highlight.Body = styled.div`
  grid-column: ${({ reverse }) => (reverse ? " span 6" : "7 / span 6")};
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0 6rem;
  justify-content: center;
  background: hsl(230, 21%, 23%);
  height: calc(100% - 2rem);
  grid-row: ${({ reverse }) => (reverse ? "1" : "auto")};
  p {
    color: white;
    padding-right: 8rem;
  }
`

export default ({ reverse }) => {
  return (
    <Highlight>
      <Image
        style={
          reverse ? { gridColumn: "7 / span 6" } : { gridColumn: "span 6" }
        }
      />
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
      </Highlight.Body>
    </Highlight>
  )
}
