import * as React from 'react';
import styled from 'styled-components';

export interface FieldRowProps {
  name: string;
  label: string;
  isRequired?: boolean;
  className?: string;
}

const FieldRow: React.FC<FieldRowProps> = ({
  name,
  label,
  isRequired,
  className,
  children,
}) => {
  return (
    name &&
    label && (
      <div className={className}>
        <label htmlFor={name}>
          {label}
          {isRequired ? '*' : ''}
        </label>
        {children}
      </div>
    )
  );
};

const StyledFieldRow = styled(FieldRow)`
  padding: ${(props) => props.theme.space[2]} 0;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoint.desktop} {
    flex-direction: row;
    align-items: center;
    min-height: 3.25rem;
  }
  label {
    color: ${(props) => props.theme.color.midnightBlue};
    opacity: 0.4;
    line-height: 2rem;
    width: 7.5rem;
  }
`;

export default StyledFieldRow;
