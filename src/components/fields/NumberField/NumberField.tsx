import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  styleInputLikeComponent,
  styleFieldContainer,
  FieldProps,
} from '../../../utils';
import fieldsActions from '../../../actions/fieldsActions';
import { AppStateInterface } from '../../../constants/appState';

const Container = styleFieldContainer(styled.span``);
const Input = styled(styleInputLikeComponent(styled.input``))`
  width: 100px;
`;
const Span = styled.div`
  opacity: 0.5;
  color: ${(props) => props.theme.color.midnightBlue};
  padding: ${(props) => props.theme.space[2]} 0;
  @media ${(props) => props.theme.breakpoint.desktop} {
    padding: 0 ${(props) => props.theme.space[2]};
    display: inline;
  }
`;

const NumberField: React.FC<FieldProps> = ({ name, className }) => {
  const state = useSelector((state: AppStateInterface) => state);
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const updatedField = { ...field, value: event.target.value };
    dispatch(fieldsActions.updateField(updatedField));
    dispatch(fieldsActions.validateField(updatedField, state));
  };

  return (
    <Container>
      <Input
        type="number"
        min="0"
        id={name}
        placeholder={field.placeholder}
        defaultValue={field.value}
        className={className}
        onChange={handleChange}
      />
      {field.description && <Span>{field.description}</Span>}
    </Container>
  );
};

export default NumberField;
