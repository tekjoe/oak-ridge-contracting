import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlight from "../components/organisms/Highlight"
import Section from "../components/molecules/Section"
import TitleGroup from "../components/atoms/TitleGroup"

const ServicesSection = styled(Section)`
  grid-gap: 1rem !important;
`

const ServicesIntro = styled(Section)``

ServicesIntro.Content = styled.div`
  grid-column: 1/-1;
  text-align: center;
  @media (min-width: 768px) {
    grid-column: 4 / span 6;
  }
`

const ServiceCard = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.darkGray};
  transition: background 0.4s;
  grid-column: 1/-1;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  h5 {
    color: #3088da;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 0.5rem;
  }
  h4 {
    margin-bottom: 1.25rem;
  }
  p {
    font-weight: 500;
  }
  &:hover {
    background: #1f2231;
    color: white;
    & > p {
      color: white;
    }
    & > span {
      background: #2e3247;
    }
    & > div {
      background: #2e3247;
    }
  }
  @media (min-width: 768px) {
    grid-column: span 6;
  }
  @media (min-width: 1200px) {
    grid-column: span 4;
    padding: 4rem;
  }
`

ServiceCard.Icon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`

ServiceCard.Line = styled.span`
  width: 3px;
  height: 3rem;
  margin: 1rem 0;
  background: #c4c4c4;
  @media (min-width: 768px) {
    height: 6rem;
  }
`

const SVGC = styled.div`
  height: 64px;
  width: 64px;
  background: #3088da;
  padding: 1rem;
  border-radius: 100%;
  @media (min-width: 768px) {
    height: 125px;
    width: 125px;
    padding: 2rem;
  }
`

const ServicesPage = () => (
  <Layout>
    <SEO title="Our Services" />
    <ServicesIntro>
      <ServicesIntro.Content>
        <TitleGroup>
          <h3>Services</h3>
          <h2>All Services</h2>
        </TitleGroup>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tellus pellentesque vel a consectetur nullam amet gravida nibh.
          Convallis volutpat mauris pharetra vel, eu, tellus. Mi, ipsum dui,
          auctor duis. Aliquam, euismod lacinia tellus mattis.
        </p>
      </ServicesIntro.Content>
    </ServicesIntro>
    <ServicesSection>
      <ServiceCard to="service">
        <ServiceCard.Icon>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path d="M6.47 9.8A5 5 0 0 1 .2 3.22l3.95 3.95 2.82-2.83L3.03.41a5 5 0 0 1 6.4 6.68l10 10-2.83 2.83L6.47 9.8z" />
            </svg>
          </SVGC>
        </ServiceCard.Icon>
        <ServiceCard.Line />
        <h5>Services</h5>
        <h4>Construction</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          tincidunt orci lobortis mauris nulla velit dictum viverra.
        </p>
      </ServiceCard>
      <ServiceCard>
        <ServiceCard.Icon>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
            </svg>
          </SVGC>
        </ServiceCard.Icon>
        <ServiceCard.Line />
        <h5>Services</h5>
        <h4>Renovations</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          tincidunt orci lobortis mauris nulla velit dictum viverra.
        </p>
      </ServiceCard>
      <ServiceCard>
        <ServiceCard.Icon>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z" />
            </svg>
          </SVGC>
        </ServiceCard.Icon>
        <ServiceCard.Line />
        <h5>Services</h5>
        <h4>Snow Removal</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          tincidunt orci lobortis mauris nulla velit dictum viverra.
        </p>
      </ServiceCard>
      <ServiceCard>
        <ServiceCard.Icon>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z" />
            </svg>
          </SVGC>
        </ServiceCard.Icon>
        <ServiceCard.Line />
        <h5>Services</h5>
        <h4>General Contracting</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          tincidunt orci lobortis mauris nulla velit dictum viverra.
        </p>
      </ServiceCard>
      <ServiceCard>
        <ServiceCard.Icon>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z" />
            </svg>
          </SVGC>
        </ServiceCard.Icon>
        <ServiceCard.Line />
        <h5>Services</h5>
        <h4>Another Service</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          tincidunt orci lobortis mauris nulla velit dictum viverra.
        </p>
      </ServiceCard>
      <ServiceCard>
        <ServiceCard.Icon>
          <SVGC>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z" />
            </svg>
          </SVGC>
        </ServiceCard.Icon>
        <ServiceCard.Line />
        <h5>Services</h5>
        <h4>Another Service</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          tincidunt orci lobortis mauris nulla velit dictum viverra.
        </p>
      </ServiceCard>
    </ServicesSection>
    <Highlight reverse={true} />
  </Layout>
)

export default ServicesPage
