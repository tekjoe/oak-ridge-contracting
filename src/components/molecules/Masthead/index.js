import React from "react"
import styled from "styled-components"
import Image from "../../atoms/Image"

const Masthead = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  @media (min-width: 768px) {
    grid-template-rows: repeat(12, 1fr);
    height: 800px;
  }
`

Masthead.Image = styled.div`
  grid-column: 1/-1;
  @media (min-width: 768px) {
    grid-column: 1/-1;
    grid-row: 1/-1;
  }
`

Masthead.CTA = styled.div`
  background: hsl(230, 21%, 23%);
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-column: 1/-1;
  h1 {
    font-size: 1rem;
    font-weight: 400;
    color: white;
    border-bottom: 2px solid #30da92;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    color: white;
  }
  @media (min-width: 768px) {
    padding: 4rem;
    position: absolute;
    width: 50%;
    bottom: -2rem;
    right: 0;
    z-index: 10;
    h1 {
      font-size: 1.25rem;
    }
    h2 {
      font-size: 4rem;
    }
  }
`

export default () => {
  return (
    <Masthead>
      <Masthead.Image>
        <Image style={{ height: "100%" }} />
      </Masthead.Image>
      <Masthead.CTA>
        <h1>Oak Ridge Contracting</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
      </Masthead.CTA>
    </Masthead>
  )
}
