import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { preloadReady } from '@react-loadable/revised';
import App from '../core/pages';
import { DropzoneDataProvider } from '../providers/dropzone-data';
import { WidgetDataProvider } from '../providers/widget-data';
import { Page } from '../types/page';

const serverData = window.__SERVER_DATA__;
const pagesData: Page[] = window.__PAGES_DATA__;
const dropzonesData = window.__DROPZONES_DATA__;

export default () => {
  preloadReady().then(() => {
    ReactDOM.hydrate(
      <DropzoneDataProvider value={dropzonesData}>
        <WidgetDataProvider value={serverData}>
          <BrowserRouter>
            <App pages={pagesData} />
          </BrowserRouter>
        </WidgetDataProvider>
      </DropzoneDataProvider>,
      document.getElementById('root')
    );
  });
};
