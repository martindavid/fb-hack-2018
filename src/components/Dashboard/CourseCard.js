import React from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import styled from 'styled-components';
import CatIcon from 'assets/cat_icon.png';

const CustomMeter = styled(Meter)`
  margin-top: 12px;
  & > div > div > svg {
    width: 64px !important;
    height: 64px !important;
  }
`;

const CustomValue = styled(Value)`
  & > div > div {
    font-size: 10pt;
    font-weight: 10;
    margin-bottom: 12px;
  }
`;

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
