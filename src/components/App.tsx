import * as React from 'react';

import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import { setFakeUserIdCookie } from '../utils';

// Imitating logged in user by requirements
setFakeUserIdCookie(3);

const App: React.FC = () => {
  return (
    <>
      <Header title="New event" />
      <Form />
    </>
  );
};

export default App;
