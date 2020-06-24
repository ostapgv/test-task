import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  FieldProps,
  styleInputLikeComponent,
  styleFieldContainer,
} from '../../../utils';
import fieldsActions from '../../../actions/fieldsActions';
import { AppStateInterface } from '../../../constants/appState';
import { FieldInterface } from '../../../constants/formFields';
import Tooltip from 'components/Tooltip/Tooltip';
import ValidationError from 'components/ValidationError/ValidationError';

const Container = styleFieldContainer(styled.div``);
const Box = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.midnightBlue};
  opacity: 0.3;
  float: right;
`;
const TextArea = styleInputLikeComponent(styled.textarea`
  height: 7rem;
`);

const getLettersLeft = ({ value, maxLength }: FieldInterface) =>
  maxLength - value.length > 0 ? maxLength - value.length : 0;

const TextAreaField: React.FC<FieldProps> = ({ name, className }) => {
  const state = useSelector((state: AppStateInterface) => state);
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const [lettersLeft, setLettersLeft] = useState(field.maxLength);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const updatedField = { ...field, value: event.target.value };
    setLettersLeft(getLettersLeft(updatedField));
    dispatch(fieldsActions.updateField(updatedField));
    dispatch(fieldsActions.validateField(updatedField, state));
  };

  return (
    <Container>
      <TextArea
        className={className}
        id={name}
        placeholder={field.placeholder}
        defaultValue={field.value}
        // TODO: uncomment the line below and remove checking how many allowed letters left
        // maxLength={field.maxLength}
        onChange={handleChange}
      />
      <Box>symbols left: {lettersLeft}</Box>
      <ValidationError validationErrors={field.validationErrors} />
    </Container>
  );
};

export default TextAreaField;
