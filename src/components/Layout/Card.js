import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: 16px;
  text-align: center;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

const CustomCard = ({ children, className }) => (
  <StyledBox className={className}>{children}</StyledBox>
);

export default CustomCard;
