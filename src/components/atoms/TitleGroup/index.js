import React from "react"
import styled from "styled-components"

const TitleGroup = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 400;
    padding-bottom: 0.25rem;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #30da92;
    display: inline-block;
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`

export default ({ children }) => {
  return <TitleGroup>{children}</TitleGroup>
}
