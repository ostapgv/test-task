import styled from 'styled-components';
import { theme } from './theme/Theme';

export interface FieldProps {
  name: string;
  className?: string;
}

export const styleFieldContainer = (component: React.ReactElement) => styled(
  component
)`
  flex: 1 1;
  position: relative;
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

export const isMobile = () =>
  !window.matchMedia(theme.breakpoint.desktop).matches;

// get user id from cookie
export const getUserIdCookie = () => {
  const regex = /user_id=(.[^;]*)/gi;
  const match = regex.exec(document.cookie);
  return match[1];
};

// set fake user id
export const setFakeUserIdCookie = (userId) => {
  window.document.cookie = `user_id=${userId}`;
};
