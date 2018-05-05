import React from 'react';
import styled from 'styled-components';
import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';

const Container = styled(Box)`
  height: 100vh;
`;

export default function () {
  return (
    <Container align="center" justify="center">
      <Spinning size="large" />
    </Container>
  );
}
