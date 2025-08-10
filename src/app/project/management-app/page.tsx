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

function ProjectManagementAppPage() {
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
                          src="/assets/img/m-project/m-project-1.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-2.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-3.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-4.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-5.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-6.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-7.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-8.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-9.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-10.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-11.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/m-project/m-project-12.png"
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
                      src="/assets/img/m-project/m-project-12.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/m-project/m-project-2.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/m-project/m-project-9.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/m-project/m-project-5.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>
                  Library Management Application
                </h2>
                <p className={cx("project-summary")}>
                  A desktop-based application built with pure Java and JavaFX to
                  manage bookstore operations. The system provides an intuitive
                  graphical interface for CRUD operations on books, staff,
                  suppliers, and book entries. It supports invoice creation,
                  printing, and detailed invoice viewing for efficient
                  transaction management.
                </p>
                <ul className={cx("project-meta")}>
                  <li>
                    <strong>🕒 Duration:</strong> Feb 2023 – May 2023
                  </li>
                  <li>
                    <strong>🎓 Instructors:</strong> sangvm@uit.edu.vn
                  </li>
                  <li>
                    <strong>⚙️ Language:</strong> Java, CSS, SQL
                  </li>
                  <li>
                    <strong>🔁 Project Management:</strong> Google Sheet, Google
                    Docs
                  </li>
                  <li>
                    <strong>📂 Repository FE:</strong>{" "}
                    <a
                      href="https://github.com/HuyNguyenCode/Java-Project.git"
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
                        <li>Language: Java (Core Java + JDBC)</li>
                        <li>Database: SQL Server (Latest version)</li>
                        <li>
                          Database Schema:
                          <ul style={{ marginLeft: "30px" }}>
                            <li>
                              books (id, title, author, category, price, stock)
                            </li>
                            <li>staffs (id, name, role, contact, email)</li>
                            <li>suppliers (id, name, contact, address)</li>
                            <li>
                              book_entries (id, book_id, supplier_id, quantity,
                              date)
                            </li>
                            <li>invoices (id, date, total_amount, staff_id)</li>
                            <li>
                              invoice_details (invoice_id, book_id, quantity,
                              price)
                            </li>
                          </ul>
                        </li>
                        <li>
                          Business Logic:
                          <ul style={{ marginLeft: "30px" }}>
                            <li>CRUD for all entities</li>
                            <li>
                              Auto-update stock after book entry or sales{" "}
                            </li>
                            <li>Calculate invoice totals dynamically</li>
                            <li>Print invoice as PDF/physical</li>
                          </ul>
                        </li>
                        <li>
                          Security: SQL injection prevention, input sanitization
                        </li>
                        <li style={{ borderBottom: "none" }}>
                          Deployment: Runnable JAR file, requires MySQL server
                        </li>
                      </ul>
                    </div>
                    <div className={cx("tech-column")}>
                      <h4>Frontend</h4>
                      <ul>
                        <li>Technology: JavaFX</li>
                        <li>UI Builder: Scene Builder (FXML)</li>
                        <li>JDK: Java Development Kit 11+</li>
                        <li>
                          UI Components: TableView, TextField, Button,
                          DatePicker, ComboBox, Pagination
                        </li>
                        <li>
                          Styling: CSS for JavaFX (custom themes, hover effects,
                          and responsive layouts)
                        </li>
                        <li>
                          Print Functionality: Java Print Service API
                          integration for invoice printing
                        </li>
                        <li>
                          Error Handling: UI alerts for invalid input or failed
                          operations
                        </li>
                        <li>
                          Navigation: Multi-scene structure for Books, Staffs,
                          Suppliers, Book Entry, Invoices
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={cx("feature-tech")}>
                  <h3>Key Features</h3>
                  <div className={cx("tech-grid")}>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>User Authentication</div>
                      <div className={cx("description")}>
                        Sign up, login, and logout functionality with session
                        management.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Books Management:</div>
                      <div className={cx("description")}>
                        Add, update, delete, and search books with relevant
                        details.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Staff Management</div>
                      <div className={cx("description")}>
                        Maintain staff records including roles and contact
                        information.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Supplier Management</div>
                      <div className={cx("description")}>
                        Manage supplier information for inventory sourcing
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Book Entry</div>
                      <div className={cx("description")}>
                        Record incoming stock and update inventory
                        automatically.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Invoice Management</div>
                      <div className={cx("description")}>
                        Create, print, and store sales invoices.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Invoice Details View:</div>
                      <div className={cx("description")}>
                        Display itemized breakdown of sold products in each
                        invoice.
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx("responsibilities-section")}>
                  <h3>Key Responsibilities</h3>
                  <div className={cx("responsibility-grid")}>
                    <div className={cx("responsibility-category")}>
                      <h4>Frontend Development</h4>
                      <ul>
                        <li>
                          Designed and implemented the user interface using
                          JavaFX and Scene Builder.
                        </li>
                        <li>
                          Built reusable UI components for Books, Staffs,
                          Suppliers, Book Entry, and Invoices management.
                        </li>
                        <li>
                          Created multi-scene navigation with smooth transitions
                          between modules.
                        </li>
                        <li>
                          Implemented form validation and input error handling.
                        </li>
                        <li>
                          Developed invoice printing interface integrated with
                          Java Print Service API.
                        </li>
                      </ul>
                    </div>
                    <div className={cx("responsibility-category")}>
                      <h4>Business Logic</h4>
                      <ul>
                        <li>
                          Implemented CRUD functionalities for all modules with
                          proper data binding.
                        </li>
                        <li>
                          Developed logic for real-time invoice total
                          calculation and automatic stock updates.
                        </li>
                        <li>
                          Applied business rules for invoice creation, book
                          entry, and supplier management.
                        </li>
                        <li>
                          Coordinated with backend developer to define method
                          signatures and data exchange formats.
                        </li>
                        <li>
                          Integrated search and filtering functions to improve
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
                          <td>21522328</td>
                          <td>Ngô Văn Mạnh</td>
                          <td>NGOVANMANH</td>
                          <td>
                            - Designed SQLServer database schema for books,
                            staffs, suppliers, invoices, and related entities.
                            <br />
                            - Implemented data access layer using JDBC with
                            PreparedStatement for SQL injection prevention.
                            <br />
                            - Developed backend logic for CRUD operations on all
                            entities.
                            <br />
                            - Created business rules to auto-update book stock
                            upon purchase or book entry.
                            <br />- Implemented invoice detail retrieval and
                            data aggregation for reporting.
                            <br />- Handled database optimization, indexing, and
                            relationship constraints.
                            <br />- Integrated backend with frontend by exposing
                            methods for data retrieval and updates.
                          </td>
                        </tr>
                        <tr>
                          <td>21521475</td>
                          <td>Trần Phúc Thịnh</td>
                          <td>-</td>
                          <td>
                            - Project Management: Planning, assigning tasks
                            <br />
                            - QA/QC: Maintained checklists and reported bugs
                            voting
                            <br />
                            - Wrote documents: SRS, BRD, FSD to align with
                            project goals
                            <br />- Performed manual & automated testing
                            (functional & non-functional)
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

export default ProjectManagementAppPage;
