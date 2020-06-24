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
const Select = styleInputLikeComponent(styled.select``);
const Option = styled.option``;

const SelectField: React.FC<FieldProps> = ({ name, className }) => {
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const updatedField = { ...field, value: event.target.value };
    dispatch(fieldsActions.updateField(updatedField));
  };

  return (
    <Container>
      <Select
        id={name}
        defaultValue={field.value}
        className={className}
        onChange={handleChange}
      >
        <option value="" disabled>
          {field.placeholder}
        </option>
        {field.options &&
          field.options.map((option) => (
            <Option key={option.name} value={option.value}>
              {option.name}
            </Option>
          ))}
      </Select>
      <ValidationError validationErrors={field.validationErrors} />
    </Container>
  );
};

export default SelectField;
