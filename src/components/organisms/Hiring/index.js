import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"
import ButtonLink from "../../atoms/ButtonLink"

const Hiring = styled.section`
  padding: 3rem 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  background: hsl(230, 21%, 23%);
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`

Hiring.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
  color: white;
  p {
    color: white;
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    p {
      width: 45vw;
      margin: 0 auto 2rem auto; 
    }
  }
`



const SVGC = styled.div`
  height: 50px;
  width: 50px;
`

export default () => {
  return (
    <Hiring>
      <Hiring.Body>
        <TitleGroup>
          <h3>We're Hiring</h3>
          <h2>Job Opportunities</h2>
        </TitleGroup>
        <p>Do you have experience working with painters, carpenters, drywallers, etc.? Are you a motivated, highly trainable person? We're looking for someone just like you! For more information about open positions click on the button below.</p>
        <ButtonLink variant="inverse" href="mailto:info@oakridgecontracting.com?subject=Oak Ridge Job Opportunities&body=Hi there! I'd like to know more about the job opportunities at Oak Ridge Contracting.">Get in touch</ButtonLink>
      </Hiring.Body>
    </Hiring>
  )
}
