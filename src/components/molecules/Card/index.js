import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background: hsl(230, 21%, 23%);
  flex: 1;
  height: ${({ variant }) => (variant === "fourth" ? "524px" : "auto")};
  &:nth-of-type(even) {
    margin: 0 1rem;
  }
`

export default ({ children, variant }) => {
  return <Card variant={variant}>{children}</Card>
}
