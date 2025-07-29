"use client";
import { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const form = formRef.current;
    if (!form) return false;

    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phoneNumber.value.trim();

    if (!fullname) newErrors.fullname = "Please enter your full name";
    if (!email) newErrors.email = "Please enter your email";
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      newErrors.email = "Please enter a valid email";

    if (!/^\d{10}$/.test(phone))
      newErrors.phoneNumber = "Please enter a valid phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    // TODO: call API here
  };

  const renderError = (name: string) =>
    errors[name] ? (
      <span className="form-message">{errors[name]}</span>
    ) : (
      <span className="form-message"></span>
    );

  return (
    <section className="contact grid wide" id="contact">
      <div className="contact-heading">
        Contact <span>Me!</span>
      </div>
      <form
        action="https://formspree.io/f/myzpjoyk"
        method="POST"
        ref={formRef}
        className="contact-wrapper"
        onSubmit={handleSubmit}
      >
        <div className="contact-box row">
          <div className="contact-mobile form-group col l-6 m-12 c-12">
            <input
              name="fullname"
              className="contact-input"
              type="text"
              placeholder="Full Name"
            />
            {renderError("fullname")}
          </div>
          <div className="contact-mobile form-group col l-6 m-12 c-12">
            <input
              name="email"
              className="contact-input"
              type="email"
              placeholder="Email Address"
            />
            {renderError("email")}
          </div>
        </div>
        <div className="contact-box row">
          <div className="contact-mobile form-group col l-6 m-12 c-12">
            <input
              name="phoneNumber"
              className="contact-input"
              type="text"
              placeholder="Mobile Number"
            />
            {renderError("phoneNumber")}
          </div>
          <div className="contact-mobile form-group col l-6 m-12 c-12">
            <input
              name="emailSubject"
              className="contact-input"
              type="text"
              placeholder="Email Subject"
            />
            <span className="form-message"></span>
          </div>
        </div>
        <div className="contact-box row">
          <div className="contact-mobile col l-12 m-12 c-12">
            <textarea
              className="message-input"
              name="message"
              placeholder="Your Message"
              rows={10}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-sendmessage form-send">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
