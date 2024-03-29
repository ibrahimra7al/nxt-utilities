import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page as PageType } from '../types/page';
import Page from './page';

export default (props: { pages: PageType[] }) => {
  const { pages } = props;
  if (!pages || !pages.length) {
      return <h1>Error Rendering widget!</h1>;
  }

  return (
    <Switch>
      {pages.map((p: PageType, key:number) => {
        return (
          <Route path={p.path} key={key}>
            <Page page={p}/>
          </Route>
        );
      })}
    </Switch>
  );
};
