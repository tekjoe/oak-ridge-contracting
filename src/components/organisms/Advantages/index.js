import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"

const Advantages = styled.section`
  padding: 3rem 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  background: #f0f0f0;
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`

Advantages.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
`

const Advantage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.25rem;
  h4 {
    font-size: 1.25rem;
  }
  & > * {
    margin-bottom: 1rem;
  }
  &:nth-of-type(2n) {
    margin: 0 1rem;
  }
  @media (min-width: 768px) {
    width: 33%;
    padding: 1rem;
  }
`

const AdvantageGroup = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    grid-column: 4 / span 6;
  }
`

const SVGC = styled.div`
  height: 50px;
  width: 50px;
`

export default () => {
  return (
    <Advantages>
      <Advantages.Body>
        <TitleGroup>
          <h3>Advantages</h3>
          <h2>Our Advantages</h2>
        </TitleGroup>
      </Advantages.Body>
      <AdvantageGroup>
        <Advantage>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3088da"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </SVGC>
          <h4>Experience</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Advantage>
        <Advantage>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3088da"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
            </svg>
          </SVGC>
          <h4>Reliability</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Advantage>
        <Advantage>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3088da"
            >
              <path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          </SVGC>
          <h4>Location</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Advantage>
      </AdvantageGroup>
      <AdvantageGroup>
        <Advantage>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3088da"
            >
              <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </SVGC>
          <h4>Quality Materials</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Advantage>
        <Advantage>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3088da"
            >
              <path d="M5.33 12.77A4 4 0 1 1 3 5.13V5a4 4 0 0 1 5.71-3.62 3.5 3.5 0 0 1 6.26 1.66 2.5 2.5 0 0 1 2 2.08 4 4 0 1 1-2.7 7.49A5.02 5.02 0 0 1 12 14.58V18l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z" />
            </svg>
          </SVGC>
          <h4>Landscape</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Advantage>
        <Advantage>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3088da"
            >
              <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
          </SVGC>
          <h4>Team</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Advantage>
      </AdvantageGroup>
    </Advantages>
  )
}
