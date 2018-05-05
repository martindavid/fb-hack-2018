import React from 'react';
import styled from 'styled-components';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const StyledBox = styled(Box)`
  background-color: #d60b52;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: fixed;
  z-index: 10;
  height: 65px;
  width: 100%;
`;

const Header = ({ label }) => (
  <StyledBox align="center" justify="center" basis="full" flex="grow">
    <Heading tag="h3" strong margin="none" style={{ color: 'white' }}>
      {label}
    </Heading>
  </StyledBox>
);

export default Header;
