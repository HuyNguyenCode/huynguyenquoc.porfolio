"use client";
import { useRef, useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmitFormspree] = useForm("myzpjoyk");
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  const toast = ({
    title = "",
    message = "",
    type = "info",
    duration = 5000,
  }: {
    title: string;
    message: string;
    type: "success" | "info" | "warning" | "error";
    duration: number;
  }) => {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");

      const autoRemoveId = setTimeout(() => {
        main.removeChild(toast);
      }, duration + 1000);

      toast.onclick = function (e) {
        if ((e.target as HTMLElement).closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };

      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle",
      };

      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);

      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

      toast.innerHTML = `
        <div class="toast__icon"><i class="${icon}"></i></div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close"><i class="fas fa-times"></i></div>
      `;

      main.appendChild(toast);
    }
  };

  const showInformToast = () =>
    toast({
      title: "Send message successfully!",
      message: "Thank you for contacting me. I will reply soon.",
      type: "success",
      duration: 10000,
    });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const formEl = formRef.current!;
    const formData = new FormData(formEl);

    await handleSubmitFormspree(e); // Gửi tới Formspree
    if (!Array.isArray(state.errors) || state.errors.length === 0) {
      showInformToast();
      formEl.reset();
    }
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
      <form ref={formRef} className="contact-wrapper" onSubmit={handleSubmit}>
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-sendmessage form-send"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
