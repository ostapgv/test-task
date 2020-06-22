import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  FieldProps,
  styleInputLikeComponent,
  styleFieldContainer,
} from 'components/fields/common';
import fieldsActions from '../../../actions/fieldsActions';
import { AppStateInterface } from '../../../constants/appState';

const Container = styleFieldContainer(styled.div``);
const Input = styleInputLikeComponent(styled.input``);

const InputField: React.FC<FieldProps> = ({ name, className }) => {
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(fieldsActions.updateField(name, value));
    dispatch(fieldsActions.validateField(name, value, field.validators));
  };

  return (
    <Container>
      <Input
        size={1}
        id={name}
        defaultValue={field.value}
        className={className}
        onChange={handleChange}
      />
      {field.validationErrors && field.validationErrors[0]}
    </Container>
  );
};

export default InputField;
