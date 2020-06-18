import React from "react"
import styled from "styled-components"
import Input from "../../atoms/Input"
import Button from "../../atoms/Button"

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
      text-transform: uppercase;
      color: #c1c5d7;
      margin-bottom: 1rem;
      letter-spacing: 2px;
      font-size: 14px;
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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <ul>
            <li>Home Renovations</li>
            <li>Kitchen Remodels</li>
            <li>Exterior Renovations</li>
            <li>Landscaping</li>
          </ul>
        </QuickLinks.Links>
      </QuickLinks>
      <Contact>
        <h4>Do you have any questions?</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nullam
          rhoncus eu eget vitae in vitae.{" "}
        </p>
        <Contact.Form>
          <Input placeholder="Your Name" type="text" />
          <Input placeholder="Your Email" type="email" />
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
