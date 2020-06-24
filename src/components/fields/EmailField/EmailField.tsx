import * as React from 'react';
import styled from 'styled-components';
import {
  styleFieldContainer,
  FieldProps,
  styleInputLikeComponent,
} from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateInterface } from '../../../constants/appState';
import fieldsActions from '../../../actions/fieldsActions';
import { useLayoutEffect } from 'react';
import ValidationError from 'components/ValidationError/ValidationError';

const Container = styleFieldContainer(styled.div``);
const Input = styleInputLikeComponent(styled.input``);

const EmailField: React.FC<FieldProps> = ({ name, className }) => {
  const dispatch = useDispatch();
  const state = useSelector((state: AppStateInterface) => state);
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const [dependencyFieldName] = field.dependencyFields;
  const dependencyField = useSelector(
    (state: AppStateInterface) => state.fields[dependencyFieldName]
  );
  const getEmailFromDependencyField = () => {
    const chosenOption = dependencyField.options.find(
      (option) => option.value.toString() === dependencyField.value
    );
    return chosenOption?.email || '';
  };

  useLayoutEffect(() => {
    const updatedField = {
      ...field,
      value: getEmailFromDependencyField(),
    };
    dispatch(fieldsActions.updateField(updatedField));
  }, [dependencyField]);

  const handleChange = (event) => {
    const updatedField = { ...field, value: event.target.value };
    dispatch(fieldsActions.updateField(updatedField));
    dispatch(fieldsActions.validateField(updatedField, state));
  };

  return (
    <Container>
      <Input
        id={name}
        type="email"
        placeholder={field.placeholder}
        value={field.value}
        className={className}
        onChange={handleChange}
      />
      <ValidationError validationErrors={field.validationErrors} />
    </Container>
  );
};

export default EmailField;
