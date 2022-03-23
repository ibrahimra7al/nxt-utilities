import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Page as PageType } from '../types/page';
import Page from './page';

export default (props: { pages: PageType[] }) => {
  const { pages } = props;
  return (
    <Switch>
      {pages.map((p: PageType) => {
        return (
          <Route path={p.path}>
            <Page page={p} />
          </Route>
        );
      })}
    </Switch>
  );
};
