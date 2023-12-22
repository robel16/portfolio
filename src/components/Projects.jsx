import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/netflix.webp";
import projImg2 from "../assets/img/applicant-tracking-system-prismATS.webp";
import projImg3 from "../assets/img/face-recognition-attendance-system.webp";
import projImg4 from "../assets/img/letters-gh-guest-house-logo-design-concept-vector-23326459.jpg";
import colorSharp2 from "../assets/img/letters-gh-guest-house-logo-design-concept-vector-23326459.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters/Animated";
import { Hourglass } from "react-loader-spinner";
export const Projects = () => {
  const [letterClass, setLettrClass] = useState("text-animate");
  const nameArray = ["", "P", "r", "o", "j", "e", "t", "s"];
  useEffect(() => {
    setTimeout(() => {
      setLettrClass("text-animate-hover");
    }, 4000);
  }, []);

  const projects = [
    {
      title: "GHRS",
      description:
        "A guest house renting system is a software or web-based platform that allows property owners or managers to rent out their guest houses, vacation rentals, or similar accommodations to travelers or guests.",
      imgUrl: projImg4,
      Url: "https://house-renting-coral.vercel.app/",
    },
    {
      title: "Applicant Tracking System",
      description:
        "An applicant tracking system simplifies most of the modern recruiting process for TA teams by using automated intelligence to screen for the best, most qualified ",
      imgUrl: projImg2,
      Url: "https://github.com/robel16/Applicant_tracking_system",
    },
    {
      title: "Face Recognition Attendance system",
      description:
        "Facial recognition attendance system is a biometric identification method that uses a face-scanning mechanism to record attendance from everyone present in an organization. ",
      imgUrl: projImg3,
      Url: "https://github.com/robel16/face_recognition_attendance_system",
    },
  ];

  const projects2 = [
    {
      title: "Netflix",
      description: "netflix clone",
      imgUrl: projImg1,
      Url: "https://netflix-clone-777cb.firebaseapp.com/",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={nameArray}
                      idx={15}
                    />
                  </h2>
                  <p>
                    In my journey as a web developer, I've had the privilege of
                    working on a diverse range of projects, each showcasing my
                    proficiency in various frameworks and technologies. These
                    projects are a testament to my commitment to building
                    innovative and user-friendly web solutions. Here are some
                    highlights:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section"></Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "25%",
                          }}
                        >
                          <h1 style={{ margin: "10px", marginLeft: "10px" }}>
                            MORE ARE COMING SOON{" "}
                          </h1>

                          <Hourglass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="hourglass-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            colors={["#306cce", "#72a1ed"]}
                          />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
