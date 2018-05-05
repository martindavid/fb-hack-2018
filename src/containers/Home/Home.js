// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Camera from '../../components/Camera';
import styled from 'styled-components';

import HomeBackground from '../../assets/home-page.gif';
import TutorCard from '../../components/Dashboard/TutorCard';
import CourseList from '../../components/Dashboard/CourseList';
import ActionChecklist from '../../components/Dashboard/ActionChecklist';

type Props = {
  history: Object,
};

// const StyledBox = styled(Box)`
//   background-image:
// `;

class Home extends Component {
  componentWillMount() {}

  props: Props;

  render() {
    return (
      <Box pad={{ vertical: 'large', horizontal: 'large', between: 'large' }}>
        <Camera onChange={() => {
          setTimeout(() => {
            this.props.history.push('/suggestion');
          }, 2000);
        }}
        />
      </Box>
    );
  }
}

export default Home;
