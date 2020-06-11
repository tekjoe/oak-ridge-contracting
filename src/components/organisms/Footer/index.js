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
    margin-top: -2rem;
    padding: 10rem 0;
  }
`

const QuickLinks = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 3rem;
  h4 {
    margin-bottom: 2rem;
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
    grid-column: 2 / span 4;
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
  }
  p {
    color: #c1c5d7;
    margin-bottom: 2rem;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    grid-column: 7 / -3;
  }
`

Contact.Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    input {
      margin-right: 1rem;
      margin-bottom: 0;
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
          <Button type="submit" onClick={e => e.preventDefault()}>
            Submit
          </Button>
        </Contact.Form>
      </Contact>
    </Footer>
  )
}
