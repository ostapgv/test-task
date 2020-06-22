import * as React from 'react';
import { useState } from 'react';
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
const Box = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.midnightBlue};
  opacity: 0.3;
  float: right;
`;
const TextArea = styleInputLikeComponent(styled.textarea`
  height: 7rem;
`);

const getLettersLeft = (value, maxLength) =>
  maxLength - value.length > 0 ? maxLength - value.length : 0;

const TextAreaField: React.FC<FieldProps> = ({ name, className }) => {
  const { value, maxLength, validators, validationErrors } = useSelector(
    (state: AppStateInterface) => state.fields[name]
  );
  const [lettersLeft, setLettersLeft] = useState(maxLength);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setLettersLeft(getLettersLeft(value, maxLength));
    dispatch(fieldsActions.updateField(name, value));
    dispatch(fieldsActions.validateField(name, value, validators));
  };

  return (
    <Container>
      <TextArea
        className={className}
        id={name}
        defaultValue={value}
        // TODO: uncomment the line below and remove checking how many allowed letters left
        // maxLength={field.maxLength}
        onChange={handleChange}
      />
      <Box>symbols left: {lettersLeft}</Box>
      {validationErrors && validationErrors[0]}
    </Container>
  );
};

export default TextAreaField;
