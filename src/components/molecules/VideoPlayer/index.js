import React from "react"
import styled from "styled-components"
import TitleGroup from "../../atoms/TitleGroup"
import ReactPlayer from "react-player"

const VideoPlayer = styled.section`
  margin: 3rem 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (min-width: 768px) {
    margin: 6rem 1rem 4rem 1rem;
  }
  @media (min-width: 1024px) {
    grid-gap: 1rem;
    margin: 8rem 1rem 4rem 1rem;
  }
`

VideoPlayer.Body = styled.div`
  grid-column: 1/-1;
  text-align: center;
  @media (min-width: 1024px) {
  }
`

const PlayerWrapper = styled.div`
  grid-column: 1/-1;
  height: 250px;
  @media (min-width: 768px) {
    grid-column: 3/-3;
    height: 300px;
  }
  @media (min-width: 1024px) {
    height: 350px;
  }
  @media (min-width: 1200px) {
    height: 600px;
  }
`

export default ({ title, subtitle, url }) => {
  return (
    <VideoPlayer>
      <VideoPlayer.Body>
        {title && subtitle ? (
          <TitleGroup>
            <p>{subtitle}</p>
            <h2>{title}</h2>
          </TitleGroup>
        ) : null}
      </VideoPlayer.Body>
      <PlayerWrapper>
        <ReactPlayer url={url} width="100%" height="100%" />
      </PlayerWrapper>
    </VideoPlayer>
  )
}
