import styled from "styled-components"

const Section = styled.section`
  margin: 3rem 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (min-width: 768px) {
    grid-gap: 0 1rem;
    margin: 6rem 1rem;
  }
`

export default Section
