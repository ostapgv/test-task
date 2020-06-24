import * as React from 'react';
import styled from 'styled-components';
import { SECTIONS } from '../../constants/sections';
import FormSection from 'components/FormSection/FormSection';

interface SuccessProps extends React.FC {
  title: string;
  className?: string;
}

const Span = styled.span`
  opacity: 0.5;
`;

const Success: React.FC<SuccessProps> = ({ title, children, className }) => {
  return (
    <FormSection title={title} className={className}>
      <Span>{children}</Span>
    </FormSection>
  );
};

const StyledSuccess = styled(Success)`
  background-color: ${(props) => props.theme.color.cosmicLatte};
  h2 {
    color: ${(props) => props.theme.color.chinook};
    border-bottom: 0;
  }
`;

export default StyledSuccess;
