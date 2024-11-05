import { useState } from "react";
import emailjs from "emailjs-com"; // Importera EmailJS SDK
import "./contact.css";

const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const template = import.meta.env.VITE_TEMPLATE;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "All fields are required" });
      return;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await emailjs.send(
        serviceId,
        template,
        formData,
        publicKey
      );

      setStatus({ type: "success", message: "E-mail sent!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("Failed to send message:", error);
      setStatus({
        type: "error",
        message: "Something went wrong when trying to send message",
      });
    }
  };

  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-form">
        <div className="contact-column-1">
          <div className="contact-row-1">
            <h1>Lets connect!</h1>
            <p>
              If you want to grab a coffee or drink, physically or virtually,
              please reach out either by filling the form to the right or
              through social media.
            </p>
          </div>
        </div>

        <div className="contact-column-2">
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              className="contact-input"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Adress"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="contact-input-message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-button">
              Send message
            </button>
          </form>
          {status && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
