// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import styled from 'styled-components';
import CourseCard from '../../components/Dashboard/CourseCard';

type Props = {
  history: Object,
};

const StyledContainer = styled.div`
  padding: 16px;
  text-align: center;
  border-radius: 10px;
  background-color: white;
`;

const CourseList = (props: Props) => (
  <StyledContainer>
    <Box onClick={() => props.history.push('/yp/course-list/1')}>
      <CourseCard value={40} courseName="Biology 101" backgroundColor="#00BCD4" isTaken />
    </Box>
    <Box onClick={() => props.history.push('/yp/course-list/2')}>
      <CourseCard value={90} courseName="Robotic 101" backgroundColor="#E6EE9C" isTaken />
    </Box>
    <Box onClick={() => props.history.push('/yp/course-list/3')}>
      <CourseCard courseName="Have fun with Python" value={70} backgroundColor="#C5E1A5" isTaken />
    </Box>
    <Box onClick={() => props.history.push('/yp/course-list/4')}>
      <CourseCard courseName="Intro to Web Development" value={70} backgroundColor="#9DC9AC" />
    </Box>
    <Box onClick={() => props.history.push('/yp/course-list/5')}>
      <CourseCard courseName="Coding from Scratch" value={70} backgroundColor="#F1EDD0" />
    </Box>
  </StyledContainer>
);

export default CourseList;
