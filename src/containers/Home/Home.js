// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import TutorCard from '../../components/Dashboard/TutorCard';
import CourseList from '../../components/Dashboard/CourseList';
import ActionChecklist from '../../components/Dashboard/ActionChecklist';

type Props = {
  history: Object,
};

class Home extends Component {
  componentWillMount() {}

  props: Props;

  render() {
    return (
      <Box pad={{ vertical: 'large', horizontal: 'large', between: 'large' }}>
        <ActionChecklist />
        <TutorCard history={this.props.history} />
        <CourseList history={this.props.history} />
      </Box>
    );
  }
}

export default Home;
