import * as React from 'react';
import styled from 'styled-components';

const AppContent = styled.div`
  margin: 0 ${(props) => props.theme.space[4]};
  @media ${(props) => props.theme.breakpoint.desktop} {
    margin: 0 auto;
    max-width: 48rem;
  }
`;

export default AppContent;
