import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/netflix.webp";
import projImg2 from "../assets/img/applicant-tracking-system-prismATS.webp";
import projImg3 from "../assets/img/face-recognition-attendance-system.webp";
import projImg4 from "../assets/img/letters-gh-guest-house-logo-design-concept-vector-23326459.jpg";
import colorSharp2 from "../assets/img/letters-gh-guest-house-logo-design-concept-vector-23326459.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters/Animated";

export const Projects = () => {
  const [letterClass,setLettrClass]=useState('text-animate')
  const nameArray=['','P','r','o','j','e','t','s']
useEffect(()=>{
  setTimeout(()=>{
   setLettrClass('text-animate-hover')
 },4000)
},[])

  const projects = [
    {
      title: "Netflix",
      description: "netflix clone",
      imgUrl: projImg1,
    },
    {
      title: "Applicant Tracking System",
      description: "An applicant tracking system simplifies most of the modern recruiting process for TA teams by using automated intelligence to screen for the best, most qualified ",
      imgUrl: projImg2,
    },
    {
      title: "Face Recognition Attendance system",
      description: "Facial recognition attendance system is a biometric identification method that uses a face-scanning mechanism to record attendance from everyone present in an organization. ",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
