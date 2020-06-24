import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormSection from 'components/FormSection/FormSection';
import FieldRow from 'components/FieldRow/FieldRow';
import Button from 'components/Button/Button';
import AppContent from 'components/AppContent/AppContent';
import { SECTIONS } from '../../constants/sections';
import { AppStateInterface } from '../../constants/appState';
import fieldsActions from '../../actions/fieldsActions';
import duplicatedTitlesActions from '../../actions/duplicatedTitlesActions';
import { FieldInterface } from '../../constants/formFields';
import formActions from '../../actions/formActions';

const Form: React.FC = () => {
  const state = useSelector((state: AppStateInterface) => state);
  const fields = useSelector((state: AppStateInterface) => state.fields);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fieldsActions.getInitialState());
    dispatch(duplicatedTitlesActions.getDuplicatedTitles());
  }, []);

  if (fields.success) {
    return <Redirect to="/success" />;
  }

  const getFieldsBySection = (section: SECTIONS): FieldInterface[] =>
    Object.values(fields).filter((field) => field?.section === section);

  const renderSectionFields = (fields) => {
    if (fields.length) {
      return fields.map((field) => {
        return (
          <FieldRow
            key={field.name}
            name={field.name}
            label={field.label}
            isRequired={field.isRequired}
          >
            {<field.component name={field.name} />}
          </FieldRow>
        );
      });
    }
    return null;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    dispatch(formActions.validateAll(state));
  };

  return (
    <AppContent>
      <FormSection title={SECTIONS.ABOUT}>
        {renderSectionFields(getFieldsBySection(SECTIONS.ABOUT))}
      </FormSection>
      <FormSection title={SECTIONS.COORDINATOR}>
        {renderSectionFields(getFieldsBySection(SECTIONS.COORDINATOR))}
      </FormSection>
      <FormSection title={SECTIONS.WHEN}>
        {renderSectionFields(getFieldsBySection(SECTIONS.WHEN))}
      </FormSection>
      <Button onClick={handleSubmit}>PUBLISH EVENT</Button>
    </AppContent>
  );
};

export default Form;
