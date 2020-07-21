import React from "react"
import styled from "styled-components"

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: ${({ full }) => (full ? "100%" : "0%")};
  label {
    color: #34323d;
  }
`

export default ({ children, full }) => {
  return <InputGroup full={full}>{children}</InputGroup>
}
