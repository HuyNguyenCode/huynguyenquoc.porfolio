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
                          src="/assets/img/fs-project-1.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/fs-project-4.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/fs-project-5.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/fs-project-6.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/fs-project-7.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/fs-project-8.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/fs-project/fs-project-9.png"
                          alt="Jackson Levi"
                          fill
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={cx("swiper-image")}>
                        <Image
                          className={cx("project-image")}
                          src="/assets/img/fs-project/fs-project-10.png"
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
                      src="/assets/img/fs-project/fs-project-4.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/fs-project/fs-project-5.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/fs-project/fs-project-7.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                  <div className={cx("project-image-grid")}>
                    <Image
                      className={cx("project-image")}
                      src="/assets/img/fs-project/fs-project-8.png"
                      alt="Jackson Levi"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>
                  UIT Social Network - Collab Sphere
                </h2>
                <p className={cx("project-summary")}>
                  The project "Social network UIT - Collab Sphere" builds a
                  social networking platform for UIT students, inspired by
                  Reddit. Authentication support system and user management.
                  Users can post articles (with images), perform crud post,
                  upvote, downvote, comment and search for articles. Personal
                  page displays the list of articles, comments, articles
                  upvote/downvote and allows updating personal information. The
                  system also includes messaging function (chat & Messaging
                  System), account installation, and other user tracking,
                  creating an interactive environment, exchange and connection
                  between students studying at UIT school.
                </p>
                <ul className={cx("project-meta")}>
                  <li>
                    <strong>🕒 Duration:</strong> Aug 2023 – Dec 2023
                  </li>
                  <li>
                    <strong>🎓 Instructors:</strong> sangvm@uit.edu.vn
                  </li>
                  <li>
                    <strong>⚙️ Language:</strong> C#, TypeScript, CSS, SQL
                  </li>
                  <li>
                    <strong>🔁 Project Management:</strong> Jira, Google Sheet
                  </li>
                  <li>
                    <strong>📂 Repository FE:</strong>{" "}
                    <a
                      href="https://github.com/HuyNguyenCode/social_network_uit"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </li>
                  <li>
                    <strong>📂 Repository BE:</strong>{" "}
                    <a
                      href="https://github.com/ngntu10/CollabSphere"
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
                        <li>.NET 8 + ASP.NET Core to build RESTful API</li>
                        <li>
                          Entity Framework Core + MySQL for data manipulation
                        </li>
                        <li>
                          Authentication & Authorization with JWT + ASP.NET Core
                          Identity
                        </li>
                        <li>Real-time communication using SignalR</li>
                        <li>AutoMapper for DTO ↔ Entity mapping</li>
                        <li>Validation using FluentValidation</li>
                        <li>
                          SMTP Mail (MailKit, MimeKit) for email verify &
                          password reset
                        </li>
                        <li>API docs with Swagger (OpenAPI)</li>
                        <li>Docker + Docker Compose for containerization</li>
                        <li>CORS config for secure FE ↔ BE communication</li>
                      </ul>
                    </div>
                    <div className={cx("tech-column")}>
                      <h4>Frontend</h4>
                      <ul>
                        <li>Next.js 15 + React 19 + TypeScript</li>
                        <li>Tailwind CSS & Radix UI for modern UI</li>
                        <li>
                          CKEditor for rich text editor, Cloudinary for image
                          hosting
                        </li>
                        <li>
                          Axios for API calls, SignalR + Socket.io for real-time
                        </li>
                        <li>React Hook Form + Zod for form validation</li>
                        <li>Redux Toolkit / Zustand for state management</li>
                        <li>Auth token management with JS Cookie</li>
                        <li>
                          Prettier + Husky for code format & git hook checking
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
                        Sign up, login, and logout with JWT-based
                        authentication, role-based access control (Admin,
                        Moderator, User).
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>
                        Post Creation & Editing
                      </div>
                      <div className={cx("description")}>
                        Create, edit, and delete posts with rich text editor
                        (CKEditor) and image upload support.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>
                        Home Feed & Post Ranking
                      </div>
                      <div className={cx("description")}>
                        Showing Popular, Following and Recent posts with
                        infinite scroll, lazy loading, and post ranking based on
                        upvotes/downvotes.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>
                        User Profile Management
                      </div>
                      <div className={cx("description")}>
                        View and edit of user's posts, comments,
                        upvoted/downvoted posts
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>User Settings</div>
                      <div className={cx("description")}>
                        View and edit personal information, upload profile
                        picture via Cloudinary integration.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>User Following System</div>
                      <div className={cx("description")}>
                        Follow, Unfollow, and Block users to customize feed and
                        interactions. Display list of followers and following
                        and search for another users.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Voting System</div>
                      <div className={cx("description")}>
                        Upvote / downvote posts and comments to promote quality
                        content and influence ranking in feeds.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Comment & Reply</div>
                      <div className={cx("description")}>
                        Threaded comments with edit/delete capability,
                        notifications for replies and mentions.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Real-time Chat</div>
                      <div className={cx("description")}>
                        Instant messaging between users powered by SignalR /
                        WebSockets with typing & presence indicators.
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Search & Filter</div>
                      <div className={cx("description")}>
                        Fast search for posts, users and communities with
                        filters (date, popularity, tags).
                      </div>
                    </div>

                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Dockerized Deployment</div>
                      <div className={cx("description")}>
                        Docker + Docker Compose for consistent
                        dev/staging/production deployments.
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
                        <li>Lead UX/UI layout: Auth, Home, Profile, Chat</li>
                        <li>Lead role: 25% technical, 90% frontend core</li>
                      </ul>
                    </div>
                    <div className={cx("responsibility-category")}>
                      <h4>Frontend Development</h4>
                      <ul>
                        <li>
                          Responsive UI with Next.js, Tailwind CSS, Bootstrap
                        </li>
                        <li>Reusable components: posts, comments, votes</li>
                        <li>Infinite scroll, lazy load, SSR with Next.js</li>
                        <li>SEO, accessibility, mobile responsiveness</li>
                        <li>Auth/session via JWT & Cookies</li>
                      </ul>
                    </div>
                    <div className={cx("responsibility-category")}>
                      <h4>Authentication & Middleware</h4>
                      <ul>
                        <li>Route protection & session middleware</li>
                        <li>Login, Register, Session refresh logic</li>
                        <li>Role-based authorization logic</li>
                      </ul>
                    </div>
                    <div className={cx("responsibility-category")}>
                      <h4>API Integration & State Management</h4>
                      <ul>
                        <li>CRUD APIs: users, posts, comments, votes</li>
                        <li>
                          Real-time communication with SignalR & Socket.IO
                        </li>
                        <li>State management: Redux Toolkit or Zustand</li>
                        <li>Form validation with React Hook Form + Zod</li>
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
                          <td>21522566</td>
                          <td>Nguyễn Hữu Tài</td>
                          <td>TaiSmilee</td>
                          <td>
                            - Built APIs: CRUD for comments, posts, follows
                            <br />
                            - Designed backend logic for comments and post
                            voting
                            <br />
                            - Created system diagrams to support development
                            <br />
                            - Generated mock data for feature testing
                            <br />- Fixed bugs and updated JSON based on PM
                            feedback
                          </td>
                        </tr>
                        <tr>
                          <td>20521075</td>
                          <td>Nguyễn Vân Anh</td>
                          <td>vananh3040</td>
                          <td>
                            - Designed UI/UX for search, user profile, and
                            settings pages
                            <br />
                            - Integrated API: Post CRUD
                            <br />
                            - Performed manual & automated testing (functional &
                            non-functional)
                            <br />
                            - QA/QC: Maintained checklists and reported bugs
                            <br />- Wrote documents: SRS, BRD, FSD to align with
                            project goals
                          </td>
                        </tr>
                        <tr>
                          <td>22521593</td>
                          <td>Phạm Nguyên Tú</td>
                          <td>ngntu10</td>
                          <td>
                            - Designed software architecture and database
                            <br />
                            - Managed backend GitHub repository
                            <br />
                            - Deployed database on Digital Ocean
                            <br />
                            - Set up environment, libraries & Docker
                            configuration
                            <br />
                            - Deployed backend with Nginx & Docker Compose
                            <br />
                            - Built authentication & authorization (email, OTP)
                            <br />
                            - Managed images/resources with Cloudinary
                            <br />
                            - Wrote Swagger UI API docs
                            <br />- Built SignalR-based messaging functions
                          </td>
                        </tr>
                        <tr>
                          <td>22520314</td>
                          <td>Huỳnh Nhật Duy</td>
                          <td>iamnzuy</td>
                          <td>
                            - Designed UI/UX for post and following pages
                            <br />
                            - Built user profile API
                            <br />
                            - Implemented APIs for upvoted/downvoted posts
                            <br />
                            - Drafted following/block user APIs
                            <br />
                            - Configured Cloudinary and its components
                            <br />- Integrated WYSIWYG editor for post content
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
