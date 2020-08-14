import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Lading from '../Pages/Landing';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Lading} />
    </Switch>
  );
};

export default routes;
