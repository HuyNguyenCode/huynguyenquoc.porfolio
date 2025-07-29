"use client";

import { useEffect, useState } from "react";
export default function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setMobileNavOpen(false); // đóng menu mobile
  };

  return (
    <>
      {/* Header Desktop */}
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="grid wide">
          <div className="row">
            <div className="col l-6">
              <a href="#" className="logo">
                Portfolio.
              </a>
            </div>
            <div className="col l-6">
              <nav className="navbar">
                {[
                  "Home",
                  "Services",
                  "Experience",
                  "Skills",
                  "Project",
                  "Contact",
                ].map((tab, index) => (
                  <a
                    key={tab}
                    href={tab === "Home" ? "#" : `#${tab.toLowerCase()}`}
                    style={{ ["--i" as any]: index + 1 }}
                    className={`tab-item ${activeTab === tab ? "active" : ""}`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Header Mobile */}
      <header className="header-mobile-tablet">
        <div className="logo-area">
          <a href="#" className="logo">
            Portfolio.
          </a>
          <i
            className="menu-icon fa-solid fa-bars"
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
          ></i>
        </div>
        <nav
          className={`navbar-mobile-tablet ${
            isMobileNavOpen ? "show-navbar" : "hide-navbar"
          }`}
        >
          {["Home", "Services", "About", "Project", "Contact"].map((tab) => (
            <a
              key={tab}
              href={tab === "Home" ? "#" : `#${tab.toLowerCase()}`}
              className={`tab-item ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
