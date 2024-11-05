import { useState } from "react";
import "./contact.css";

const Contact = () => {
  // State för att lagra formulärdata och status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // För att visa statusmeddelanden

  // Funktion för att uppdatera state när formulärfält ändras
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Funktion för att hantera formulärens "submit"-event
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Alla fält är obligatoriska" });
      return;
    }

    try {
      // Skicka formulärdata till Netlify Function
      const response = await fetch(`/.netlify/functions/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "E-post skickat!" });
        setFormData({ name: "", email: "", message: "" }); // Töm formuläret
      } else {
        setStatus({
          type: "error",
          message: result.message || "Fel vid e-postsändning",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Något gick fel vid e-postsändning",
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
          {/* Formulär */}
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ditt namn"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Din e-postadress"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Ditt meddelande"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Skicka</button>
          </form>

          {/* Statusmeddelanden */}
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
