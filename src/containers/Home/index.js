// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Box from 'grommet/components/Box';

import Header from '../../components/Layout/Header';
import Home from './Home';
import CourseList from './CourseList';
import Leaderboard from '../../components/Leaderboard';
import FooterMenu from '../../components/Layout/FooterMenu';
import bg from '../../assets/bg.png';
import Profile from '../../components/Profile';

type Props = {
  history: Object,
  location: Object,
  match: Object,
};

const ContentDiv = styled.div`
  margin-bottom: 65px;
  margin-top: 65px;
`;

const YoungPeopleView = ({ history, location, match }: Props) => {
  console.log('Test');

  let headerLabel;

  if (location.pathname.includes('home')) {
    headerLabel = 'Home';
  } else if (location.pathname.includes('course')) {
    headerLabel = 'Courses';
  } else if (location.pathname.includes('progress')) {
    headerLabel = 'Leaderboard';
  } else if (location.pathname.includes('profile')) {
    headerLabel = 'Profile';
  } else {
    headerLabel = 'iFuture';
  }

  return (
    <Box full texture={location.pathname === '/' && bg}>
      <Header label={headerLabel} />
      <ContentDiv>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course-list" component={CourseList} />
          <Route path="/progress" component={Leaderboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </ContentDiv>
      <Box align="stretch" justify="end" flex="grow">
        <FooterMenu history={history} match={match} />
      </Box>
    </Box>
  );
};

export default YoungPeopleView;
