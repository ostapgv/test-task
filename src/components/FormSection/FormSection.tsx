import * as React from 'react';
import styled from 'styled-components';

interface FormSectionProps extends React.FC {
  title: string;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const StyledFormSection = styled(FormSection)`
  background-color: ${(props) => props.theme.color.white};
  margin: ${(props) => props.theme.space[5]} 0;
  padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[8]};
  border: 3px solid ${(props) => props.theme.color.whiteSmokeDark};
  border-radius: 3px;
  min-width: 18rem;
  h2 {
    color: ${(props) => props.theme.color.midnightBlue};
    border-bottom: 1px solid ${(props) => props.theme.color.midnightBlue};
    padding-bottom: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[3]};
    font-size: 1.5rem;
    opacity: 0.5;
  }
`;

export default StyledFormSection;
