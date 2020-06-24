import * as React from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  // position: relative;
  display: inline-block;
  flex: 0 1 170px;
  margin-left: ${(props) => props.theme.space[2]};
`;

const TooltipText = styled.span`
  width: 200px;
  background-color: ${(props) => props.theme.color.lightPink};
  color: ${(props) => props.theme.color.white};
  text-align: center;
  border-radius: 0.375rem;
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 5px;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-right-color: ${(props) => props.theme.color.lightPink};
  }
`;

const Tooltip: React.FC = ({ children }) => {
  return children ? <TooltipText>{children}</TooltipText> : null;
};

export default Tooltip;
