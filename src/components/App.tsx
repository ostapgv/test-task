import * as React from "react";

import PageInterface from "../PageInterface";

const App: React.FC<PageInterface> = ({ color }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        The color of this page is:
        {color}
      </p>
    </div>
  );
};

export default App;
