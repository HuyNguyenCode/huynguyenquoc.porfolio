"use client";
import Image from "next/image";
import React from "react";

const PortfolioSection = () => {
  const showInformPortfolioToast = () => {
    alert(
      "We apologize for the inconvenience; please be patient as we finish up to complete the external links."
    );
  };

  return (
    <section className="portfolio grid wide" id="project">
      <h1 className="portfolio-heading">
        My <span>Projects</span>
      </h1>

      <div className="portfolio-content hide-on-tablet row">
        <div className="col l-4 c-12">
          <div className="portfolio-card">
            <Image
              src="/assets/img/Portfolio_background_img.png"
              alt=""
              className="porfolio-card_background"
              width={400}
              height={250}
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">Application</h1>
              <p className="portfolio-card_text">
                Here are some samples of the work we've done for management
                software projects.
              </p>
              <button
                onClick={showInformPortfolioToast}
                className="btn-portfolio"
              >
                <div className="btn-icon-portfolio">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="col l-4 c-12">
          <div className="portfolio-card">
            <Image
              src="/assets/img/Portfolio_background_img_2.png"
              alt=""
              className="porfolio-card_background"
              width={400}
              height={250}
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">Web Full-stack</h1>
              <p className="portfolio-card_text">
                Here are a few full-stack web projects we've completed.
              </p>
              <button
                onClick={showInformPortfolioToast}
                className="btn-portfolio"
              >
                <div className="btn-icon-portfolio">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="col l-4 c-12">
          <div className="portfolio-card">
            <Image
              src="/assets/img/Portfolio_background_img_3.png"
              alt=""
              className="porfolio-card_background"
              width={400}
              height={250}
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">Web Design</h1>
              <p className="portfolio-card_text">
                Several UX/UI projects we completed using HTML, CSS, and
                ReactJS.
              </p>
              <button
                onClick={showInformPortfolioToast}
                className="btn-portfolio"
              >
                <div className="btn-icon-portfolio">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-content hide-on-tablet row">
        <div className="col l-4 c-12">
          <div className="portfolio-card">
            <img
              src="./assets/img/Portfolio_background_img_4.png"
              alt=""
              className="porfolio-card_background"
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">Management application</h1>
              <p className="portfolio-card_text">
                Here are some samples of the work we've done for management
                software projects.
              </p>
              <button
               onClick={showInformPortfolioToast}
                className="btn-portfolio"
              >
                <div className="btn-icon-portfolio">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col l-4 c-12">
          <div className="portfolio-card">
            <img
              src="./assets/img/Portfolio_background_img_5.png"
              alt=""
              className="porfolio-card_background"
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">Web Full-stack</h1>
              <p className="portfolio-card_text">
                Here are a few full-stack web projects we've completed.
              </p>
              <button
               onClick={showInformPortfolioToast}
                className="btn-portfolio"
              >
                <div className="btn-icon-portfolio">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col l-4 c-12">
          <div className="portfolio-card">
            <img
              src="./assets/img/Portfolio_background_img_6.png"
              alt=""
              className="porfolio-card_background"
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">Web Design</h1>
              <p className="portfolio-card_text">
                Several UX/UI projects we completed using HTML, CSS, and
                ReactJS.
              </p>
              <button
               onClick={showInformPortfolioToast}
                className="btn-portfolio"
              >
                <div className="btn-icon-portfolio">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bạn có thể copy-paste tương tự các div khác nếu cần hiển thị hết như bản gốc */}
    </section>
  );
};

export default PortfolioSection;
