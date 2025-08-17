"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const PortfolioSection = () => {
  const showInformPortfolioToast = () => {
    alert(
      "We apologize for the inconvenience; please be patient as we finish up to complete the external links."
    );
  };
  const router = useRouter();

  const goToProjectPage = (slug: string) => {
    router.push(`/project/${slug}`);
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
              src="/assets/img/Portfolio_background_img_2.png"
              alt=""
              className="porfolio-card_background"
              width={400}
              height={250}
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">Web Full-stack</h1>
              <p className="portfolio-card_text">
                A website about specialized social networks for UIT students,
                completed fullStack with .NET and Nextjs
              </p>
              <button
                onClick={() => goToProjectPage("fullstack-web")}
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
              <h1 className="portfolio-card_heading">Landing page Design</h1>
              <p className="portfolio-card_text">
                Several UX/UI projects I've completed using HTML, CSS, and
                ReactJS.
              </p>
              <button
                onClick={() => goToProjectPage("web-design")}
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
              src="./assets/img/Portfolio_background_img_4.png"
              alt=""
              className="porfolio-card_background"
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">
                Java Management application
              </h1>
              <p className="portfolio-card_text">
                This is a library management application project on Desktop
                using javafx
              </p>
              <button
                onClick={() => goToProjectPage("management-app")}
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
            <img
              src="./assets/img/Portfolio_background_img_5.png"
              alt=""
              className="porfolio-card_background"
            />
            <div className="portfolio-card_content">
              <h1 className="portfolio-card_heading">PHP Web Full-stack</h1>
              <p className="portfolio-card_text">
                This is a pure PHP project—a website for hotel booking and
                management, and admin management functionalities.
              </p>
              <button
                onClick={() => goToProjectPage("web-php")}
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
    </section>
  );
};

export default PortfolioSection;
