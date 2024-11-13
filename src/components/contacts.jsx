import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { StyledContact } from "./styled/Contacts.styled";

function Contact() {
  return (
    <StyledContact id="contacts">
      <div>
        <h1>get in touch</h1>
        <p>
          I'd love to connect and explore exciting opportunities with you!
          Whether you have interesting projects, creative ideas, or just want to
          chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>

        <div className="contact-links">
          <a href="tel:+254769327435" className="contact-link">
            <FaSquarePhone /> +254 769 327 435
          </a>
          <a href="mailto:florahnduati68@gmail.com" className="contact-link">
            <SiGmail /> florahnduati68@gmail.com
          </a>
          <a
            href="https://wa.me/254769695222"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaSquareWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
      <p className="footer">&copy; 2024 built by Nduati Florah</p>
    </StyledContact>
  );
}

export default Contact;