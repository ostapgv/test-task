import * as React from 'react';
import styled from 'styled-components';
import AppContent from 'components/AppContent/AppContent';

interface HeaderProps {
  title: string;
  className: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <header className={className}>
      <AppContent>
        <h1>{title}</h1>
      </AppContent>
    </header>
  );
};

const StyledHeader = styled(Header)`
  border-top: 1rem solid ${(props) => props.theme.color.midnightBlue};
  background-color: ${(props) => props.theme.color.endeavour};
  color: ${(props) => props.theme.color.lavenderBlue};
  height: 5rem;
  h1 {
    font-size: 1.5rem;
    font-weight: lighter;
    line-height: 4rem;
    padding-left: ${(props) => props.theme.space[9]};
    opacity: 0.7;
  }
`;

export default StyledHeader;
