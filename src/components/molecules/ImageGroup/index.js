import styled from "styled-components"

const ImageGroup = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    grid-column: 2/-2;
    flex-direction: row;
  }
`

ImageGroup.Image = styled.div`
  flex: 1;
  overflow: hidden;
  &:first-of-type {
    margin-bottom: 1rem;
  }
  & > div {
    transition: all 0.3s ease-in-out;
  }
  &:hover > div {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    &:first-of-type {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  }
`

export default ImageGroup
