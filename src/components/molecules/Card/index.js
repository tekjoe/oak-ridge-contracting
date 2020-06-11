import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background: hsl(230, 21%, 23%);
  flex: 1;
  height: ${({ variant }) => (variant === "fourth" ? "524px" : "auto")};
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    &:nth-of-type(even) {
      margin: 0 1rem;
    }
  }
`

export default ({ children, variant }) => {
  return <Card variant={variant}>{children}</Card>
}
