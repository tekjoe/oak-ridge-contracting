import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "../../atoms/Image"

const Masthead = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  @media (min-width: 768px) {
    grid-template-rows: repeat(12, 1fr);
    height: 650px;
  }
  @media (min-width: 1024) {
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

Masthead.CTA = styled(motion.div)`
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
    margin-bottom: 1rem;
  }
  p {
    color: #b5b7c3;
  }
  @media (min-width: 768px) {
    grid-column: 3/-1;
    grid-row-start: 12;
    bottom: -2rem;
    padding: 3rem;
  }
  @media (min-width: 1024px) {
    grid-column: 6 / -1;
    grid-row: -1 / -8;
    h1 {
      font-size: 1.25rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
`

Masthead.CTA.Body = styled(motion.div)`
  max-width: 700px;
  opacity: 0;
`

export default () => {
  return (
    <Masthead>
      <Masthead.Image>
        <Image style={{ height: "100%" }} />
      </Masthead.Image>
      <Masthead.CTA>
        <Masthead.CTA.Body
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <h1>Oak Ridge Contracting</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            reprehenderit culpa aliquam facilis velit molestiae eveniet porro
            est dolores sint nostrum ab quidem, rerum.
          </p>
        </Masthead.CTA.Body>
      </Masthead.CTA>
    </Masthead>
  )
}
