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

Contact.Social = styled.ul`
  list-style-type: none;
  display: flex;
  li {
    svg {
      max-height: 2rem;
      max-width: 2rem;
    }
  }
  li:first-of-type {
    margin-right: 0.5rem;
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
              <QuickLinks.Link to="/contact">Contact Us</QuickLinks.Link>
            </li>
          </ul>
          <ul>
            <li>
              <QuickLinks.Link to="/general-contracting">
                General Contracting
              </QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/renovations">
                Home Renovations
              </QuickLinks.Link>
            </li>
            <li>
              <QuickLinks.Link to="/snow-removal">Snow Removal</QuickLinks.Link>
            </li>
          </ul>
        </QuickLinks.Links>
      </QuickLinks>
      <Contact>
        <h4>Connect With Us</h4>
        <p>
          To see more of our work, take a look at our Instagram and Facebook
          pages.
        </p>
        <Contact.Social>
          <li>
            <a
              href=" https://www.facebook.com/pg/oakridgecontracting/"
              target="_blank"
            >
              <svg
                fill="none"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m48 24c0-13.2562-10.7438-24-24-24s-24 10.7438-24 24c0 11.9813 8.775 21.9094 20.25 23.7094v-16.7719h-6.0938v-6.9375h6.0938v-5.2875c0-6.0141 3.5813-9.3375 9.0656-9.3375 2.625 0 5.3719.46875 5.3719.46875v5.90625h-3.0281c-2.9813 0-3.9094 1.8516-3.9094 3.75v4.5h6.6562l-1.064 6.9375h-5.5922v16.7719c11.475-1.8 20.25-11.7281 20.25-23.7094z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/oakridge_contracting/"
              target="_blank"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.8529 13.5067C23.0759 13.5063 23.3157 13.5065 23.5746 13.5066L24.0012 13.5067C27.4188 13.5067 27.8239 13.519 29.1735 13.5803C30.4215 13.6374 31.0989 13.8459 31.5501 14.0211C32.1474 14.2531 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4505C34.1541 16.9011 34.3629 17.5785 34.4197 18.8265C34.481 20.1758 34.4944 20.5812 34.4944 23.9972C34.4944 27.4132 34.481 27.8186 34.4197 29.1679C34.3626 30.4159 34.1541 31.0933 33.9789 31.5439C33.7469 32.1413 33.469 32.5666 33.021 33.0144C32.573 33.4624 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4128C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4128C17.5809 34.3552 16.9035 34.1466 16.452 33.9714C15.8547 33.7394 15.428 33.4621 14.98 33.0141C14.532 32.5661 14.2547 32.1405 14.0222 31.5429C13.847 31.0922 13.6382 30.4149 13.5814 29.1669C13.52 27.8175 13.5078 27.4122 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8233C13.6384 17.5753 13.847 16.8979 14.0222 16.4467C14.2542 15.8494 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2494 16.452 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5755C20.0097 13.5222 20.4673 13.5062 22.8529 13.5035V13.5067ZM30.8338 15.632C29.9858 15.632 29.2978 16.3193 29.2978 17.1675C29.2978 18.0155 29.9858 18.7035 30.8338 18.7035C31.6818 18.7035 32.3698 18.0155 32.3698 17.1675C32.3698 16.3195 31.6818 15.6315 30.8338 15.6315V15.632ZM17.4278 24.0001C17.4278 20.3701 20.3709 17.4269 24.0009 17.4267C27.6311 17.4267 30.5735 20.37 30.5735 24.0001C30.5735 27.6303 27.6314 30.5722 24.0012 30.5722C20.371 30.5722 17.4278 27.6303 17.4278 24.0001Z"
                  fill="#fff"
                />
                <path
                  d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2669 24.0012 28.2669C21.6447 28.2669 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
        </Contact.Social>
      </Contact>
    </Footer>
  )
}
