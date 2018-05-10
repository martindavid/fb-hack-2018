import React from 'react';
import styled from 'styled-components';
import CatIcon from 'assets/cat_icon.png';

const LevelIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 40px;
  right: 30px;
`;

const CourseCard = ({
  backgroundColor, value, courseName, isTaken, imgSrc, type, isPaid, cats,
}) => (
  <div className="course-card">
    <div className="progress" style={{ backgroundColor }}>
      <img
        style={{
 width: '80px', marginLeft: '10px', marginBottom: '10px', marginTop: '10px',
}}
        src={imgSrc}
        alt="Suggestion"
      />
      <div className="text-right" style={{ width: '100%' }}>
        {
          Array.from(Array(cats).keys()).map((val, i) => (
            <LevelIcon key={i} src={CatIcon} />
            ))
        }
      </div>
    </div>
    <span className="course-label">{type}</span>
    <h4 style={{ marginLeft: '10px' }}>{courseName}</h4>
    {
      isPaid &&
      <span className="text-right">
        <i className="fa fa-usd" />
        <i className="fa fa-usd" />
      </span>
    }
  </div>
);

export default CourseCard;
