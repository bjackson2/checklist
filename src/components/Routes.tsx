import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Checklists from '../pages/Checklists';
import Checklist from '../pages/Checklist';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/checklists" component={Checklists} />
    <Route exact path="/checklists/:title" component={Checklist} />
  </Switch>
);

export default Routes;
