import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const ServicesSection = styled(motion.div)`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
`

const ServiceCard = styled(motion.div)`
  grid-column: 1/-1;
  @media (min-width: 768px) {
    grid-column: span 6;
  }
  @media (min-width: 1200px) {
    grid-column: span 4;
  }
  @media (min-width: 1400px) {
    grid-column: span 3;
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
    height: 125px;
    width: 125px;
  }
  @media (min-width: 1200px) {
    height: 160px;
    width: 160px;
  }
`

const SVGC = styled.div`
  height: 64px;
  width: 64px;
  background: #3088da;
  padding: 1rem;
  border-radius: 100%;
  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
    padding: 1.5rem;
  }
  @media (min-width: 1200px) {
    height: 112px;
    width: 112px;
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
  justify-content: center;
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
    padding: 3rem;
  }
  @media (min-width: 1400px) {
    padding: 4rem;
  }
`

ServiceCard.Title = styled.h4`
  margin-bottom: 1.25rem;
  text-align: center;
  line-height: 1;
`
ServiceCard.Subtitle = styled.p`
  color: #3088da;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold !important;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
  line-height: 1;
  font-family: "Barlow", Arial, Helvetica, sans-serif, -apple-system, sans-serif;
`

const ServicesGrid = () => {
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
    <ServicesSection
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      initial={false}
    >
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
          <ServiceCard.Subtitle>Services</ServiceCard.Subtitle>
          <ServiceCard.Title>General Contracting</ServiceCard.Title>
          <p>
            When it comes to professional general contracting in southeastern
            Wisconsin, Oak Ridge Contracting is the name to know.
          </p>
        </ServiceCard.Link>
      </ServiceCard>
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
          <ServiceCard.Subtitle>Services</ServiceCard.Subtitle>
          <ServiceCard.Title>Home Renovations</ServiceCard.Title>
          <p>
            Give your home the beautiful, modern makeover of your dreams. It's
            our responsibility to take your dream and make it a reality.
          </p>
        </ServiceCard.Link>
      </ServiceCard>
      <ServiceCard variants={item}>
        <ServiceCard.Link to="/services/snow-removal">
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
          <ServiceCard.Subtitle>Services</ServiceCard.Subtitle>
          <ServiceCard.Title>Snow Removal</ServiceCard.Title>
          <p>
            We offer residential and commercial snow and ice removal services in
            southeastern Wisconsin. Stay safe this winter season.
          </p>
        </ServiceCard.Link>
      </ServiceCard>
      <ServiceCard variants={item} tabindex="0">
        <ServiceCard.Link to="/services/roofing-siding-and-windows">
          <ServiceCard.Icon>
            <SVGC>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
              </svg>
            </SVGC>
          </ServiceCard.Icon>
          <ServiceCard.Line />
          <ServiceCard.Subtitle>Services</ServiceCard.Subtitle>
          <ServiceCard.Title>Roofing, Siding, Windows</ServiceCard.Title>
          <p>
            Give your home a stunning new look with durable roofing, siding, or
            windows, without breaking the bank.
          </p>
        </ServiceCard.Link>
      </ServiceCard>
    </ServicesSection>
  )
}

export default ServicesGrid
