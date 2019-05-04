import React from 'react';
import { Route, Switch } from 'react-router';
import SelectMaze from './containers/SelectMaze';
import PlayMaze from './containers/PlayMaze';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={SelectMaze} />
      <Route path="/play/:id" component={PlayMaze} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  );
};

export default Routes;
