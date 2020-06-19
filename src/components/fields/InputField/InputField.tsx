import * as React from 'react';
import styled from 'styled-components';
import { FieldProps, styleInputLikeComponent } from 'components/fields/common';

const Input = styleInputLikeComponent(styled.input``);

const InputField: React.FC<FieldProps> = ({
  name,
  value,
  validators,
  setFieldValue,
  className,
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setFieldValue(name, value);
    validators;
  };

  return (
    <Input
      size={1}
      id={name}
      defaultValue={value}
      className={className}
      onChange={handleChange}
    />
  );
};

export default InputField;
