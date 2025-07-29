// app/components/Footer.tsx
"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    ScrollReveal?: any;
  }
}

const Footer = () => {
  useEffect(() => {
    // Load ScrollReveal script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;
    script.onload = () => {
      const sr = window.ScrollReveal?.();

      if (sr) {
        sr.reveal(
          ".home-c, .experience-heading, .services-heading, .portfolio-heading, .testimonial-heading, .contact-heading",
          {
            origin: "top",
            reset: true,
            distance: "80px",
            duration: 2000,
            delay: 200,
          }
        );

        sr.reveal(
          ".home-img img, .home-wrapper, .services-content, .portfolio-content, .testimonial-wrapper, .contact-wrapper",
          { origin: "bottom" }
        );

        sr.reveal("h3, p, .skills-card_progress", { origin: "right" });
        sr.reveal("h1", { origin: "left" });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; inspired by Codehal | All Rights Reserved</p>
        This website was inspired by{" "}
        <a
          href="https://www.youtube.com/@codehal"
          className="youtubeChannel"
          target="_blank"
        >
          "Codehal"
        </a>{" "}
        YouTube channel.
      </div>
      <div className="footer-iconTop">
        <a href="#">
          <i className="fa-sharp fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
