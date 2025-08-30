"use client";
import Footer from "@/components/Footer";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import styles from "../project.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectPythonPage() {
  return (
    <>
      <section className="home tab-pane active">
        <div className={cx("project-wrapper")}>
          <div className={cx("container")}>
            <div className={cx("project-content")}>
              <div className={cx("project-detail")}>
                <h2 className={cx("project-title")}>
                  Project: Social Network Node Classification
                </h2>
                <p className={cx("project-summary")}>
                  A data analysis project focusing on classifying nodes in
                  social networks using both traditional machine learning and
                  modern graph-based deep learning methods. Implemented Logistic
                  Regression, DeepWalk, and GraphSAGE with Python and PyTorch
                  Geometric. Results showed that GraphSAGE significantly
                  outperformed traditional approaches and DeepWalk, aligning
                  with findings from prior research. This project strengthened
                  my understanding of graph neural networks (GNNs), social
                  network analysis, and advanced node representation learning.
                </p>
                <ul className={cx("project-meta")}>
                  <li>
                    <strong>🕒 Duration:</strong> Feb 2024 – May 2024
                  </li>
                  <li>
                    <strong>🎓 Instructors:</strong> trantb@uit.edu.vn
                  </li>
                  <li>
                    <strong>⚙️ Language:</strong> Python
                  </li>
                  <li>
                    <strong>🔁 Project Management:</strong>Google Docs
                  </li>
                  <li>
                    <strong>📂 Project Documents:</strong>{" "}
                    <a
                      href="https://drive.google.com/drive/folders/14hClI6R2y0lpvPT2TUhkFhDy2qJiXiHk?usp=sharing"
                      target="_blank"
                    >
                      View on Google Drive
                    </a>
                  </li>
                  <li>
                    <strong>📂 Project Report:</strong>{" "}
                    <a
                      href="https://docs.google.com/document/d/15ecR7EffXE0v_pS37jO5ylsIicX60psBVTnqZguda58/edit?usp=sharing"
                      target="_blank"
                    >
                      View on Google Docs
                    </a>
                  </li>
                </ul>
                <div className={cx("project-tech-requirements")}>
                  <h3>Technical Requirements</h3>
                  <div className={cx("tech-grid")}>
                    <div className={cx("tech-column")}>
                      <h4>Languages & Tools</h4>
                      <ul>
                        <li>Python</li>
                        <li>NetworkX</li>
                        <li>PyTorch Geometric (PyG)</li>
                        <li>Scikit-learn</li>
                        <li>Matplotlib</li>
                      </ul>
                    </div>
                    <div className={cx("tech-column")}>
                      <h4>Models</h4>
                      <ul>
                        <li>Logistic Regression</li>
                        <li>DeepWalk</li>
                        <li>GraphSAGE</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={cx("feature-tech")}>
                  <h3>Feature Overview </h3>
                  <div className={cx("tech-grid")}>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Pipeline</div>
                      <div className={cx("description")}>
                        Built a full pipeline for node classification from
                        social network data.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Logistic Regression</div>
                      <div className={cx("description")}>
                        Implemented Logistic Regression as the baseline.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>DeepWalk</div>
                      <div className={cx("description")}>
                        Applied DeepWalk to learn node embeddings from random
                        walks.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>GraphSAGE</div>
                      <div className={cx("description")}>
                        Implemented GraphSAGE to capture high-level node
                        representations using neighborhood information.
                      </div>
                    </div>
                    <div className={cx("tech-row")}>
                      <div className={cx("feature")}>Performances</div>
                      <div className={cx("description")}>
                        Compared model performance on the same dataset.
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
                        <li>
                          Assigned and coordinated tasks among team members
                        </li>
                        <li>
                          Ensured progress tracking, deadlines, and quality of
                          deliverables
                        </li>
                        <li>Led project presentation & demo session</li>
                      </ul>
                    </div>
                    <div className={cx("responsibility-category")}>
                      <h4>Data Analyst</h4>
                      <ul>
                        <li>
                          Implemented DeepWalk algorithm for node
                          classification.
                        </li>
                        <li>
                          Prepared and delivered presentation & demo for
                          DeepWalk.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={cx("outcome")}>
                  <h3>Learning Outcomes </h3>
                  <div className={cx("outcome-grid")}>
                    <div className={cx("outcome-row")}>
                      <div className={cx("feature")}>Insight</div>
                      <div className={cx("description")}>
                        Gained insights into the differences between traditional
                        ML methods and graph-based approaches.
                      </div>
                    </div>
                    <div className={cx("outcome-row")}>
                      <div className={cx("feature")}>PyTorch Geometric</div>
                      <div className={cx("description")}>
                        Hands-on experience with PyTorch Geometric and node
                        representation learning.
                      </div>
                    </div>
                    <div className={cx("outcome-row")}>
                      <div className={cx("feature")}>GNNs</div>
                      <div className={cx("description")}>
                        Built a strong foundation for further exploration of
                        Graph Neural Networks (GNNs) in complex applications.
                      </div>
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
                          <th>Responsibilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>21521629</td>
                          <td>Ngô Anh Tuấn</td>
                          <td>
                            - Implemented Logistic Regression for baseline
                            comparison.
                            <br />
                            - Prepared and delivered presentation & demo for
                            Logistic Regression
                            <br />
                            - Acted as the main contact point between the team
                            and instructor
                            <br />
                          </td>
                        </tr>
                        <tr>
                          <td>21522610</td>
                          <td>Trần Phan Thanh Thảo</td>
                          <td>
                            - Compiled and structured the final report.
                            <br />
                            - Designed and maintained presentation slides.
                            <br />- Updated and refined project documentation.
                          </td>
                        </tr>
                        <tr>
                          <td>21522275</td>
                          <td>Lê Thị Kiều Lam</td>
                          <td>
                            - Implemented GraphSAGE algorithm for node
                            classification.
                            <br />
                            - Prepared and delivered presentation & demo for
                            GraphSAGE.
                            <br />
                            - Contributed to updating the final project report.
                            <br />- Reviewed and finalized the report & slides
                            before submission.
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

export default ProjectPythonPage;
