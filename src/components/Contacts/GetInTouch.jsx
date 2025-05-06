import React, { useState } from 'react'
import emailjs from "emailjs-com";
import "./GetInTouch.css"
import Contacts from './Contacts';
import PhNumber_icon from "../../assets/viber.png"
import Email_icon from "../../assets/email.png"
import Address_icon from '../../assets/location.png'
const GetInTouch = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vjjc8rv",     // 🔁 Replace with your actual service ID
        "template_sfg07wh",    // 🔁 Replace with your actual template ID
        formData,
        "hbZzAm1fQsW5RFpSs"      // 🔁 Replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponseMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setResponseMessage("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
 <>
    <div className='Get-in-touch-heading'>
        <h1>Contact Me</h1>
    </div>
    <hr />
 <div className='get-in-touch-container' id='contact'>
 <div className="contact-container">
      <h2>Get in Touch 📬</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
      </form>
    </div>
    <div className='contact-left-content'>
        <Contacts/>
        <p>
  <a href="tel:7730800724" style={{ textDecoration: "none", color: "inherit" }}>
    <img src={PhNumber_icon} alt="Phone Icon" width={40}  height={40} loading='lazy'/>: 7730800724
  </a>
</p>

<p>
  <a href="mailto:harikrishna2677@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
    <img src={Email_icon} alt="Email Icon" width={40} height={40} loading='lazy'/>: harikrishna2677@gmail.com
  </a>
</p>

<p>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Hyderabad+KPHB+colony"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <img src={Address_icon} alt="Address Icon" width={40} height={40} loading='lazy' />: Hyderabad, KPHB colony
  </a>
</p>

    </div>
 </div>
 </>
  )
}

export default GetInTouch
