"use client";

export default function ServicesSection() {
  // Toast auto remove + DOM insertion logic
  const toast = ({
    title = "",
    message = "",
    type = "info",
    duration = 5000,
  }: {
    title: string;
    message: string;
    type: "success" | "info" | "warning" | "error";
    duration: number;
  }) => {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");

      // Auto remove
      const autoRemoveId = setTimeout(() => {
        main.removeChild(toast);
      }, duration + 1000);

      // Manual remove
      toast.onclick = function (e) {
        if ((e.target as HTMLElement).closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };

      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle",
      };

      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);

      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

      toast.innerHTML = `
        <div class="toast__icon"><i class="${icon}"></i></div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close"><i class="fas fa-times"></i></div>
      `;

      main.appendChild(toast);
    }
  };

  // Gắn function ra global (nếu muốn dùng onclick trong attribute)
  const showInformToast = () =>
    toast({
      title: "Inform!",
      message:
        "Sorry for the inconvenience, but we're working on this feature!",
      type: "info",
      duration: 5000,
    });

  return (
    <section className="services grid wide" id="services">
      <h1 className="services-heading">
        My <span>Services</span>
      </h1>
      <div className="row services-content">
        {[
          {
            title: "Business Analysis & Requirement Gathering",
            desc: `Analyze business needs, gather requirements, and translate them 
            into clear specifications. Support stakeholders in defining goals and 
            optimizing processes to align technology with real business value.`,
          },
          {
            title: "Web Developer (Full-stack - Next.js, NodeJS, MySQL)",
            desc: `Develop responsive web applications using Next.js, NodeJS, 
            MongoDB, and MySQL. Deliver complete solutions from UI to database 
            with focus on usability, performance, and clean architecture.`,
          },
          {
            title: "ERP Support & Implementation (SAP)",
            desc: `Assist in ERP implementation with SAP S/4HANA. Provide support in 
            data input, user training, system configuration, and bridging communication 
            between users and technical teams.`,
          },
        ].map((item, index) => (
          <div className="col l-4 m-6 c-12" key={index}>
            <div className="services-card">
              <div className="services-card_icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h1 className="services-card_heading">{item.title}</h1>
              <p className="services-card_text">{item.desc}</p>
              <button
                className="btn btn-readmore"
                onClick={() => showInformToast()}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Toast container */}
      <div id="toast" className="toast-container"></div>
    </section>
  );
}
