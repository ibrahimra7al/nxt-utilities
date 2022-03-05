import React from 'react';
import { useDropzoneData } from '../providers/dropzone-data';
import DynamicWidget from './dynamic-widget';

export default ({ name }) => {
  const dropzoneData = useDropzoneData(name);
  return (
    <>
      {dropzoneData.map((d) => {
        return <DynamicWidget name={d.name} data={d.data} />;
      })}
    </>
  );
};
