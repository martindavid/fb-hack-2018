import React from 'react';
import Box from 'grommet/components/Box';
import CustomCard from '../Layout/Card';
import CourseCard from './CourseCard';

const CourseList = props => (
  <CustomCard>
    <Box onClick={() => props.history.push('/yp/course-list/1')}>
      <CourseCard value={40} courseName="Biology 101" backgroundColor="#00BCD4" isTaken />
    </Box>
    <Box onClick={() => props.history.push('/yp/course-list/2')}>
      <CourseCard value={90} courseName="Robotic 101" backgroundColor="#E6EE9C" isTaken />
    </Box>
    <Box onClick={() => props.history.push('/yp/course-list/3')}>
      <CourseCard courseName="Have fun with Python" value={70} backgroundColor="#C5E1A5" isTaken />
    </Box>
  </CustomCard>
);

export default CourseList;
