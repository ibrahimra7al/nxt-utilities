import React from 'react';
import Dropzone from './dropzone';

export default ({ page }: { page: any }) => {
  const { dropzone } = page;
  return <Dropzone name={dropzone} />;
};
