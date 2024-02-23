import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t3t6wyo", "template_luz1xxb", form.current, {
        publicKey: "YGGDSbKMY9SI7K9p0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact-page">
      <div id="contact">
        <h1 className="contact-title">Contact Me</h1>
        <span className="contact-description">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
          />
          <button type="submit" value="Send" className="submit-btn">
            Submit
          </button>
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mamta-poojary-539285257"
            >
              <img src={linkedin} alt="linkedin" className="link" />
            </a>

            <a target="_blank" rel="noreferrer" href="">
              <img src={instagram} alt="instagram" className="link" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/mamtaapoojary?t=1j3fZ5Pww1lYGgnsljFwlw&s=09"
            >
              <img src={twitter} alt="twitter" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
