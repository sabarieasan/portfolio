import React from "react";
import { Element } from "react-scroll";

import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <p>
          Email : <span>sabarishglad28@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@sabarieasan</span>
        </p>
      </div>
    </Element>
  );
};

export default Contact;
