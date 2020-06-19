import * as React from 'react';

import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import { formFields } from '../constants/formFields';

const App: React.FC = () => {
  const [formFieldsState, setFormFieldsState] = React.useState(formFields);

  const setFieldValue = React.useCallback((name: string, value: string) => {
    setFormFieldsState({
      ...formFieldsState,
      [name]: { ...formFieldsState[name], value },
    });
  }, []);

  return (
    <>
      <Header title="New event" />
      {/* TODO: title should come from the redux state, has to be translated in real world app */}
      <Form fieldsState={formFieldsState} setFieldValue={setFieldValue} />
    </>
  );
};

export default App;
