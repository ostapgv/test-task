import styled from 'styled-components';

export interface FieldProps {
  name: string;
  className?: string;
}

export const styleFieldContainer = (component: React.ReactElement) => styled(
  component
)`
  flex: 1 1;
  @media ${(props) => props.theme.breakpoint.desktop} {
    max-width: 25rem;
  }
`;

export const styleInputLikeComponent = (
  component: React.ReactElement
) => styled(component)`
  opacity: 0.5;
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.endeavour};
  padding: ${(props) => props.theme.space[2]};
`;
