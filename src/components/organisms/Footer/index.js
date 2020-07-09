import React from "react"
import styled from "styled-components"
import Input from "../../atoms/Input"
import Button from "../../atoms/Button"
import { Link } from "gatsby"

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background: hsl(230, 23%, 16%);
  padding: 4rem 2rem;
  color: white;
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
  @media (min-width: 1024px) {
    margin-top: -2rem;
  }
`

const QuickLinks = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 3rem;
  h4 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  ul {
    list-style-type: none;
    margin-right: 2rem;
    li {
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 768px) {
    grid-column: span 6;
    padding-left: 2rem;
  }
  @media (min-width: 1024px) {
    h4 {
      font-size: ${({ theme }) => theme.typography.h4};
    }
  }
  @media (min-width: 1200px) {
    grid-column: 2 / span 5;
  }
`

QuickLinks.Links = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

QuickLinks.Link = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #c1c5d7;
  letter-spacing: 2px;
  font-size: 14px;
`

const Contact = styled.div`
  grid-column: 1/-1;
  h4 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  p {
    color: #c1c5d7;
    margin-bottom: 2rem;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    grid-column: span 6;
    padding-right: 2rem;
  }
  @media (min-width: 1024px) {
    h4 {
      font-size: ${({ theme }) => theme.typography.h4};
    }
  }
  @media (min-width: 1200px) {
    grid-column: span 5;
  }
`

Contact.Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  input {
    margin-bottom: 1rem;
    flex: 1;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    input {
      margin-right: 1rem;
    }
  }
`

export default () => {
  return (
    <Footer>
      <QuickLinks>
        <h4>Quick Links</h4>
        <QuickLinks.Links>
          <ul>
            <li>
              <QuickLinks.Link to="/">Home</QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/about">About</QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/services">Services</QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/projects">Projects</QuickLinks.Link>
            </li>
            <li></li>
          </ul>
          <ul>
            <li>
              <QuickLinks.Link to="/">Home Renovations</QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/">Kitchen Remodels</QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/">Exterior Renovations</QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/">Landscaping</QuickLinks.Link>
            </li>
          </ul>
        </QuickLinks.Links>
      </QuickLinks>
      <Contact>
        <h4>Do you have any questions?</h4>
        <p>
          If you'd like us to get in contact with you over the phone, please
          leave you name and number below and we'll get in touch as soon as we
          can.
        </p>
        <Contact.Form netlify name="phoneForm">
          <Input placeholder="Your Name" type="text" name="name" />
          <Input
            placeholder="Your Phone (ex. 123-456-7890)"
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <Button
            type="submit"
            onClick={e => e.preventDefault()}
            style={{ marginBottom: "1rem" }}
          >
            Submit
          </Button>
        </Contact.Form>
      </Contact>
    </Footer>
  )
}
