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
  let headerLabel;
  if (location.pathname === '/home') {
    headerLabel = 'Home';
  } else if (location.pathname === '/home/history') {
    headerLabel = 'Courses';
  } else if (location.pathname === '/home/progress') {
    headerLabel = 'Leaderboard';
  } else if (location.pathname === '/home/profile') {
    headerLabel = 'Profile';
  } else {
    headerLabel = 'Cat O2 Saver';
  }
  console.log(headerLabel);

  return (
    <Box full texture={location.pathname === '/home' && bg}>
      <Header label={headerLabel} />
      <ContentDiv>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/home/history" component={CourseList} />
          <Route path="/home/progress" component={Leaderboard} />
          <Route path="/home/profile" component={Profile} />
        </Switch>
      </ContentDiv>
      <Box align="stretch" justify="end" flex="grow">
        <FooterMenu history={history} match={match} />
      </Box>
    </Box>
  );
};

export default YoungPeopleView;
