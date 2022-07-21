import React from 'react';
import { useDropzoneData } from '../providers/dropzone-data';
import DynamicWidget from './dynamic-widget';

export default ({ name}: { name: string}) => {
  const dropzoneData = useDropzoneData(name);
  if (dropzoneData)
    return (
      <>
        {dropzoneData.map((d, key) => {
          return <DynamicWidget name={d.name} variant={d.variant} flavor={d.flavor} key={key} />;
        })}
      </>
    );
  return <div className="pb-dropzone" data-pb-dropzone={name}></div>;
};
