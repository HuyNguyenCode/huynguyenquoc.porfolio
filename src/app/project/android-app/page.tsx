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

function ProjectFullstackPage() {
  return (
    <>
      <section className="home tab-pane active">
        <div className={cx("project-wrapper")}>
          <div className={cx("container")}>
            <div className={cx("project-content")}>
              <div className={cx("project-image-wrapper")}>
                <div className={cx("project-image-left")}>
                  <Swiper
                    className={cx("swiper-container")}
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-1.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-2.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-3.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-4.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-5.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-6.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-7.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-8.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-9.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-10.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-11.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-12.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-13.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-14.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/aa-project/aa-project-15.jpg"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={cx("project-image-right")}>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/aa-project/aa-project-8.jpg"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/aa-project/aa-project-5.jpg"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/aa-project/aa-project-7.jpg"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/aa-project/aa-project-2.jpg"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>
                  Android Course Project: Indoor Air Quality Monitoring
                  Application
                </h2>
                <p className={cx("project-summary")}>
                  This project is an Android application developed in Java,
                  designed to monitor indoor air quality in real time. The app
                  collects data from cloud-connected devices that measure
                  parameters such as temperature, humidity, CO₂ levels, and
                  particulate matter (PM2.5). Users can view both live readings
                  and historical trends through a user-friendly interface. The
                  system also provides real-time alerts when air quality exceeds
                  predefined or custom thresholds. Key features include
                  background services for continuous monitoring, push
                  notifications, and a local database for offline data storage.
                  Optional cloud integration and advanced analytics can further
                  enhance insights and decision-making.
                </p>
                <ul className={cx("project-meta")}>
                  <li>
                    <strong>🕒 Duration:</strong> Sep 2023 – Dec 2023
                  </li>
                  <li>
                    <strong>🎓 Instructors:</strong> tanth@uit.edu.vn
                  </li>
                  <li>
                    <strong>⚙️ Language:</strong> Java, XML
                  </li>
                  <li>
                    <strong>🔁 Project Management:</strong> Google Sheet, Google
                    Docs
                  </li>
                  <li>
                    <strong>📂 Repository:</strong>{" "}
                    <a
                      href="https://github.com/mintee56/WeatherNow"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </li>
                </ul>
                <div className={cx("project-tech-requirements")}>
                  <h3>Technical Requirements</h3>
                  <div className={cx("tech-grid")}>
                    <div className={cx("tech-column")}>
                      <h4>Backend</h4>
                      <ul>
                        <li>
                          Integration with IoT/cloud-connected sensors via REST
                          API or MQTT
                        </li>
                        <li>Android Services for continuous data collection</li>
                        <li>
                          SQLite or Room Persistence Library for offline data
                          storage.
                        </li>
                        <li>
                          Real-time calculation and threshold checking for
                          alerts
                        </li>
                        <li>
                          Firebase/Google Cloud for backup and synchronization
                        </li>
                        <li>
                          Firebase Auth or custom token-based authentication
                        </li>
                        <li>
                          Secure data transmission via HTTPS for sharing with
                          trusted contacts
                        </li>
                      </ul>
                    </div>
                    <div className={cx("tech-column")}>
                      <h4>Frontend</h4>
                      <ul>
                        <li>Java with Android SDK</li>
                        <li>
                          XML layouts for screens (Login, Dashboard, Charts,
                          Settings)
                        </li>
                        <li>
                          Material Design components for consistent user
                          experience
                        </li>
                        <li>
                          Integration of Android Chart libraries (e.g.,
                          MPAndroidChart)
                        </li>
                        <li>
                          Android Notification Manager for real-time alerts
                        </li>
                        <li>
                          Multi-language support via Android resource files
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={cx("feature-tech")}>
                  <h3>Feature Overview — UIT Social Network</h3>
                  <div className={cx("tech-grid")}>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>User Authentication</div>
                      <div className={cx("description")}>
                        Sign up, login, and logout with token.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Main Dashboard</div>
                      <div className={cx("description")}>
                        Displays real-time air quality metrics (temperature,
                        humidity, pollutants).
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Data Visualization</div>
                      <div className={cx("description")}>
                        Graphs and charts for historical trends.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>
                        Settings & Preferences
                      </div>
                      <div className={cx("description")}>
                        Customizable thresholds, alerts, and display options.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Sensor Integration</div>
                      <div className={cx("description")}>
                        Communication with IoT air quality sensors
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>
                        Background Data Collection
                      </div>
                      <div className={cx("description")}>
                        Continuous monitoring even when app is inactive.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Local Data Storage</div>
                      <div className={cx("description")}>
                        Offline access to stored data.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Real-Time Processing</div>
                      <div className={cx("description")}>
                        Instant updates on air quality parameters.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>
                        Threshold-Based Alerts
                      </div>
                      <div className={cx("description")}>
                        Triggered when parameters exceed set values.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Timely Notifications</div>
                      <div className={cx("description")}>
                        Immediate delivery of important alerts.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>
                        Multi-language Support
                      </div>
                      <div className={cx("description")}>
                        At least one additional language.
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx("responsibilities-section")}>
                  <h3>Key Responsibilities</h3>
                  <div className={cx("responsibility-grid")}>
                    <div className={cx("responsibility-category")}>
                      <h4>Project Management</h4>
                      <ul>
                        <li>Planning, assigning tasks, QA, acceptance</li>
                        <li>Lead UX/UI layout: Auth, Home, Setting</li>
                        <li>Documentation: SRS, BRD, FSD</li>
                        <li>
                          Testing: manual & automated (functional,
                          non-functional)
                        </li>
                      </ul>
                    </div>
                    <div className={cx("responsibility-category")}>
                      <h4>Frontend Development</h4>
                      <ul>
                        <li>
                          Design and implement core UI screens (Login,
                          Registration, Dashboard).
                        </li>
                        <li>
                          Ensure smooth navigation flow between app modules.
                        </li>
                        <li>
                          Implement secure login & session management (consume
                          provided API).
                        </li>
                        <li>
                          Apply Material Design principles for consistency and
                          usability.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <section className={cx("project-members")}>
                  <h2 className={cx("section-title")}>👥 Project Members</h2>
                  <div className={cx("table-wrapper")}>
                    <table className={cx("members-table")}>
                      <thead>
                        <tr>
                          <th>Student ID</th>
                          <th>Full Name</th>
                          <th>GitHub Username</th>
                          <th>Responsibilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>21521643</td>
                          <td>Đào Minh Tuệ</td>
                          <td>mintee56</td>
                          <td>
                            - Integrate real-time data visualization using
                            charts/graphs (e.g., MPAndroidChart).
                            <br />
                            - Display historical data trends in the app. voting
                            <br />
                            - Implement local storage (SQLite/Room) for offline
                            access.
                            <br />- Handle threshold-based alerts and push
                            notifications.
                          </td>
                        </tr>
                        <tr>
                          <td>21521896</td>
                          <td>Nguyễn Minh Công</td>
                          <td></td>
                          <td>
                            - Develop Settings & Preferences module (customize
                            thresholds, metrics, alerts).
                            <br />
                            - Implement multi-language support with Android
                            resource files.
                            <br />
                            - Implemented APIs for upvoted/downvoted posts
                            <br />
                            - Add QR code scanner feature for device
                            registration.
                            <br />- Enable sharing data with trusted contacts
                            via app.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProjectFullstackPage;
