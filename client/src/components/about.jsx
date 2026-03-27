import React, { useState, useEffect, useRef } from "react";
import profileImg from "../assets/img/profile-img.jpg";

const skillsData = [
  { name: "HTML", val: 60 },
  { name: "CSS", val: 60 },
  { name: "JavaScript", val: 80 },
  { name: "React", val: 90 },
  { name: "Redux", val: 90 },
  { name: "Next Js", val: 75 },
  { name: "Node.js", val: 85 },
  { name: "Express.js", val: 80 },
  { name: "MySQL", val: 90 },
  { name: "MongoDB", val: 60 },
  { name: "PHP", val: 90 },
];

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const StatCounter = ({ end, duration = 1500, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const intervalTime = 100; // slower increment
    const increment = end / (duration / intervalTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end, duration, startCounting]);

  return <span>{count}</span>;
};

function About() {
  const stats = [
    { end: 8, label: "Clients communicated with" },
    { end: 12, label: "Projects" },
    { end: 6, label: "Experience Years" },
    { end: 15, label: "Colleagues Worked With" },
  ];

  const age = calculateAge("1996-09-25");

  // Split skills into two columns
  const mid = Math.ceil(skillsData.length / 2);
  const firstCol = skillsData.slice(0, mid);
  const secondCol = skillsData.slice(mid);

  // Intersection Observer for stats
  const [startStats, setStartStats] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="main about-page">
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I am a Full Stack Developer specializing in React.js (frontend) and
            Node.js/Express (backend) with strong experience in end-to-end web
            development.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={profileImg} className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-8 content">
              <h2>Full Stack &amp; Web App Developer</h2>
              <p className="fst-italic py-3">
                To stay ahead, I integrate AI-powered tools into my workflow –
                leveraging ChatGPT for brainstorming, documentation, and
                debugging, and GitHub Copilot for accelerating development. This
                allows me to deliver high-quality code faster and focus more on
                solving complex business problems.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 7040147091</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Location:</strong> <span>Pune, India</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Role:</strong>{" "}
                      <span>Full Stack Developer (MERN)</span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong>{" "}
                      <span>Bachelor of Engineering (Computer)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>kajaldranpise@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Availability:</strong> <span>Open to Work</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>GitHub:</strong>{" "}
                      <span>
                        <a
                          href="https://github.com/kajal-ranpise"
                          target="_blank"
                          rel="noreferrer"
                        >
                          github.com/kajal-ranpise
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>LinkedIn:</strong>{" "}
                      <span>
                        <a
                          href="https://www.linkedin.com/in/kajal-ranpise/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View LinkedIn Profile
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="py-3">
                Results-driven and detail-oriented MERN Stack Developer with
                hands-on experience in designing, developing, and maintaining
                scalable web applications using Express.js, React.js, Node.js,
                MySQL, and MongoDB. Proficient in RESTful APIs, modern front-end
                frameworks, CI/CD pipelines, and deployment (Hostinger and
                DigitalOcean). Adept at collaborating with cross-functional
                teams to deliver high-quality, user-focused solutions in Agile
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}

      {/* Skills Section */}
      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills & Expertise</h2>
          <p>
            Technologies and tools I use to design, build, and optimize
            applications.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            {[firstCol, secondCol].map((colSkills, colIndex) => (
              <div className="col-lg-6" key={colIndex}>
                {colSkills.map((skill, i) => (
                  <div
                    className="progress"
                    key={i}
                    style={{ marginBottom: "15px", position: "relative" }}
                  >
                    <span
                      className="skill"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: "500",
                        marginBottom: "5px",
                        position: "relative",
                        zIndex: 2,
                        color: "#000",
                      }}
                    >
                      <span>{skill.name}</span>
                      <i className="val">{skill.val}%</i>
                    </span>
                    <div
                      className="progress-bar-wrap"
                      style={{
                        background: "#e0e0e0",
                        height: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.val}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: `${skill.val}%`,
                          height: "100%",
                          borderRadius: "5px",
                          background: `color-mix(in srgb, var(--accent-color) 90%, white 20%)`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Skills Section */}

      {/* Stats Section */}
      <section id="stats" className="stats section" ref={statsRef}>
        <div
          className="container section-title"
          style={{ textAlign: "center" }}
        >
          <h2>Facts</h2>
          <p>People. Work. Growth. Always!</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {stats.map((stat, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div
                  className="stats-item text-center w-100 h-100"
                  style={{
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 style={{ fontSize: "2rem", color: "#007bff" }}>
                    <StatCounter end={stat.end} startCounting={startStats} />
                  </h3>
                  <p style={{ margin: 0, fontWeight: "500" }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Stats Section */}
    </main>
  );
}

export default About;
