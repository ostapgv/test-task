import * as React from 'react';

import Form from 'components/Form/Form';
import Header from 'components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header title="New event" />
      <Form />
    </>
  );
};

export default App;
