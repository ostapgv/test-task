import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormSection from 'components/FormSection/FormSection';
import AppContent from 'components/AppContent/AppContent';
import FieldRow from 'components/FieldRow/FieldRow';
import { SECTIONS } from '../../constants/sections';
import { AppStateInterface } from '../../constants/appState';
import fieldsActions from '../../actions/fieldsActions';

const Form: React.FC = () => {
  const fields = useSelector((state: AppStateInterface) => state.fields);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fieldsActions.updateInitialState());
  }, []);

  const getFieldsBySection = (section: SECTIONS) =>
    Object.values(fields).filter((field) => field.section === section);

  const renderSectionFields = (fields) => {
    return fields.map((field) => {
      const { component, section, ...props } = field;
      return (
        <FieldRow
          key={field.name}
          name={field.name}
          label={field.label}
          isRequired={field.isRequired}
        >
          <field.component {...props} />
        </FieldRow>
      );
    });
  };

  const aboutSectionFields = getFieldsBySection(SECTIONS.ABOUT);
  const coordinatorSectionFields = getFieldsBySection(SECTIONS.COORDINATOR);
  const whenSectionFields = getFieldsBySection(SECTIONS.WHEN);

  return (
    <AppContent>
      <form>
        <FormSection title={SECTIONS.ABOUT}>
          {renderSectionFields(aboutSectionFields)}
        </FormSection>
        <FormSection title={SECTIONS.COORDINATOR}>
          {renderSectionFields(coordinatorSectionFields)}
        </FormSection>
        <FormSection title={SECTIONS.WHEN}>
          {renderSectionFields(whenSectionFields)}
        </FormSection>
      </form>
    </AppContent>
  );
};

export default Form;
