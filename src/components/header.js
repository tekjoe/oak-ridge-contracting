import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import LogoImage from "./atoms/LogoImage"

const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

const Logo = styled.div`
  margin-right: 2rem;
  height: 3rem;
  width: 6rem;
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
  @media (min-width: 1024px) {
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
  margin-right: 1rem;
  font-size: 1.25rem;
`

CTA.Button = styled(Link)`
  text-transform: uppercase;
  background: #3088da;
  font-size: 0.8rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 2px;
`

const HamburgerButton = styled.a`
  height: 1.25rem;
  width: 1.25rem;
  z-index: 10;
  @media (min-width: 768px) {
    margin-left: 1rem;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileNav = styled(motion.nav)`
  position: absolute;
  padding: 1rem;
  width: 100%;
  font-weight: bold;
  z-index: 1;
  overflow: hidden;
  top: 5rem;
  left: 0;
  background: hsl(197, 5%, 90%);
  ul {
    list-style-type: none;
    padding-bottom: 0.75rem;
    &:last-of-type {
      padding-top: 0.75rem;
    }
    li {
      a {
        padding: 0.75rem 0;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 2px;
        display: block;
        font-weight: 400;
      }
    }
  }
  @media (min-width: 768px) {
    top: 5rem;
  }
`

export default () => {
  const [isToggled, setIsToggled] = useState(false)
  const toggleMenu = () => {
    setIsToggled(!isToggled)
  }
  const variants = {
    open: {
      height: "auto",
      width: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.1,
        staggerChildren: 0.03,
        delayChildren: 0.2,
        staggerDirection: -1,
      },
      transitionEnd: {
        display: "block",
      },
    },
    closed: {
      height: 0,
      opacity: 0.1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.03,
        staggerDirection: 1,
        when: "afterChildren",
      },
      transitionEnd: { display: "none" },
    },
  }
  const item = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }
  return (
    <Header>
      <Logo>
        <LogoImage />
      </Logo>
      <Nav>
        <ul>
          <li>
            <Nav.Link to="/">Home</Nav.Link>
          </li>
          <li>
            <Nav.Link to="/services">Services</Nav.Link>
          </li>
          <li>
            <Nav.Link to="/projects">Projects</Nav.Link>
          </li>
          <li>
            <Nav.Link to="/about">About</Nav.Link>
          </li>
          <li>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </li>
        </ul>
      </Nav>
      <CTA>
        <CTA.Phone>+1-262-555-5555</CTA.Phone>
        <CTA.Button to="/contact">Contact Us</CTA.Button>
      </CTA>
      <HamburgerButton onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </HamburgerButton>
      <MobileNav
        animate={isToggled ? "open" : "closed"}
        variants={variants}
        initial={false}
      >
        <motion.ul>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/">Home</Nav.Link>
          </motion.li>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/services">Services</Nav.Link>
          </motion.li>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/projects">Projects</Nav.Link>
          </motion.li>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/about">About</Nav.Link>
          </motion.li>
          <motion.li variants={item} whileTap={{ scale: 0.95 }}>
            <Nav.Link to="/contact">Contact Us</Nav.Link>
          </motion.li>
        </motion.ul>
      </MobileNav>
    </Header>
  )
}
