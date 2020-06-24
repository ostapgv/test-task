import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FieldProps, styleFieldContainer } from '../../../utils';
import { AppStateInterface } from '../../../constants/appState';
import InputField from 'components/fields/InputField/InputField';
import RadioField from 'components/fields/RadioField/RadioField';
import { useEffect, useState } from 'react';
import ValidationError from 'components/ValidationError/ValidationError';
import { UPDATE_FIELD } from '../../../constants/actionTypes';
import fieldsActions from '../../../actions/fieldsActions';
import { FieldInterface } from '../../../constants/formFields';

const Container = styleFieldContainer(styled.div``);
const Box = styled.div`
  @media ${(props) => props.theme.breakpoint.desktop} {
    display: inline-block;
    padding: 0 0.5rem;
  }
`;
const Span = styled.span`
  opacity: 0.5;
  color: ${(props) => props.theme.color.midnightBlue};
  padding: ${(props) => props.theme.space[2]};
  display: inline-block;
`;
const DateInputField = styled(InputField)`
  display: inline-block;
  > input {
    width: 105px;
  }
`;
const TimeInputField = styled(InputField)`
  display: inline-block;
  > input {
    width: 60px;
  }
`;

const getMappedDateAndTime = (
  date: FieldInterface,
  time: FieldInterface,
  timePeriodType: FieldInterface
): string => {
  try {
    const formattedDate = date.value.split('/').reverse().join('-');
    const [hours, minutes] = time.value.split(':');
    const formattedHours =
      timePeriodType.value == 'pm' ? Number(hours) + 12 : hours;
    return `${formattedDate}T${formattedHours}:${minutes}`;
  } catch (e) {
    return '';
  }
};

const StartsOnField: React.FC<FieldProps> = ({ name, className }) => {
  const state = useSelector((state: AppStateInterface) => state);
  const field = useSelector((state: AppStateInterface) => state.fields[name]);
  const [isFirstRun, setIsFirstRun] = useState(true);
  const dispatch = useDispatch();

  const { date, time, timePeriodType } = useSelector(
    (state: AppStateInterface) => ({
      date: state.fields.date,
      time: state.fields.time,
      timePeriodType: state.fields.timePeriodType,
    })
  );

  useEffect(() => {
    if (!isFirstRun) {
      const updatedField = {
        ...field,
        value: getMappedDateAndTime(date, time, timePeriodType),
      };
      dispatch(fieldsActions.updateField(updatedField));
      dispatch(fieldsActions.validateField(updatedField, state));
    }
    setIsFirstRun(false);
  }, [date, time, timePeriodType]);

  return (
    <Container>
      <DateInputField name={date.name}></DateInputField>
      <Span>at</Span>
      <TimeInputField name={time.name}></TimeInputField>
      <Box>
        <RadioField name={timePeriodType.name}></RadioField>
      </Box>
      <ValidationError validationErrors={field.validationErrors} />
    </Container>
  );
};

export default StartsOnField;
