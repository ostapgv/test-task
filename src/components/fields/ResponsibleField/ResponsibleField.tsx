import * as React from 'react';
import styled from 'styled-components';
import { styleFieldContainer, FieldProps } from '../../../utils';
import SelectField from 'components/fields/SelectField/SelectField';

// TODO: style options in select to fit design
const Container = styleFieldContainer(styled.div``);

const ResponsibleField: React.FC<FieldProps> = ({ name, className }) => {
  return (
    <Container>
      <SelectField name={name} />
    </Container>
  );
};

export default ResponsibleField;
