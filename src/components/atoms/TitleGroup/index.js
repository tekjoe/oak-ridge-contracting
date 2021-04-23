import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const TitleGroup = styled(motion.div)`
  opacity: 0;
  p {
    font-size: ${({ theme }) => theme.typography.paragraph};
    font-family: "Barlow";
    font-weight: 400;
    padding-bottom: 0.25rem;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #30da92;
    display: inline-block;
    line-height: 1.06;
    width: max-content !important;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: ${({ theme }) => theme.typography.h2};
      margin-bottom: 2rem;
    }
    p {
      font-size: ${({ theme }) => theme.typography.h4};
    }
  }
`

export default ({ children }) => {
  return (
    <TitleGroup initial={{ y: 50 }} animate={{ y: 0, opacity: 1 }}>
      {children}
    </TitleGroup>
  )
}
