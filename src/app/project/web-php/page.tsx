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

function ProjectPHPPage() {
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
                          src="/assets/img/php-project/php-project-1.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-2.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-4.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-5.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-6.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-7.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-9.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-10.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-11.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/php-project/php-project-12.png"
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
                      src="/assets/img/php-project/php-project-8.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/php-project/php-project-5.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/php-project/php-project-7.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/php-project/php-project-2.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>
                  Hotel Booking System (Clone of SaigonHotel.com)
                </h2>
                <p className={cx("project-summary")}>
                  The Hotel Booking System is a web application developed using
                  pure PHP that replicates the core functionalities of
                  SaigonHotel.com. The platform is designed to streamline the
                  hotel reservation process for customers while providing an
                  intuitive management interface for administrators. It provide:
                  Room Booking – Customers can view rooms, check availability,
                  and make reservations. Admin Management – Admins can manage
                  rooms (CRUD), handle bookings, and view statistics.
                </p>
                <ul className={cx("project-meta")}>
                  <li>
                    <strong>🕒 Duration:</strong> Nov 2023 – Jan 2024
                  </li>
                  <li>
                    <strong>🎓 Instructors:</strong> tintt@uit.edu.vn
                  </li>
                  <li>
                    <strong>⚙️ Language:</strong> PHP, HTML/CSS, SQL,JavaScript
                  </li>
                  <li>
                    <strong>🔁 Project Management:</strong> Google Docs, Google
                    Sheet
                  </li>
                  <li>
                    <strong>📂 Repository:</strong>{" "}
                    <a
                      href="https://github.com/HuyNguyenCode/hotel_booking.git"
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
                          Pure PHP for request handling and server-side logic
                        </li>
                        <li>
                          MySQL database for storing rooms, bookings, and admin
                          data
                        </li>
                        <li>
                          Session management for user login/logout and admin
                          authentication
                        </li>
                        <li>CRUD operations for rooms and booking records</li>
                        <li>Role-based access (Customer vs Admin)</li>
                        <li>
                          Email confirmation for reservations (using PHP mail()
                          or SMTP integration)
                        </li>
                      </ul>
                    </div>
                    <div className={cx("tech-column")}>
                      <h4>Frontend</h4>
                      <ul>
                        <li>
                          HTML5, CSS3, JavaScript for UI rendering and
                          interactivity
                        </li>
                        <li>Tailwind CSS & Radix UI for modern UI</li>
                        <li>Room listing with availability check</li>
                        <li>Booking form with input validation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={cx("feature-tech")}>
                  <h3>Feature Overview</h3>
                  <div className={cx("tech-grid")}>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Customer Features</div>
                      <div className={cx("description")}>
                        <ul>
                          <li>
                            Browse available rooms with details (price, type,
                            availability).
                          </li>
                          <li>Search and filter rooms by date and category.</li>
                          <li>
                            Make a room reservation through a booking form.
                          </li>
                          <li>
                            Receive email confirmation after successful booking.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Admin Features</div>
                      <div className={cx("description")}>
                        <ul>
                          <li>Secure login for administrators.</li>
                          <li>Dashboard to view and manage reservations.</li>
                          <li>
                            View booking details and customer information.
                          </li>
                          <li>
                            CRUD management for rooms (add, update, delete,
                            list).
                          </li>
                        </ul>
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
                        <li>Lead UX/UI layout: Auth, Home, Admin</li>
                        <li>Lead role: 25% technical, 90% frontend core</li>
                      </ul>
                    </div>
                    <div className={cx("responsibility-category")}>
                      <h4>Frontend Development</h4>
                      <ul>
                        <li>
                          Designed and implemented the UX/UI for the entire
                          admin panel, ensuring a clean, intuitive, and
                          responsive interface.
                        </li>
                        <li>
                          Developed all admin-related modules, including room
                          management, reservation management, and user/booking
                          data overview.
                        </li>
                        <li>
                          Implemented CRUD functionality for rooms and bookings,
                          ensuring data integrity and usability.
                        </li>
                        <li>
                          Optimized admin workflows to simplify management tasks
                          and improve operational efficiency.
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
                          <td>21522109</td>
                          <td>Từ Thị Huệ </td>
                          <td>tuthihue</td>
                          <td>
                            - Designed and implemented the database schema for
                            rooms, bookings, users, and reservations to ensure
                            data integrity and scalability.
                            <br />
                            - Developed backend logic to handle room booking,
                            availability checks, and admin operations.
                            <br />
                            - Implemented email confirmation system for
                            reservations using SMTP.
                            <br />
                            -Handled server-side validation, authentication, and
                            session management for both admin and customer
                            modules.
                            <br />- Optimized database queries and backend
                            performance to ensure fast response times.
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

export default ProjectPHPPage;
