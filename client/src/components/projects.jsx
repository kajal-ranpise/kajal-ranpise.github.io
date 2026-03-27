import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import masonryPortfolio1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import masonryPortfolio2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import masonryPortfolio3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";
import igtc from "../assets/img/igtc.png";
import igtcLogo from "../assets/img/logo-igtc.svg";
import coowncart from "../assets/img/coowncart.png";
import coowncart1 from "../assets/img/coowncart1.png";
import exticket from "../assets/img/exticket.png";
import titosLogo from "../assets/img/logo-titos.svg";
import frspl from "../assets/img/frspl.png";
import frspl1 from "../assets/img/frspl1.png";
import autuskeyLogo from "../assets/img/logo.svg";
import frsplLogo from "../assets/img/logo-frspl.svg";
import peo from "../assets/img/peo.png";
import peo1 from "../assets/img/peo1.png";
import peoLogo from "../assets/img/logo-peo.svg";
import titos from "../assets/img/titos.png";
import titos1 from "../assets/img/titos1.png";
import autuskey from "../assets/img/autuskey.png";
import pula from "../assets/img/pula.png";

const portfolioFilters = [
  { label: "All", filter: "*" },
  { label: "React", filter: ".filter-react" },
  { label: "Node", filter: ".filter-node" },
  { label: "PHP", filter: ".filter-php" },
  { label: "MySql", filter: ".filter-mysql" },
  { label: "MongoDB", filter: ".filter-mongodb" },
];

const portfolioItems = [
    {
    id: "pula",
    img: pula,
    category: ["filter-react", "filter-node",  "filter-mysql"],
    title: "PULA",
    desc: "All Event,PVS & Bazaar management.",
    industry: "Vendor & Marketplace Management",
    tech: ["React", "Node", "MySQL"],
    // features: ["Custom CMS", "Student Portal"],
    // client: "IGTC Pvt Ltd",
    // year: 2024,
    gallery: "portfolio-gallery-app",
  },
    {
    id: "coowncart",
    img: coowncart,
    category: ["filter-react", "filter-node", "filter-mongodb"],
    title: "CoOwnCart",
    desc: "E-commerce platform for shared ownership.",
    industry: "E-commerce",
    tech: ["React", "Node.js", "MongoDB"],
    // features: ["Real-time Cart", "Payment Gateway Integration"],
    // client: "CoOwnCart Ltd.",
    // year: 2023,
    gallery: "portfolio-gallery-branding",
  },
  {
    id: "igtc",
    img: igtc,
    category: ["filter-php", "filter-mysql"],
    title: "IGTC",
    desc: "Web App portal for education management.",
    industry: "Education",
    tech: ["PHP", "MySQL"],
    // features: ["Custom CMS", "Student Portal"],
    // client: "IGTC Pvt Ltd",
    // year: 2024,
    gallery: "portfolio-gallery-app",
  },
  {
    id: "autuskey",
    img: autuskey,
    category: ["filter-php", "filter-mysql"],
    title: "Autuskey",
    desc: "Automotive software solutions.",
    industry: "Software",
    tech: ["PHP", "MySQL"],
    // features: ["Vehicle Management", "Real-time Analytics"],
    // client: "Autuskey Inc.",
    // year: 2023,
    gallery: "portfolio-gallery-app",
  },
  {
    id: "peo",
    img: peo1,
    category: ["filter-react", "filter-php", "filter-mysql"],
    title: "PEO",
    desc: "Management solution",
    industry: "Restaurant Tech",
    tech: [ "PHP", "MySQL"],
    // features: ["Employee Dashboard", "Payroll Automation"],
    // client: "PEO Ltd.",
    // year: 2024,
    gallery: "portfolio-gallery-branding",
  },
  {
    id: "ezticket",
    img: exticket,
    category: ["filter-react", "filter-php", "filter-mysql"],
    title: "EzTicket",
    desc: "Ticket booking and event management app.",
    industry: "Event Management",
    tech: ["React", "PHP", "MySQL"],
    // features: ["Online Booking", "QR Ticketing"],
    // client: "EzTicket Pvt Ltd",
    // year: 2023,
    gallery: "portfolio-gallery-branding",
  },
  {
    id: "titos",
    img: titos,
    category: ["filter-react", "filter-php", "filter-mysql"],
    title: "Titos",
    desc: "Restaurant management platform.",
    industry: "Event Managemente",
    tech: ["React", "PHP", "MySQL"],
    // features: ["Order Tracking", "Inventory Management"],
    // client: "Titos Restaurants",
    // year: 2024,
    gallery: "portfolio-gallery-branding",
  },
  {
    id: "frspl",
    img: frspl,
    category: ["filter-react", "filter-node", "filter-mysql"],
    title: "FRSPL",
    desc: "Custom logistics management system.",
    industry: "Logistics",
    tech: ["React", "Node.js", "MySQL"],
    // features: ["Route Optimization", "Driver Tracking"],
    // client: "FRSPL Ltd.",
    // year: 2023,
    gallery: "portfolio-gallery-product",
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const loadIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
      const imagesLoaded = (await import("imagesloaded")).default;

      let grid = document.querySelector(".isotope-container");
      if (grid) {
        let iso = new Isotope(grid, {
          itemSelector: ".portfolio-item",
          layoutMode: "masonry",
        });

        imagesLoaded(grid, () => {
          iso.layout();
        });

        // Filtering
        let filters = document.querySelectorAll(".portfolio-filters li");
        filters.forEach((filter) => {
          filter.addEventListener("click", function () {
            filters.forEach((el) => el.classList.remove("filter-active"));
            this.classList.add("filter-active");
            iso.arrange({ filter: this.getAttribute("data-filter") });
          });
        });
      }
    };

    loadIsotope();
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>A showcase of ideas turned into reality.</p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          {/* Filters */}
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {portfolioFilters.map((filter, idx) => (
              <li
                key={filter.filter}
                data-filter={filter.filter}
                className={idx === 0 ? "filter-active" : ""}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          {/* Portfolio Grid */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category.join(
                  " "
                )}`}
              >
                <img src={item.img} className="img-fluid" alt={item.title} />
                <div
                  className="portfolio-info"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                >
                  <h4 style={{ color: "#ffcc00" }}>{item.title}</h4>
                  {item.desc && <p style={{ color: "#f0f0f0" }}>{item.desc}</p>}

                  {item.industry && (
                    <p>
                      <strong style={{ color: "#00ffff" }}>Industry:</strong>{" "}
                      <span style={{ color: "#ffffff" }}>{item.industry}</span>
                    </p>
                  )}

                  {item.tech && item.tech.length > 0 && (
                    <p>
                      <strong style={{ color: "#00ffff" }}>Tech:</strong>{" "}
                      <span style={{ color: "#ffffff" }}>
                        {item.tech.join(", ")}
                      </span>
                    </p>
                  )}

                  {item.features && item.features.length > 0 && (
                    <p>
                      <strong style={{ color: "#00ffff" }}>Features:</strong>{" "}
                      <span style={{ color: "#ffffff" }}>
                        {item.features.join(", ")}
                      </span>
                    </p>
                  )}

                  {item.client && (
                    <p>
                      <strong style={{ color: "#00ffff" }}>Client:</strong>{" "}
                      <span style={{ color: "#ffffff" }}>{item.client}</span>
                    </p>
                  )}

                  {item.year && (
                    <p>
                      <strong style={{ color: "#00ffff" }}>Year:</strong>{" "}
                      <span style={{ color: "#ffffff" }}>{item.year}</span>
                    </p>
                  )}

                  <a
                    href={item.img}
                    title={item.title}
                    data-gallery={item.gallery}
                    className="glightbox preview-link"
                    style={{ color: "#ffcc00" }}
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to={`/project-details/${item.id}`}
                    title="More Details"
                    className="details-link"
                    style={{ color: "#ffcc00", marginLeft: "10px" }}
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
