import styled from "styled-components"

const TextBlock = styled.div`
  grid-column: 1/-1;
  margin-top: 4rem;
  h1,
  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 1.25rem;
  }
  ul {
    list-style-position: inside;
    margin-bottom: 2rem;
    li {
      line-height: 150%;
      color: ${({ theme }) => theme.darkGray};
    }
  }
  blockquote {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
    display: block;
    line-height: 150%;
    padding-left: 1rem;
    border-left: 3px solid #3088da;
  }
  &:first-of-type {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    margin-top: 6rem;
    grid-column: 2/-2;
    margin: 6rem 0 6rem 0;
    h1,
    h2 {
      font-size: 3rem;
      margin-bottom: 1.25rem;
    }
    ul {
      li {
        font-size: 1.125rem;
      }
    }
  }
  @media (min-width: 1200px) {
    grid-column: 4/-4;
  }
`

export default TextBlock
