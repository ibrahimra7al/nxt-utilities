import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from './page';

export default (pages) => {
  return (
    <Switch>
      {pages.map((p) => {
        return (
          <Route exact path={pages.path}>
            <Page page={p} />
          </Route>
        );
      })}
    </Switch>
  );
};
