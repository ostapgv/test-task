import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { FieldProps, styleFieldContainer } from '../../../utils';
import { AppStateInterface } from '../../../constants/appState';
import RadioField from 'components/fields/RadioField/RadioField';
import NumberField from 'components/fields/NumberField/NumberField';
import fieldsActions from '../../../actions/fieldsActions';
import ValidationError from 'components/ValidationError/ValidationError';

const Container = styleFieldContainer(styled.div``);
const Box = styled.div`
  display: block;
  @media ${(props) => props.theme.breakpoint.desktop} {
    display: inline-block;
  }
`;
const Span = styled.span`
  opacity: 0.5;
  padding: ${(props) => props.theme.space[1]};
`;

const PaymentField: React.FC<FieldProps> = ({ name, className }) => {
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const [dependencyFieldName] = field.dependencyFields;
  const dependencyField = useSelector(
    (state: AppStateInterface) => state.fields[dependencyFieldName]
  );
  const dispatch = useDispatch();

  const isPaidEvent = () => dependencyField.value === 'paid';

  useLayoutEffect(() => {
    const updatedField = {
      ...field,
      isRequired: isPaidEvent(),
    };
    dispatch(fieldsActions.updateField(updatedField));
  }, [dependencyField]);

  return (
    <Container>
      <RadioField name={dependencyFieldName} />
      {isPaidEvent() && (
        <Box>
          <NumberField name={field.name} />
          <Span>$</Span>
          <ValidationError validationErrors={field.validationErrors} />
        </Box>
      )}
    </Container>
  );
};

export default PaymentField;
