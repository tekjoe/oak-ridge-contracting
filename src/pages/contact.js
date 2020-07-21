import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/molecules/Section"
import TitleGroup from "../components/atoms/TitleGroup"
import Input from "../components/atoms/Input"
import Textarea from "../components/atoms/Textarea"
import Button from "../components/atoms/Button"

import ReactMapboxGl from "react-mapbox-gl"
import InputGroup from "../components/molecules/InputGroup"

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
  @media (min-width: 1024px) {
    grid-template-rows: repeat(2, minmax(auto, 1fr));
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

ContactForm.Form = styled(motion.form)`
  display: ${({ submitted }) => (submitted ? "none" : "flex")};
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
  @media (min-width: 768px) {
    height: 425px;
  }
  @media (min-width: 1024px) {
    grid-column: span 6;
    height: 100%;
  }
`

const MessageContainer = styled(motion.div)`
  background: #30da92;
  padding: 1rem;
  text-align: center;
  p {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
`

const Select = styled.select`
  flex-basis: 100%;
  border: none;
  margin-bottom: 1rem;
  border-bottom: ${({ variant, theme }) =>
    variant === "inverse"
      ? `2px solid ${theme.darkGray}`
      : "2px solid #c1c5d7"};
  padding: 0.5rem 0;
  background: transparent;
  color: ${({ variant, theme }) =>
    variant === "inverse" ? theme.darkGray : "#c1c5d7"};
  font-size: 1rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
`

const ContactPage = () => {
  const [state, setState] = useState({})
  const [submitted, setSubmitted] = useState(false)
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
      .then(() => {
        form.reset()
        setSubmitted(!submitted)
      })
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
            below or call us at (262) 352-3963.
          </p>
          <AnimatePresence>
            {!submitted && (
              <ContactForm.Form
                data-netlify="true"
                name="contactForm"
                method="post"
                action="/contact/"
                onSubmit={handleSubmit}
                initial={{ y: 0 }}
                transition={{ duration: 0.15 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -50 }}
              >
                <InputGroup>
                  <label htmlFor="name">Your Name</label>
                  <Input
                    type="text"
                    variant="inverse"
                    name="name"
                    id="name"
                    onChange={handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">Your Email</label>
                  <Input
                    type="email"
                    variant="inverse"
                    name="email"
                    id="email"
                    onChange={handleChange}
                  />
                </InputGroup>
                <InputGroup full>
                  <label htmlFor="budget">Expected Budget</label>
                  <Select
                    id="budget"
                    variant="inverse"
                    required
                    name="budget"
                    onChange={handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Select here
                    </option>
                    <option value="< $5000">&lt; $5000</option>
                    <option value="$5000 - $10,000">$5000 - $10,000</option>
                    <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                    <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                    <option value="$30,000 - $40,000">$30,000 - $40,000</option>
                    <option value="$40,000 - $60,000">$40,000 - $60,000</option>
                    <option value="$60,000 - $80,000">$60,000 - $80,000</option>
                    <option value="$80,000 - $100,000">
                      $80,000 - $100,000
                    </option>
                    <option value="$100,000+">$100,000+</option>
                  </Select>
                </InputGroup>
                <InputGroup full>
                  <label>Your Message</label>
                  <Textarea
                    rows="5"
                    variant="inverse"
                    name="message"
                    onChange={handleChange}
                  />
                </InputGroup>

                <input type="hidden" name="form-name" value="contactForm" />
                <Button
                  variant="inverse"
                  disabled={state.email && state.message ? false : true}
                >
                  Contact Us
                </Button>
              </ContactForm.Form>
            )}
          </AnimatePresence>
          {submitted && (
            <MessageContainer
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h4>Thank you!</h4>
              <p>We'll be in touch as soon as possible.</p>
            </MessageContainer>
          )}
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
              <strong>Phone:</strong> 262-352-3963
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
