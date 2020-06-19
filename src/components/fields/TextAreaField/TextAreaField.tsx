import * as React from 'react';
import styled from 'styled-components';
import { FieldProps, styleInputLikeComponent } from 'components/fields/common';
import { useState } from 'react';

const TextArea = styleInputLikeComponent(styled.textarea`
  height: 7rem;
`);

const TextAreaField: React.FC<FieldProps & { maxLength: number }> = ({
  name,
  value,
  validators,
  maxLength,
  setFieldValue,
  className,
}) => {
  const [lettersLeft, setLettersLeft] = useState(maxLength);
  const handleChange = (event) => {
    const value = event.target.value;
    setLettersLeft(maxLength - value.length > 0 ? maxLength - value.length : 0);
    setFieldValue(name, value);
    validators;
  };

  return (
    <>
      <TextArea
        id={name}
        defaultValue={value}
        className={className}
        // TODO: uncomment the line below and remove checking how many allowed letters left
        // maxLength={maxLength}
        onChange={handleChange}
      />
      {lettersLeft}
    </>
  );
};

export default TextAreaField;
