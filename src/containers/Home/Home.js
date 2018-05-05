// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import PawIcon from 'assets/paw_icon.png';
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
        <div className="text-right">
          <p>
            <span style={{ fontSize: '18pt', color: 'tan', fontWeight: '500' }}>CO<sub>2</sub></span>
            <img src={PawIcon} />
            <span style={{ fontSize: '18pt', color: 'tan', fontWeight: '500' }}>75.5 Kg</span>
          </p>
        </div>
        <Camera onChange={() => {
          setTimeout(() => {
            this.props.history.push('/home/result');
          }, 2000);
        }}
        />
      </Box>
    );
  }
}

export default Home;
