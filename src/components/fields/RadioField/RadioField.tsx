import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FieldProps } from '../../../utils';
import fieldsActions from '../../../actions/fieldsActions';
import { AppStateInterface } from '../../../constants/appState';

const Label = styled.label`
  padding: 0 ${(props) => props.theme.space[3]} 0
    ${(props) => props.theme.space[1]};
`;
const Input = styled.input``;
const Box = styled.span``;

const RadioField: React.FC<FieldProps> = ({ name }) => {
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const updatedField = { ...field, value: event.target.value };
    dispatch(fieldsActions.updateField(updatedField));
  };

  return (
    <>
      {field.options &&
        field.options.map((option) => {
          return (
            <React.Fragment key={option.name}>
              <Box>
                <Input
                  type="radio"
                  id={option.name}
                  name={field.name}
                  value={option.value}
                  defaultChecked={option.value === field.value}
                  onChange={handleChange}
                />
                <Label htmlFor={option.name}>{option.name}</Label>
              </Box>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default RadioField;
