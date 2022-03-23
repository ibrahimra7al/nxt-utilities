import React from 'react';
import { Page } from '../types/page';
import Dropzone from './dropzone';

export default ({ page }: { page: Page }) => {
  const { dropzone } = page;
  return <Dropzone name={dropzone} />;
};
