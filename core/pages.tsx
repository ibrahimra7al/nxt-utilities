import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Page as PageType } from '../types/page';
import Page from './page';

export default (props: { pages: PageType[], boilerplate:boolean }) => {
  const { pages, boilerplate } = props;
  if (boilerplate) {
       return <Page page={pages[0]}/>
  }
  return (
    <Switch>
      {pages.map((p: PageType, key:number) => {
        return (
          <Route path={p.path}>
            <Page page={p} key={key}/>
          </Route>
        );
      })}
    </Switch>
  );
};
