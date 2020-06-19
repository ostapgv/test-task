import styled from 'styled-components';

export interface FieldProps {
  name: string;
  value: string;
  section: string;
  validators:
    | ((value: string) => boolean)[]
    | ((value: string) => Promise<boolean>)[];
  setFieldValue: (name: string, value: string) => boolean;
  className?: string;
}

export const styleInputLikeComponent = (
  component: React.ReactElement
) => styled(component)`
  flex: 1 1;
  opacity: 0.5;
  border: 1px solid ${(props) => props.theme.color.endeavour};
  padding: ${(props) => props.theme.space[2]};
  @media ${(props) => props.theme.breakpoint.desktop} {
    max-width: 25rem;
  }
`;
