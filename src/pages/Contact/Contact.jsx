import { useState } from "react";

const Contact = () => {
  const [userDetail, setUserDetail] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("userDetail", userDetail);
      // Add your logic to send email or handle form submission here
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add your error handling logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13474.104354256517!2d71.4644659!3d30.1948466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226858d31b9d67%3A0x8e9db97bbcb6e2bc!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form onSubmit={handleEmailSubmit}>
          <div className="input-wrapper">
            <input type="text" name="fullName" className="form-input" placeholder="Full name" value={userDetail.fullName} onChange={handleChange} required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email address" value={userDetail.email} onChange={handleChange} required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" value={userDetail.message} onChange={handleChange} required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
