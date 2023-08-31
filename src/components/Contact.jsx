import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your form submission logic here
    // For example, you can send a request to your backend

    // Reset the form fields to their initial state
    setFormDetails(formInitialDetails);

    // Optionally, update the button text or status
    setButtonText("Message Sent"); // Display a success message
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="hidden"
                          name="contact_number"
                        ></input>
                        <input
                          type="text"
                          placeholder="Name"
                          name="user_name"
                          value={formDetails.firstName} // Bind value to state
                          onChange={(e) => onFormUpdate("firstName", e.target.value)} // Update state on input change
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="user_email"
                          value={formDetails.email} // Bind value to state
                          onChange={(e) => onFormUpdate("email", e.target.value)} // Update state on input change
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          value={formDetails.message} // Bind value to state
                          onChange={(e) => onFormUpdate("message", e.target.value)} // Update state on input change
                        ></textarea>
                        <button type="submit" value="send">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
