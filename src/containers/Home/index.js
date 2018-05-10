// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Box from 'grommet/components/Box';

import RefuseSuggestion from 'containers/SuggestionContents/Refuse';
import Header from '../../components/Layout/Header';
import Home from './Home';
import Leaderboard from '../../components/Leaderboard';
import FooterMenu from '../../components/Layout/FooterMenu';
import bg from '../../assets/5cats_tree.gif';
import Profile from '../../components/Profile';
import SuggestionPage from '../Suggestions';
import Dictionary from '../../components/Dictionary/index';
import DetailDic from '../../components/Dictionary/detailDic';
import ClassifierResult from './ClassifierResult';
import SuccessAction from '../SuggestionContents/SuccessAction';

type Props = {
  history: Object,
  location: Object,
  match: Object,
};

const ContentDiv = styled.div`
  margin-bottom: 65px;
  margin-top: 65px;
`;

const MainView = ({ history, location, match }: Props) => {
  let headerLabel;
  if (location.pathname === '/home') {
    headerLabel = 'Home';
  } else if (location.pathname === '/home/history') {
    headerLabel = 'Achievement';
  } else if (location.pathname === '/home/progress') {
    headerLabel = 'Leaderboard';
  } else if (location.pathname === '/home/profile') {
    headerLabel = 'Profile';
  } else {
    headerLabel = 'Cat O2 Saver';
  }


  return (

    <Box full texture={location.pathname === '/home' && bg} colorIndex="light-2">
      <Header label={headerLabel} />
      <ContentDiv>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/home/suggestion" component={SuggestionPage} />
          <Route path="/home/result" component={ClassifierResult} />
          <Route path="/home/history" component={Dictionary} />
          <Route path="/home/historyDetail" component={DetailDic} />
          <Route path="/home/progress" component={Leaderboard} />
          <Route path="/home/profile" component={Profile} />
          <Route path="/home/reuse" component={RefuseSuggestion} />
          <Route path="/home/success" component={SuccessAction} />
        </Switch>
      </ContentDiv>
      <Box align="stretch" justify="end" flex="grow">
        <FooterMenu history={history} match={match} />
      </Box>
    </Box>
  );
};

export default MainView;
