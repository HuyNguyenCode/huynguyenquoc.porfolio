"use client";

import React from "react";

export default function SkillsSection() {
  return (
    <section className="skills grid wide" id="skills">
      <h1 className="skills-heading">
        My <span>Skills</span>
      </h1>

      <div className="row skills-wrapper">
        {/* Coding Skills */}
        <div className="col l-6 c-12 skills-box">
          <h1 className="skills-box_heading">Technical Skills</h1>
          <div className="skills-coding">
            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">HTML/CSS/JavaScript</h3>
                <h3 className="skills-card_percent">90%</h3>
              </div>
              <div className="skills-card_progress skills-card-90"></div>
            </div>

            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">ReactJS / Next.js</h3>
                <h3 className="skills-card_percent">80%</h3>
              </div>
              <div className="skills-card_progress skills-card-80"></div>
            </div>

            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">MongoDB / MySQL </h3>
                <h3 className="skills-card_percent">65%</h3>
              </div>
              <div className="skills-card_progress skills-card-65"></div>
            </div>

            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">Git / Docker</h3>
                <h3 className="skills-card_percent">75%</h3>
              </div>
              <div className="skills-card_progress skills-card-75"></div>
            </div>
            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">REST API Integration </h3>
                <h3 className="skills-card_percent">75%</h3>
              </div>
              <div className="skills-card_progress skills-card-75"></div>
            </div>
            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">Python (Basic)</h3>
                <h3 className="skills-card_percent">50%</h3>
              </div>
              <div className="skills-card_progress skills-card-50"></div>
            </div>
          </div>
        </div>

        {/* Business Skills */}
        <div className="col l-6 c-12 skills-box">
          <h1 className="skills-box_heading">Business Skills</h1>
          <div className="skills-professional">
            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">Business Analysis</h3>
                <h3 className="skills-card_percent">95%</h3>
              </div>
              <div className="skills-card_progress skills-card-95"></div>
            </div>

            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">SQL / Power BI / Excel </h3>
                <h3 className="skills-card_percent">85%</h3>
              </div>
              <div className="skills-card_progress skills-card-85"></div>
            </div>

            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">Business Metrics Analysis </h3>
                <h3 className="skills-card_percent">75%</h3>
              </div>
              <div className="skills-card_progress skills-card-75"></div>
            </div>
            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">ERP (SAP S/4HANA)	 </h3>
                <h3 className="skills-card_percent">60%</h3>
              </div>
              <div className="skills-card_progress skills-card-60"></div>
            </div>

            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">
                  Market & Competitor Research{" "}
                </h3>
                <h3 className="skills-card_percent">65%</h3>
              </div>
              <div className="skills-card_progress skills-card-65"></div>
            </div>
            <div className="skills-card">
              <div className="skills-card_infor">
                <h3 className="skills-card_name">
                  General CRM / ERP Knowledge{" "}
                </h3>
                <h3 className="skills-card_percent">65%</h3>
              </div>
              <div className="skills-card_progress skills-card-65"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
