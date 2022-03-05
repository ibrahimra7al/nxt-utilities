import React from 'react';
import Dropzone from './dropzone';

export default ({ page }) => {
  const { dropzone } = page;
  return <Dropzone name={dropzone} />;
};
