import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"
import Button from "../../atoms/Button"
import Image from "../../atoms/Image"
import { Link } from "gatsby"

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
  padding: 3rem;
  background: hsl(230, 21%, 23%);

  grid-row: ${({ reverse }) => (reverse ? "1" : "auto")};
  p {
    color: white;
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    height: calc(100% - 2rem);
    grid-column: ${({ reverse }) => (reverse ? " span 6" : "7 / span 6")};
    padding: 6rem;
  }
`

Highlight.Body.Content = styled.div`
  @media (min-width: 1200px) {
    max-width: 600px;
  }
`

Highlight.Image = styled.div`
  grid-column: 1/-1;
  max-height: 600px;
  @media (min-width: 1024px) {
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
        <Highlight.Body.Content>
          <TitleGroup>
            <p>{reverse ? `Let's Get Started` : `Our Promise`}</p>
            <h2>
              {reverse ? `Get in Touch` : `We're not happy until you are`}
            </h2>
          </TitleGroup>
          <p>
            {reverse
              ? `We pride ourselves on building relationships with our customers. No matter the size or budget of your project, we always deliver outstanding customer service.`
              : `No matter what the time of day, our lines are always open. We're
            here to answer all of your questions and make your dreams a reality.`}
          </p>
          <Button variant="inverse" as={Link} to="/contact">
            Contact Us
          </Button>
        </Highlight.Body.Content>
      </Highlight.Body>
    </Highlight>
  )
}
