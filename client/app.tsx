import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from '../core/pages';
import { DropzoneDataProvider } from '../providers/dropzone-data';
import { WidgetDataProvider } from '../providers/widget-data';

const serverData = window.__SERVER_DATA__;
const pagesData = window.__PAGES_DATA__;
const dropzonesData = window.__DROPZONES_DATA__;

export default () => {
  Loadable.preloadReady().then(() => {
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
