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
import ValidationError from 'components/ValidationError/ValidationError';

const Container = styleFieldContainer(styled.div``);
const Input = styleInputLikeComponent(styled.input``);

const InputField: React.FC<FieldProps> = ({ name, className }) => {
  const state = useSelector((state: AppStateInterface) => state);
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const updatedField = { ...field, value: event.target.value };
    dispatch(fieldsActions.updateField(updatedField));
    dispatch(fieldsActions.validateField(updatedField, state));
  };

  return (
    <Container className={className}>
      <Input
        size={1}
        id={name}
        placeholder={field.placeholder}
        defaultValue={field.value}
        onChange={handleChange}
      />
      <ValidationError validationErrors={field.validationErrors} />
    </Container>
  );
};

export default InputField;
