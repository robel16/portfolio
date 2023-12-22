
import React from 'react';

const CertificationCard = ({ imgUrl, Title }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleCardClick}>
        <img src={imgUrl} alt={Title} />
        <div className="proj-txtx">
          <h4>{Title}</h4>
        </div>
      </div>
    </Col>
  );
};

export default CertificationCard;
