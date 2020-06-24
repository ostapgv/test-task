import * as React from 'react';

import AppContent from 'components/AppContent/AppContent';
import StyledSuccess from 'components/Success/Success';

const Success: React.FC = () => {
  return (
    <AppContent>
      <StyledSuccess title="Success">Event has been created</StyledSuccess>
    </AppContent>
  );
};

export default Success;
