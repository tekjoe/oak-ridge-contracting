import styled from "styled-components"

const ImageOverlay = styled.div`
  background: linear-gradient(
    0deg,
    rgba(46, 50, 71, 0.65) 5%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: white;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  flex-direction: column;
  p {
    color: white;
  }
  & + div {
    transition: all 0.3s ease-in-out;
  }
  &:hover + div {
    transform: scale(1.1);
  }
`

export default ImageOverlay
