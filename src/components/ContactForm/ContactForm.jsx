import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;


const SERVICEID = import.meta.env.SERVICE_ID;
const TEMPLATE = import.meta.env.TEMPLATE;
const PUBLICKEY = import.meta.env.PUBLIC_KEY

    // Kontrollera att alla fält är ifyllda
    if (!name || !email || !message) {
      alert("Alla fält måste fyllas i.");
      return;
    }

    // Skicka e-post via EmailJS
    emailjs
      .send(
        SERVICEID, // Din EmailJS service ID
        TEMPLATE, // Din EmailJS template ID
        {
          name,
          email,
          message,
        },
        PUBLICKEY // Din EmailJS user ID
      )
      .then(
        (result) => {
          alert("E-post skickat!");
        },
        (error) => {
          alert("Det uppstod ett problem. Försök igen senare.");
          console.error("E-postfel:", error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Meddelande:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Skicka meddelande</button>
    </form>
  );
}

export default ContactForm;
