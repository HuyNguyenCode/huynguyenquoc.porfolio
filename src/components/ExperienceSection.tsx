"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceSection() {
  const experienceData = [
    {
      year: "2021 – 2023 ",
      title: "IT Support Specialist ",
      companyName: "IIG Vietnam",
      description:
        "Provided technical support for hardware, software, and network issues and Assisted in setting up and maintaining workstations and office IT equipment. ",
    },
    {
      year: "2022 – 2023 ",
      title: "ERP Implementation Intern ",
      companyName: " FPT IS  ",
      description:
        "Studied and practiced SAP S/4HANA with real enterprise projects and Gathered business requirements and reported progress to project managers. ",
    },
    {
      year: "2022 – 2023 ",
      title: "FREELANCER ",
      description:
        "Web developers usually fall under one of three categories: back-end developers, front-end developers, and full-stack developers. Some web developers also work as webmasters.",
    },
  ];
  const educationData = [
    {
      year: "Oct 2021 – Present",
      title: "UIT (University of Information Technology)",
      specialty: "Information Systems | GPA: 2.8 (Good)",
      description:
        "Studying a broad range of topics including business analysis, information systems design, and programming. Gained hands-on experience through academic projects, bridging the gap between tech and business operations.",
    },

    {
      year: "2023 ",
      title: "WebDev Adventure 2023",
      specialty: "Round 2",
      description:
        "Selected as a Round 2 participant in a web development competition aimed at showcasing practical coding skills and creative UI/UX implementation. ",
    },

    {
      year: "2021/10 ",
      title: "Startup Wheel 2021",
      description:
        "Recognized in the Top 100 of Startup Wheel 2021, one of Vietnam’s largest startup competitions. Competed with an original idea for a Mentorship & Coach Booking platform, connecting users with experts across various fields.",
    },
  ];
  return (
    <section className="experience grid wide" id="experience">
      <h1 className="experience-heading">
        My <span>Experience</span>
      </h1>

      <div className="row experience-wrapper">
        {/* Education */}
        <div className="col l-6 c-12 education-box">
          <h1 className="education-box_heading">Education & Achivement</h1>
          {educationData.map((item, index) => (
            <div className="education-card" key={index}>
              <div className="education-year">
                <FontAwesomeIcon icon={faCalendar} />
                <h3>{item.year}</h3>
              </div>
              <h1 className="education-card_heading">{item.title}</h1>
              <h5 className="education-card_sub-heading">{item.specialty}</h5>
              <p className="education-card_text">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="col l-6 c-12 experience-box">
          <h1 className="experience-box_heading">Experience</h1>
          {experienceData.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-year">
                <FontAwesomeIcon icon={faCalendar} />
                <h3>{item.year}</h3>
              </div>
              <h1 className="experience-card_heading">{item.title}</h1>
              <h5 className="experience-card_sub-heading">
                {item.companyName}
              </h5>
              <p className="experience-card_text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <p>Download CV for more</p>
    </section>
  );
}
