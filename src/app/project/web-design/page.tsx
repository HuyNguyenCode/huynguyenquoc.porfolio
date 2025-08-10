"use client";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import styles from "../project.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectLandingPage() {
  return (
    <>
      <section className="home tab-pane active">
        <div className={cx("project-wrapper")}>
          <div className={cx("container")}>
            <div className={cx("project-content")}>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>Alehub Landing Page</h2>
                <div className={cx("project-detail-wrapper")}>
                  <div className={cx("project-detail-left")}>
                    <Swiper
                      className={cx("swiper-container")}
                      modules={[Navigation, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      navigation
                      pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-1.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-2.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-3.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-4.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-5.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-6.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-7.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-8.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <p className={cx("project-summary")}>
                      Alehub is a landing page for showcasing HR outsourcing and
                      sales training services, built with ReactJS and Firebase.
                    </p>{" "}
                    <ul className={cx("project-meta")}>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🕒 Time:</span> Aug
                        15 2023
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🤝 Customer:</span>{" "}
                        Alehub
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>⚙️ Language:</span>{" "}
                        JavaScript, HTML, CSS
                      </li>

                      <li>
                        <span style={{ fontWeight: "Bold" }}>💻 Demo:</span>{" "}
                        <a
                          href="https://landingpage-alehub-demo.firebaseapp.com/"
                          target="_blank"
                        >
                          View on Firebase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("project-detail-right")}>
                    <div className={cx("project-tech-requirements")}>
                      <div className={cx("tech-grid")}>
                        <div className={cx("tech-column")}>
                          <h4>Responsibilities</h4>
                          <ul>
                            <li>
                              Designed full landing page layout based on
                              client’s brand identity.
                            </li>
                            <li>
                              Implemented responsive UI for all screen sizes.
                            </li>
                            <li>Integrated animations using Framer Motion.</li>
                            <li>
                              Optimized asset loading and performance on
                              Firebase.
                            </li>
                            <li>
                              Handled multi-section navigation and
                              call-to-action anchors.
                            </li>
                          </ul>
                        </div>
                        <div className={cx("tech-column")}>
                          <h4>Technical Requirements</h4>
                          <ul>
                            <li>Image optimization for faster loading.</li>
                            <li>
                              High performance scores in Lighthouse (95+).
                            </li>
                            <li>SEO-optimized with proper metadata.</li>
                            <li>Custom SCSS and modular CSS structure.</li>
                            <li>Deployable with Firebase CLI.</li>
                            <li>
                              Cross-browser compatibility (Chrome, Safari,
                              Firefox, Edge).
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>Worlkkey Landing Page</h2>
                <div className={cx("project-detail-wrapper")}>
                  <div className={cx("project-detail-left")}>
                    <Swiper
                      className={cx("swiper-container")}
                      modules={[Navigation, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      navigation
                      pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-9.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-10.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                    </Swiper>
                    <p className={cx("project-summary")}>
                      Woldkey is a landing page for purchasing apple devices
                      built with ReactJS and Firebase.
                    </p>{" "}
                    <ul className={cx("project-meta")}>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🕒 Time:</span> Aug
                        7 2023
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🤝 Customer:</span>{" "}
                        Worldkeys
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>⚙️ Language:</span>{" "}
                        JavaScript, HTML, CSS
                      </li>

                      <li>
                        <span style={{ fontWeight: "Bold" }}>💻 Demo:</span>{" "}
                        <a
                          href="https://worldkeys-demo-c243b.web.app/"
                          target="_blank"
                        >
                          View on Firebase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("project-detail-right")}>
                    <div className={cx("project-tech-requirements")}>
                      <div className={cx("tech-grid")}>
                        <div className={cx("tech-column")}>
                          <h4>Responsibilities</h4>
                          <ul>
                            <li>
                              Built static landing page from design concept.
                            </li>
                            <li>
                              Applied responsive layout for all screen sizes.
                            </li>
                            <li>
                              Added interactive navigation with smooth scroll.
                            </li>
                            <li>
                              Optimized images and assets for performance.
                            </li>
                            <li>Hosted demo on Firebase for preview.</li>
                          </ul>
                        </div>
                        <div className={cx("tech-column")}>
                          <h4>Technical Requirements</h4>
                          <ul>
                            <li>HTML5 & CSS3 with Flexbox/Grid.</li>

                            <li>Lightweight JavaScript for interactivity.</li>
                            <li>Cross-browser compatibility.</li>
                            <li>Deployable with Firebase CLI.</li>
                            <li>Performance score ≥ 90 on Lighthouse.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>
                  English Course Landing Page
                </h2>
                <div className={cx("project-detail-wrapper")}>
                  <div className={cx("project-detail-left")}>
                    <Swiper
                      className={cx("swiper-container")}
                      modules={[Navigation, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      navigation
                      pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-11.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-12.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                    </Swiper>
                    <p className={cx("project-summary")}>
                      English Course Landing Page is a responsive landing page
                      based on Coursera landing page for English Course, built
                      with ReactJS and Firebase.
                    </p>{" "}
                    <ul className={cx("project-meta")}>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🕒 Time:</span> Aug
                        10 2023
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🤝 Customer:</span>{" "}
                        English Course
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>⚙️ Language:</span>{" "}
                        JavaScript, HTML, CSS
                      </li>

                      <li>
                        <span style={{ fontWeight: "Bold" }}>💻 Demo:</span>{" "}
                        <a
                          href="https://english-courses-demo.web.app/"
                          target="_blank"
                        >
                          View on Firebase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("project-detail-right")}>
                    <div className={cx("project-tech-requirements")}>
                      <div className={cx("tech-grid")}>
                        <div className={cx("tech-column")}>
                          <h4>Responsibilities</h4>
                          <ul>
                            <li>
                              Designed and developed a landing page to promote
                              an English language course.
                            </li>
                            <li>
                              Implemented clear call-to-action buttons for
                              enrollment.
                            </li>
                            <li>
                              Created sections for course details, schedule, and
                              testimonials.
                            </li>
                            <li>Integrated contact form for inquiries.</li>
                            <li>
                              Deployed and tested demo version on Firebase.
                            </li>
                          </ul>
                        </div>
                        <div className={cx("tech-column")}>
                          <h4>Technical Requirements</h4>
                          <ul>
                            <li>HTML5, CSS3, and Vanilla JavaScript.</li>
                            <li>Custom SCSS and modular CSS structure.</li>
                            <li>
                              Smooth scroll and simple animations (CSS
                              transitions).
                            </li>
                            <li>
                              Optimized loading speed for fast user experience.
                            </li>
                            <li>Deployable with Firebase CLI.</li>
                            <li>
                              Cross-browser compatibility (Chrome, Safari,
                              Firefox, Edge).
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>
                  Beauty Product Landing Page
                </h2>
                <div className={cx("project-detail-wrapper")}>
                  <div className={cx("project-detail-left")}>
                    <Swiper
                      className={cx("swiper-container")}
                      modules={[Navigation, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      navigation
                      pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-13.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-14.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className={cx("swiper-image")}>
                          <Image
                            className={cx("project-image")}
                            src="/assets/img/lp-project/lp-project-15.png"
                            alt="Jackson Levi"
                            fill
                          />
                        </div>
                      </SwiperSlide>{" "}
                    </Swiper>
                    <p className={cx("project-summary")}>
                      This is a responsive landing page for showcasing deatail
                      and call to action for beauty product, built with ReactJS
                      and Firebase.
                    </p>{" "}
                    <ul className={cx("project-meta")}>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🕒 Time:</span> Aug
                        8 2023
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>🤝 Customer:</span>{" "}
                        Beauty Product
                      </li>
                      <li>
                        <span style={{ fontWeight: "Bold" }}>⚙️ Language:</span>{" "}
                        JavaScript, HTML, CSS
                      </li>

                      <li>
                        <span style={{ fontWeight: "Bold" }}>💻 Demo:</span>{" "}
                        <a
                          href="https://landing-page-demo-8b634.web.app/"
                          target="_blank"
                        >
                          View on Firebase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("project-detail-right")}>
                    <div className={cx("project-tech-requirements")}>
                      <div className={cx("tech-grid")}>
                        <div className={cx("tech-column")}>
                          <h4>Responsibilities</h4>
                          <ul>
                            <li>
                              Designed a visually appealing landing page to
                              promote a beauty product.
                            </li>
                            <li>
                              Highlighted product benefits, ingredients, and
                              customer reviews.
                            </li>
                            <li>
                              Implemented prominent call-to-action buttons to
                              boost conversion.
                            </li>
                            <li>
                              Added limited-time offer and discount sections.
                            </li>
                            <li>
                              Deployed and tested demo version for responsive
                              display.
                            </li>
                          </ul>
                        </div>
                        <div className={cx("tech-column")}>
                          <h4>Technical Requirements</h4>
                          <ul>
                            <li>HTML5, CSS3 (Flexbox & Grid) for layout.</li>
                            <li>
                              JavaScript for interactive elements (countdown
                              timer, modal popup).
                            </li>
                            <li>SEO-optimized with proper metadata. .</li>
                            <li>Custom SCSS and modular CSS structure.</li>
                            <li>Image optimization for faster loading.</li>
                            <li>
                              Compatible with major browsers (Chrome, Safari,
                              Firefox, Edge).
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProjectLandingPage;
