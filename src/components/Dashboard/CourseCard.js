import React from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import styled from 'styled-components';

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

const CourseCard = ({
  backgroundColor, value, courseName, isTaken,
}) => (
  <div className="course-card">
    <div className="progress" style={{ backgroundColor }}>
      {isTaken && (
        <CustomMeter
          type="circle"
          size="xsmall"
          label={<CustomValue value={value} units="%" />}
          value={value}
        />
      )}
      {!isTaken && (
        <button
          style={{ marginTop: '6%', borderColor: '#d60b52' }}
          href="#"
          label="Start"
          type="button"
        >
          Start
        </button>
      )}
    </div>
    <span className="course-label">Course</span>
    <h4>{courseName}</h4>
  </div>
);

export default CourseCard;
