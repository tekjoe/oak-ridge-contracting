import React, { useState } from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/Section"
import TitleGroup from "../components/atoms/TitleGroup"
import Input from "../components/atoms/Input"
import Textarea from "../components/atoms/Textarea"
import Button from "../components/atoms/Button"

import ReactMapboxGl from "react-mapbox-gl"

const apiKey = process.env.GATSBY_API_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Map = ReactMapboxGl({
  accessToken: apiKey,
  scrollZoom: false,
  minZoom: 6,
})

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

const ContactPage = () => {
  const [state, setState] = useState({})
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <SEO title="Contact Us" />
      <ContactSection>
        <ContactForm>
          <TitleGroup>
            <h3>Ask a Question</h3>
            <h2>Contact Us By Email</h2>
          </TitleGroup>
          <p>
            Interested in learning more about our services? Fill out the form
            below or call us at (262) 424-3241.
          </p>
          <ContactForm.Form
            data-netlify="true"
            name="contactForm"
            method="post"
            action="/contact/"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder="Your Name"
              variant="inverse"
              name="name"
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Your Email"
              variant="inverse"
              name="email"
              onChange={handleChange}
            />
            <Textarea
              placeholder="Your Message"
              rows="5"
              variant="inverse"
              name="message"
              onChange={handleChange}
            />
            <input type="hidden" name="form-name" value="contactForm" />
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
              <strong>Address:</strong> P.O. Box 202 Palmyra, Wisconsin
            </li>
            <li>
              <strong>Phone:</strong> 262-424-3241
            </li>
            <li>
              <strong>Email:</strong> info@oakridgecontracting.com
            </li>
          </ul>
        </ContactInfo>
        <ContactMap>
          <Map
            style="mapbox://styles/tekjoe/ck558iss20d681cqeyj4u2ov6"
            center={[-88.288519, 43.015604]}
            containerStyle={{
              height: "100%",
              width: "100%",
            }}
          ></Map>
        </ContactMap>
      </ContactSection>
    </Layout>
  )
}

export default ContactPage
