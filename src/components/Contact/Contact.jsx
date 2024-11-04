import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-form">
        <div className="contact-column-1">
          <div className="contact-row-1">
            <h1>Lets connect!</h1>
            <br></br>
            <p>
              If you want to grab a coffee or drink, physically or virtually
              please reach out either by filling the form to the right or
              through social media.
            </p>
          </div>

        </div>
        <div className="contact-column-2">
          <input className="contact-input" type="text" placeholder="Name" />
          <input className="contact-input" type="text" placeholder="Email" />
          <input
            className="contact-input-message"
            type="text"
            placeholder="Message"
          />
          <button className="send-button">Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
