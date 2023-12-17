
import React from 'react';

const CertificationCard = ({ title, description, imgUrl, Url }) => {
  return (
    <div className="certification-card">
      <img src={imgUrl} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
      <a href={Url} target="_blank" rel="noopener noreferrer">
        View Certification
      </a>
    </div>
  );
};

export default CertificationCard;
