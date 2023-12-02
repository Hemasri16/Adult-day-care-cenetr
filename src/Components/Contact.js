// Styles
const contactSection = {
  padding: '40px',
  backgroundColor: '#f9f9f9',
};

const contactHeading = {
  fontSize: '36px',
  marginBottom: '20px',
  textAlign: 'center',
};

const contactContent = {
  display: 'flex',
  justifyContent: 'space-between',
};

const contactInfo = {
  flex: '1',
  marginRight: '20px',
};

const contactForm = {
  flex: '1',
};

const formHeading = {
  fontSize: '24px',
  marginBottom: '20px',
};

const formGroup = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
};

const submitButton = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

const submitButtonHover = {
  backgroundColor: '#2980b9',
};

const Contact = () => {
  return (
    <section style={contactSection}>
      <h2 style={contactHeading}>Contact Us</h2>
      <div style={contactContent}>
        <div style={contactInfo}>
          <p>Email: <a href="mailto:info@daycarecenter.com">info@daycarecenter.com</a></p>
          <p>Phone: <a href="tel:(123) 456-7890">(123) 456-7890</a></p>
          <p>Address: 123 Elderly Lane, Senior City</p>
        </div>
        <div style={contactForm}>
          <h3 style={formHeading}>Send Us a Message</h3>
          <form>
            <div style={formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" style={inputStyle} />
            </div>
            <div style={formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" style={inputStyle} />
            </div>
            <div style={formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message" style={textareaStyle}></textarea>
            </div>
            <button type="submit" style={submitButton} onMouseOver={(e) => e.target.style = submitButtonHover} onMouseOut={(e) => e.target.style = submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
