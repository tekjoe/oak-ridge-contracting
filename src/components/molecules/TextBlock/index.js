import styled from "styled-components"

const TextBlock = styled.div`
  grid-column: 1/-1;
  margin-top: 4rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 1.25rem;
  }
  blockquote {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
    display: block;
    line-height: 150%;
    padding-left: 1rem;
    border-left: 3px solid #3088da;
  }
  @media (min-width: 768px) {
    margin-top: 6rem;
    grid-column: 4/-4;
    margin: 6rem 0 6rem 0;
    h3 {
      font-size: 3rem;
      margin-bottom: 1.25rem;
    }
  }
`

export default TextBlock
