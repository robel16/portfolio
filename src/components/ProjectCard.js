// ProjectCard.js
import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  const handleCardClick = () => {
    if (Url) {
      window.open(Url, "_blank"); // Open the URL in a new tab
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleCardClick}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
