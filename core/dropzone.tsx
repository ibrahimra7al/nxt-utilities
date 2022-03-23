import React from 'react';
import { useDropzoneData } from '../providers/dropzone-data';
import DynamicWidget from './dynamic-widget';

export default ({ name }: { name: string }) => {
  const dropzoneData = useDropzoneData(name);
  if (dropzoneData)
    return (
      <>
        {dropzoneData.map((d) => {
          return <DynamicWidget name={d.name} />;
        })}
      </>
    );
  return <div className="pb-dropzone" data-pb-dropzone={name}></div>;
};
