"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";

export default function HomeSection() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Web Developer", "Business Analyst", "Coder"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home tab-pane active">
      <div className="grid wide">
        <div className="row home-content home-wrapper">
          <div className="col l-6 home-description">
            <div className="home-text">
              <h3>Hello, It's me</h3>
              <h1>Huy Nguyen</h1>
              <h3>
                And I'm a <span className="multiple-text"></span>
              </h3>
              <p>
                Information Systems graduate from UIT with hands-on experience
                in web development, ERP, and business analysis. Passionate about
                product management, real-world problem solving, and building
                impactful digital products. Click the buttons below to follow me
                on the social media or click the "download" button to download
                my CV.
              </p>
            </div>

            <div className="social-media">
              <a
                href="https://www.facebook.com/sirbaronmckenzie"
                style={{ "--i": 7 } as any}
              >
                <i className="bx bxl-fb fa-brands fa-square-facebook"></i>
              </a>
              <a
                href="https://github.com/HuyNguyenCode"
                style={{ "--i": 9 } as any}
              >
                <i className="bx bxl-li fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/baronnguyen111/"
                style={{ "--i": 10 } as any}
              >
                <i className="bx bxl-li fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div className="btn-group">
              <button className="btn btn-download">
                <a href="/assets/files/CV_Nguyen_Quoc_Huy.pdf" download>
                  Download CV
                </a>
              </button>
              <button className="btn btn-hireMe">
                <a href="#contact">Contact me</a>
              </button>
            </div>
          </div>

          <div className="col l-6">
            <div className="home-img">
              <Image
                style={{ borderRadius: "10%" }}
                src="/assets/img/avatar.png"
                alt="Avatar"
                width={550}
                height={550}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
