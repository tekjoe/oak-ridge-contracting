import React from "react"
import styled from "styled-components"
import Image from "../../atoms/Image"

const Masthead = styled.section`
  height: 800px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  position: relative;
`

Masthead.CTA = styled.div`
  background: hsl(230, 21%, 23%);
  z-index: 10;
  padding: 4rem;
  position: absolute;
  width: 50%;
  bottom: -2rem;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-size: 1.25rem;
    font-weight: 400;
    color: white;
    border-bottom: 2px solid #30da92;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 4rem;
    color: white;
  }
`

export default () => {
  return (
    <Masthead>
      <Image style={{ gridColumn: "1/-1", gridRow: "1/-1" }} />
      <Masthead.CTA>
        <h1>Oak Ridge Contracting</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
      </Masthead.CTA>
    </Masthead>
  )
}
