// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

class Profile extends Component {
  props: Props;

  render() {
    return (
      <Box
        full
        style={{ marginTop: '-65px', marginBottom: '-65px' }}
        align="center"
        justify="center"
        pad="large"
      >
        <Button primary label="Log Out" onClick={this.logout} />
      </Box>
    );
  }
}

export default Profile;
