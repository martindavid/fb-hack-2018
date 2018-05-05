// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Camera from '../../components/Camera';

type Props = {
  history: Object,
};


class Home extends Component {
  componentWillMount() {}

  props: Props;

  render() {
    return (
      <Box pad={{ vertical: 'large', horizontal: 'large', between: 'large' }}>
        <Camera onChange={() => {
          setTimeout(() => {
            this.props.history.push('/home/suggestion');
          }, 2000);
        }}
        />
      </Box>
    );
  }
}

export default Home;
