import React from "react"
import styled from "styled-components"

const TitleGroup = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.typography.paragraph};
    font-weight: 400;
    padding-bottom: 0.25rem;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #30da92;
    display: inline-block;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: ${({ theme }) => theme.typography.h2};
      margin-bottom: 2rem;
    }
    h3 {
      font-size: ${({ theme }) => theme.typography.h4};
    }
  }
`

export default ({ children }) => {
  return <TitleGroup>{children}</TitleGroup>
}
