import * as React from 'react';
import { isMobile } from '../../utils';
import Tooltip from 'components/Tooltip/Tooltip';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';

const TextError = styled.div`
  padding-top: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.color.lightPink};
`;

const ValidationError: React.FC<{ validationErrors?: string[] }> = ({
  validationErrors = [],
}) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const resize = () => forceUpdate();

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', this.resize);
  }, []);
  const [error] = validationErrors;
  return (
    <>
      {error &&
        (isMobile() ? (
          <TextError>{error}</TextError>
        ) : (
          <Tooltip>{error}</Tooltip>
        ))}
    </>
  );
};

export default ValidationError;
