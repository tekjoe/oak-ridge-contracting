import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
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

const ServiceCard = styled(motion.div)`
  grid-column: 1/-1;
  @media (min-width: 768px) {
    grid-column: span 6;
  }
  @media (min-width: 1200px) {
    grid-column: span 4;
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

ServiceCard.Link = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.darkGray};
  transition: background 0.4s;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  height: 100%;
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
    text-align: center;
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
  @media (min-width: 1200px) {
    padding: 4rem;
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

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(!isVisible)
  }, [])
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.1,
        delayChildren: 0.15,
        staggerDirection: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  }
  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <Layout>
      <SEO title="General Contractor Services in Waukesha and Jefferson County " />
      <ServicesIntro>
        <ServicesIntro.Content>
          <TitleGroup>
            <p>Services</p>
            <h2>Our Services</h2>
          </TitleGroup>
          <p>
            We are highly qualified and are dedicated to providing you with
            excellent workmanship. No job is too big or small, we treat every
            project with the utmost respect and always deliver outstanding
            customer service. We know how important your home is to you, that's
            why we treat it as if it were our own.
          </p>
        </ServicesIntro.Content>
      </ServicesIntro>
      <ServicesSection
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        initial={false}
      >
        <ServiceCard variants={item}>
          <ServiceCard.Link to="/services/renovations">
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
            <h4>Home Renovations</h4>
            {/* <p>
              Give your home the beautiful, modern makeover of your dreams. It's
              our responsibility to take your dream and make it a reality.
            </p> */}
          </ServiceCard.Link>
        </ServiceCard>
        <ServiceCard variants={item} tabindex="0">
          <ServiceCard.Link to="/services/roofing-siding-and-windows">
            <ServiceCard.Icon>
              <SVGC>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 53 53"
                  fill="#fff"
                >
                  <g>
                    <g>
                      <path d="M50.5,0h-6c-0.552,0-1,0.448-1,1h-30c0-0.552-0.448-1-1-1h-5h-5c-0.552,0-1,0.448-1,1v48.506C1.5,51.433,3.07,53,5,53    c0.98,0,1.864-0.407,2.5-1.056C8.136,52.593,9.02,53,10,53c1.93,0,3.5-1.567,3.5-3.494V46h30v3c0,2.206,1.794,4,4,4s4-1.794,4-4V1    C51.5,0.448,51.052,0,50.5,0z M13.5,7h30v32h-30V7z M43.5,3v2h-30V3H43.5z M5,51c-0.827,0-1.5-0.67-1.5-1.494V2h3v47.506    C6.5,50.33,5.827,51,5,51z M11.5,49.506C11.5,50.33,10.827,51,10,51s-1.5-0.67-1.5-1.494V2h3v1v3v34v5V49.506z M13.5,44v-3h30v3    H13.5z M49.5,49c0,1.103-0.897,2-2,2s-2-0.897-2-2v-4v-5V6V3V2h4V49z" />
                      <path d="M16.5,15c0.256,0,0.512-0.098,0.707-0.293l3-3c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-3,3    c-0.391,0.391-0.391,1.023,0,1.414C15.988,14.902,16.244,15,16.5,15z" />
                      <path d="M23.793,10.293l-8,8c-0.391,0.391-0.391,1.023,0,1.414C15.988,19.902,16.244,20,16.5,20s0.512-0.098,0.707-0.293l8-8    c0.391-0.391,0.391-1.023,0-1.414S24.184,9.902,23.793,10.293z" />
                    </g>
                  </g>
                </svg>
              </SVGC>
            </ServiceCard.Icon>
            <ServiceCard.Line />
            <h5>Services</h5>
            <h4>Roofing, Siding, Windows</h4>
            {/* <p>
              Give your home a stunning new look with durable roofing, siding,
              or windows, without breaking the bank.
            </p> */}
          </ServiceCard.Link>
        </ServiceCard>
        <ServiceCard variants={item} tabindex="0">
          <ServiceCard.Link to="/services/general-contracting">
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
            <h4>General Contracting</h4>
            {/* <p>
              When it comes to professional general contracting in southeastern
              Wisconsin, Oak Ridge Contracting is the name to know.
            </p> */}
          </ServiceCard.Link>
        </ServiceCard>

        <ServiceCard variants={item}>
          <ServiceCard.Link to="/services/design">
            <ServiceCard.Icon>
              <SVGC>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <g>
                    <g>
                      <g>
                        <path d="M358.752,51.159L70.113,339.798l102.063,102.064L455.088,158.95L512,0.282L358.752,51.159z M172.176,419.287     l-79.488-79.489L349.536,82.949l0.069,11.622l22.52-0.089l0.089,22.667l22.625,0.048l-0.048,22.691l22.467-0.271l0.27,22.847     l11.538-0.068L172.176,419.287z M442.648,146.351l-9.345,0.055l-0.27-22.946l-22.244,0.269l0.048-22.464l-22.721-0.048     l-0.091-22.764l-22.551,0.089l-0.068-11.463l1.963-1.963l75.812-25.169l4.761,23.811l22.704,4.541L442.648,146.351z      M461.506,50.195l-3.062-15.313l27.457-9.116l-9.808,27.346L461.506,50.195z" />

                        <rect
                          x="37.686"
                          y="394.032"
                          transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -97.0284 763.8365)"
                          width="143.992"
                          height="15.962"
                        />
                        <path d="M10.388,399.522c-13.851,13.852-13.851,36.391,0,50.244l51.546,51.545c6.711,6.711,15.632,10.406,25.122,10.406     s18.412-3.696,25.122-10.406l37.073-37.073L47.462,362.45L10.388,399.522z M100.891,490.025     c-3.695,3.696-8.608,5.731-13.834,5.731s-10.139-2.036-13.834-5.731L21.676,438.48c-7.629-7.628-7.629-20.042,0-27.67     l25.785-25.785l79.215,79.216L100.891,490.025z" />
                      </g>
                    </g>
                  </g>
                </svg>
              </SVGC>
            </ServiceCard.Icon>
            <ServiceCard.Line />
            <h5>Services</h5>
            <h4>Design & 3D Rendering</h4>
          </ServiceCard.Link>
        </ServiceCard>
        <ServiceCard variants={item}>
          <ServiceCard.Link to="/services/farm-and-ranch">
            <ServiceCard.Icon>
              <SVGC>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <g>
                    <g>
                      <path d="M301.454,415.095l-4.027-3.553c-4.223-3.728-10.668-3.325-14.396,0.898c-3.727,4.223-3.325,10.668,0.898,14.396    l4.027,3.553c1.939,1.711,4.347,2.552,6.745,2.552c2.824,0,5.635-1.167,7.65-3.45    C306.079,425.267,305.677,418.822,301.454,415.095z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M256.001,95.074c-29.598,0-53.678,24.08-53.678,53.678v43.479c0,5.633,4.566,10.199,10.199,10.199h86.958    c5.633,0,10.199-4.566,10.199-10.199v-43.479C309.679,119.154,285.599,95.074,256.001,95.074z M289.281,182.033h-66.56v-33.28    c0-18.35,14.93-33.28,33.28-33.28s33.28,14.93,33.28,33.28V182.033z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M478.316,231.454l-93.92-173.929c-1.082-2.002-2.804-3.586-4.89-4.497L260.084,0.853c-2.604-1.137-5.563-1.137-8.167,0    L132.495,53.028c-2.086,0.912-3.807,2.495-4.889,4.497L33.684,231.454c-2.67,4.96-0.815,11.146,4.144,13.816    c1.538,0.828,3.193,1.221,4.826,1.221c3.631,0,7.147-1.945,8.989-5.366l12.705-23.595v284.271c0,5.633,4.566,10.199,10.199,10.199    h362.906c5.633,0,10.199-4.566,10.199-10.199V217.53l12.705,23.595c1.842,3.421,5.358,5.366,8.989,5.366    c1.633,0,3.288-0.393,4.826-1.221C479.131,242.6,480.987,236.414,478.316,231.454z M245.802,491.602h-91.567l91.567-80.82V491.602    z M137.386,479.265V297.006l103.657,90.769L137.386,479.265z M245.802,364.828l-95.12-83.294h95.12V364.828z M374.616,479.265    l-48.632-42.923c-4.223-3.728-10.668-3.325-14.396,0.898c-3.727,4.224-3.325,10.668,0.898,14.396l45.282,39.967H266.2v-98.824    l108.415-95.691V479.265z M266.2,365.57v-84.035h95.211L266.2,365.57z M427.255,491.602L427.255,491.602h-32.241V271.336    c0-5.633-4.566-10.199-10.199-10.199H127.187c-5.633,0-10.199,4.566-10.199,10.199v220.266h-32.24V179.739l59.133-109.425    l112.12-48.984l112.12,48.984l59.134,109.424V491.602z" />
                    </g>
                  </g>
                </svg>
              </SVGC>
            </ServiceCard.Icon>
            <ServiceCard.Line />
            <h5>Services</h5>
            <h4>Farm & Ranch</h4>
          </ServiceCard.Link>
        </ServiceCard>
        <ServiceCard variants={item}>
          <ServiceCard.Link to="/services/snow-removal">
            <ServiceCard.Icon>
              <SVGC>
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <path d="M461,349l-34-19.64a89.53,89.53,0,0,1,20.94-16,22,22,0,0,0-21.28-38.51,133.62,133.62,0,0,0-38.55,32.1L300,256l88.09-50.86a133.46,133.46,0,0,0,38.55,32.1,22,22,0,1,0,21.28-38.51,89.74,89.74,0,0,1-20.94-16l34-19.64A22,22,0,1,0,439,125l-34,19.63a89.74,89.74,0,0,1-3.42-26.15A22,22,0,0,0,380,96h-.41a22,22,0,0,0-22,21.59A133.61,133.61,0,0,0,366.09,167L278,217.89V116.18a133.5,133.5,0,0,0,47.07-17.33,22,22,0,0,0-22.71-37.69A89.56,89.56,0,0,1,278,71.27V38a22,22,0,0,0-44,0V71.27a89.56,89.56,0,0,1-24.36-10.11,22,22,0,1,0-22.71,37.69A133.5,133.5,0,0,0,234,116.18V217.89L145.91,167a133.61,133.61,0,0,0,8.52-49.43,22,22,0,0,0-22-21.59H132a22,22,0,0,0-21.59,22.41A89.74,89.74,0,0,1,107,144.58L73,125a22,22,0,1,0-22,38.1l34,19.64a89.74,89.74,0,0,1-20.94,16,22,22,0,1,0,21.28,38.51,133.62,133.62,0,0,0,38.55-32.1L212,256l-88.09,50.86a133.62,133.62,0,0,0-38.55-32.1,22,22,0,1,0-21.28,38.51,89.74,89.74,0,0,1,20.94,16L51,349a22,22,0,1,0,22,38.1l34-19.63a89.74,89.74,0,0,1,3.42,26.15A22,22,0,0,0,132,416h.41a22,22,0,0,0,22-21.59A133.61,133.61,0,0,0,145.91,345L234,294.11V395.82a133.5,133.5,0,0,0-47.07,17.33,22,22,0,1,0,22.71,37.69A89.56,89.56,0,0,1,234,440.73V474a22,22,0,0,0,44,0V440.73a89.56,89.56,0,0,1,24.36,10.11,22,22,0,0,0,22.71-37.69A133.5,133.5,0,0,0,278,395.82V294.11L366.09,345a133.61,133.61,0,0,0-8.52,49.43,22,22,0,0,0,22,21.59H380a22,22,0,0,0,21.59-22.41A89.74,89.74,0,0,1,405,367.42l34,19.63A22,22,0,1,0,461,349Z" />
                </svg>
              </SVGC>
            </ServiceCard.Icon>
            <ServiceCard.Line />
            <h5>Services</h5>
            <h4>Snow Removal & Ice Management</h4>
            {/* <p>
              We offer residential and commercial snow and ice removal services
              in southeastern Wisconsin. Stay safe this winter season.
            </p> */}
          </ServiceCard.Link>
        </ServiceCard>
      </ServicesSection>
      <Highlight reverse={true} />
    </Layout>
  )
}

export default ServicesPage
