import React from 'react';
import { Container } from 'react-bootstrap'
// import { GitHubIcon } from './icons'
import "./css/Footer.css";

   
const Footer = () => {
    return (
      <>
          <Container className="d-flex align-items-end justify-content-around mt-10" 
            style={{minHeight: "10vh", marginTop: "10px"}}>
              <>
            <div>
            <footer className="site-footer">
              <section className="footer-links">
                <h2>Customer Care</h2>
                <a href="https://www.google.com/">Account</a>
                <a href="https://www.google.com/">Orders</a>
                <a href="https://www.google.com/">Policies</a>
                <a href="https://www.google.com/">Credit</a>
                <a href="https://www.google.com/">Help</a>
              </section>
              <br/>
              <section className="footer-links">
                <h2>Sales</h2>
                <a href="https://www.google.com/">Become a Seller</a>
                <a href="https://www.google.com/">Manage Your Products</a>
                <a href="https://www.google.com/">Advertise</a>
              </section>
              <section className="footer-links">
                <h2 id>About Us</h2>
                <a href="https://www.google.com/">Careers</a>
                <a href="https://www.google.com/">Blog</a>
                <a href="https://www.google.com/">Our History</a>
                <a href="https://www.google.com/">Press Releases</a>
                <a href="https://www.google.com/">Take a Tour</a>
              </section>
            </footer>
            </div>
          </>
      </Container>
      </>
    )
}

export default Footer
