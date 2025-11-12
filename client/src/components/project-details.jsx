import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import masonryPortfolio1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import masonryPortfolio2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import masonryPortfolio3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";

const portfolioItems = [
  {
    id: "igtc",
    images: [masonryPortfolio1],
    info: [
      { label: "Category", value: "React App" },
      { label: "Client", value: "Client A" },
      { label: "Project date", value: "01 Jan, 2022" },
      { label: "Project URL", value: <a href="#">www.reactapp.com</a> },
    ],
    title: "IGTC",
    description: "Description for App 1.",
  },
  {
    id: "autuskey",
    images: [masonryPortfolio1],
    info: [
      { label: "Category", value: "MySQL App" },
      { label: "Client", value: "Client B" },
      { label: "Project date", value: "15 Feb, 2022" },
      { label: "Project URL", value: <a href="#">www.mysqlapp.com</a> },
    ],
    title: "Autuskey",
    description: "Description for MySQL App 1.",
  },
  {
    id: "frspl",
    images: [masonryPortfolio2],
    info: [
      { label: "Category", value: "Node Product" },
      { label: "Client", value: "Client C" },
      { label: "Project date", value: "10 Mar, 2022" },
      { label: "Project URL", value: <a href="#">www.nodeproduct.com</a> },
    ],
    title: "FRSPL",
    description: "Description for Node Product 1.",
  },
  {
    id: "peo",
    images: [masonryPortfolio3],
    info: [
      { label: "Category", value: "PHP Branding" },
      { label: "Client", value: "Client D" },
      { label: "Project date", value: "05 Apr, 2022" },
      { label: "Project URL", value: <a href="#">www.phpbranding.com</a> },
    ],
    title: "PEO",
    description: "Description for PHP Branding 1.",
  },
  {
    id: "ezticket",
    images: [masonryPortfolio3],
    info: [
      { label: "Category", value: "MySQL Branding" },
      { label: "Client", value: "Client E" },
      { label: "Project date", value: "20 May, 2022" },
      { label: "Project URL", value: <a href="#">www.mysqlbranding.com</a> },
    ],
    title: "EzTicket",
    description: "Description for MySQL Branding 1.",
  },
  {
    id: "titos",
    images: [masonryPortfolio3],
    info: [
      { label: "Category", value: "MongoDB Branding" },
      { label: "Client", value: "Client F" },
      { label: "Project date", value: "30 Jun, 2022" },
      { label: "Project URL", value: <a href="#">www.mongodbbranding.com</a> },
    ],
    title: "Titos",
    description: "Description for MongoDB Branding 1.",
  },
  {
    id: "coowncart",
    images: [masonryPortfolio3],
    info: [
      { label: "Category", value: "MongoDB Branding" },
      { label: "Client", value: "Client F" },
      { label: "Project date", value: "30 Jun, 2022" },
      { label: "Project URL", value: <a href="#">www.mongodbbranding.com</a> },
    ],
    title: "Coowncart",
    description: "Description for MongoDB Branding 1.",
  },
];

function ProjectDetails() {
  const { id } = useParams();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const project = portfolioItems.find(item => item.id === id);
  if (!project) {
    return <main className="main portfolio-details-page"><div className="container section-title"><h2>Project Not Found</h2></div></main>;
  }

  return (
    <main className="main portfolio-details-page">
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{project.title}</h2>
          <p>Deep dive into the work behind the project.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                speed={600}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="portfolio-details-slider"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={`Project ${idx + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Project information</h3>
                <ul>
                  {project.info.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong>: {item.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;
