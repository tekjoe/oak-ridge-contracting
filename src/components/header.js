import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

const Logo = styled.div`
  margin-right: 2rem;
`

Logo.Link = styled(Link)`
  font-size: 1rem;
  color: black;
  font-weight: 700;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const Nav = styled.nav`
  display: none;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      font-size: 0.8rem;
      margin-right: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      font-weight: 500;
      &:hover {
        color: #3088da;
      }
    }
  }
  @media (min-width: 768px) {
    display: block;
  }
`

Nav.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #3088da;
  }
`

const CTA = styled.div`
  margin-left: auto;
  display: none;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
  }
`

CTA.Phone = styled.h3`
  margin-right: 2rem;
  font-size: 1.5rem;
`

CTA.Button = styled(Link)`
  text-transform: uppercase;
  background: #3088da;
  font-size: 1rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 2px;
`

export default ({ siteTitle }) => (
  <Header>
    <Logo>
      <Logo.Link to="/">{siteTitle}</Logo.Link>
    </Logo>
    <Nav>
      <ul>
        <li>
          <Nav.Link to="/">Home</Nav.Link>
        </li>
        <li>Services</li>
        <li>
          <Nav.Link to="about">About</Nav.Link>
        </li>
        <li>Contact</li>
      </ul>
    </Nav>
    <CTA>
      <CTA.Phone>+1-262-555-5555</CTA.Phone>
      <CTA.Button to="/">Contact Us</CTA.Button>
    </CTA>
  </Header>
)
