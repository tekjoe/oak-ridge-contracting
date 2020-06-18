import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/Section"
import TitleGroup from "../components/atoms/TitleGroup"
import Input from "../components/atoms/Input"
import Textarea from "../components/atoms/Textarea"
import Button from "../components/atoms/Button"

const ContactSection = styled(Section)`
  grid-gap: 1rem !important;
  @media (min-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
  }
`

const ContactForm = styled.div`
  grid-column: 1/-1;
  grid-row: 2;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  p {
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    grid-column: span 6;
    grid-row: 1/-1;
    padding: 6rem;
    p {
      margin-bottom: 2rem;
    }
  }
`

ContactForm.Form = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    input {
      flex: 1;
      &:first-of-type {
        margin-right: 1rem;
      }
    }
    textarea {
      flex-basis: 100%;
      margin-bottom: 1rem;
    }
  }
`

const ContactInfo = styled.div`
  grid-column: 1/-1;
  grid-row: 1;
  background: #2e3247;
  padding: 2rem;
  color: white;
  ul {
    list-style-type: none;
    font-size: 1rem;
  }
  li {
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    grid-column: span 6;
    grid-row: span 1;
    padding: 6rem;
    ul {
      font-size: 1.25rem;
    }
  }
`
const ContactMap = styled.div`
  grid-column: 1/-1;
  grid-row: span 1;
  background: #aadaff;
  height: 300px;
  @media (min-width: 1024px) {
    grid-column: span 6;
    height: 100%;
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactSection>
      <ContactForm>
        <TitleGroup>
          <h3>Ask a Question</h3>
          <h2>Contact Us By Email</h2>
        </TitleGroup>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sit
          pharetra, quisque turpis lacus etiam. Gravida varius commodo
          adipiscing nunc.
        </p>
        <ContactForm.Form>
          <Input type="text" placeholder="Your Name" variant="inverse" />
          <Input type="email" placeholder="Your Email" variant="inverse" />
          <Textarea placeholder="Your Message" rows="5" variant="inverse" />
          <Button variant="inverse">Contact Us</Button>
        </ContactForm.Form>
      </ContactForm>
      <ContactInfo>
        <TitleGroup>
          <h3>Contact</h3>
          <h2>How Can We Help You?</h2>
        </TitleGroup>
        <ul>
          <li>
            <strong>Location:</strong> 1234 Street Drive
          </li>
          <li>
            <strong>Phone:</strong> 262-123-4567
          </li>
          <li>
            <strong>Email:</strong> info@oakridgecontracting.com
          </li>
        </ul>
      </ContactInfo>
      <ContactMap />
    </ContactSection>
  </Layout>
)

export default ContactPage
