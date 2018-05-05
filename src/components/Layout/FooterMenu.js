// @flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import HomeIcon from 'grommet/components/icons/base/Home';
import BookIcon from 'grommet/components/icons/base/Book';
import TrophyIcon from 'grommet/components/icons/base/Trophy';
import UserIcon from 'grommet/components/icons/base/User';
import styled from 'styled-components';

type Props = {
  history: Object,
};

const MenuBox = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: #d60b52;
`;

class FooterMenu extends Component {
  componentWillMount() {}

  props: Props;

  renderHomeMenu = ({ match }) => {
    if (match) {
      return (
        <Anchor
          icon={<HomeIcon style={{ stroke: 'rgba(255, 255, 255, 1)' }} />}
          onClick={() => {
            this.props.history.push('/yp/home');
          }}
        />
      );
    }
    return (
      <Anchor
        icon={<HomeIcon style={{ stroke: 'rgba(255, 255, 255, 0.5)' }} />}
        onClick={() => {
          this.props.history.push('/yp/home');
        }}
      />
    );
  };

  renderCourseMenu = ({ match }) => {
    if (match) {
      return (
        <Anchor
          icon={<BookIcon style={{ stroke: 'rgba(255, 255, 255, 1)' }} />}
          onClick={() => {
            this.props.history.push('/yp/course-list');
          }}
        />
      );
    }
    return (
      <Anchor
        icon={<BookIcon style={{ stroke: 'rgba(255, 255, 255, 0.5)' }} />}
        onClick={() => {
          this.props.history.push('/yp/course-list');
        }}
      />
    );
  };

  renderProgressMenu = ({ match }) => {
    if (match) {
      return (
        <Anchor
          icon={<TrophyIcon style={{ stroke: 'rgba(255, 255, 255, 1)' }} />}
          onClick={() => {
            this.props.history.push('/yp/progress');
          }}
        />
      );
    }
    return (
      <Anchor
        icon={<TrophyIcon style={{ stroke: 'rgba(255, 255, 255, 0.5)' }} />}
        onClick={() => {
          this.props.history.push('/yp/progress');
        }}
      />
    );
  };

  renderProfileMenu = ({ match }) => {
    if (match) {
      return (
        <Anchor
          icon={<UserIcon style={{ stroke: 'rgba(255, 255, 255, 1)' }} />}
          onClick={() => {
            this.props.history.push('/yp/profile');
          }}
        />
      );
    }
    return (
      <Anchor
        icon={<UserIcon style={{ stroke: 'rgba(255, 255, 255, 0.5)' }} />}
        onClick={() => {
          this.props.history.push('/yp/profile');
        }}
      />
    );
  };

  render() {
    return (
      <Box
        direction="row"
        responsive={false}
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: '65px',
          backgroundColor: '#d60b52',
          boxShadow: '0 -2px 4px 0 rgba(0, 0, 0, 0.2), 0 -2px 4px 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <MenuBox>
          <Route path="/yp/home">{this.renderHomeMenu}</Route>
        </MenuBox>
        <MenuBox>
          <Route path="/yp/course-list">{this.renderCourseMenu}</Route>
        </MenuBox>
        <MenuBox>
          <Route path="/yp/progress">{this.renderProgressMenu}</Route>
        </MenuBox>
        <MenuBox>
          <Route path="/yp/profile">{this.renderProfileMenu}</Route>
        </MenuBox>
      </Box>
    );
  }
}

export default FooterMenu;
