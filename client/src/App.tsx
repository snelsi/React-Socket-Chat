import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Chat, Join } from "pages";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Join />
      </Route>
      <Route path="*">
        <Chat />
      </Route>
    </Switch>
  </Router>
);

export default App;
