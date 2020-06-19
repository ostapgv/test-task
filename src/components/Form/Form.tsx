import * as React from 'react';
import FormSection from 'components/FormSection/FormSection';
import AppContent from 'components/AppContent/AppContent';
import FieldRow from 'components/FieldRow/FieldRow';
import { SECTIONS } from '../../constants/sections';
import { FieldInterface } from '../../constants/formFields';

interface FormProps {
  fieldsState: Record<string, FieldInterface>;
  setFieldValue: (name: string, value: string) => void;
}

const Form: React.FC<FormProps> = ({ fieldsState, setFieldValue }) => {
  console.log(fieldsState);

  const handleSubmit = () => {
    console.log('submitted');
  };

  const getFieldsBySection = (section: SECTIONS) =>
    Object.values(fieldsState).filter((field) => field.section === section);

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
          <field.component {...props} setFieldValue={setFieldValue} />
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
