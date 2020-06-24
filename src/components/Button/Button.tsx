import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: ${(props) => props.theme.space[8]} auto;
  background-color: ${(props) => props.theme.color.darkOrange};
  color: ${(props) => props.theme.color.white};
  opacity: 0.7;
  padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[8]};
  display: block;
  border: 0;
  border-radius: 0.375rem;
`;

export default Button;
