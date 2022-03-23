import React, { PropsWithChildren, useContext, useMemo } from 'react';
import { DropzonePlace } from '../types/dropzonePlace';

const DropzoneDataContext = React.createContext<{ data: DropzonePlace[] }>({
  data: []
});

export const DropzoneDataProvider = (
  props: PropsWithChildren<{ value: any }>
) => {
  const value = useMemo(() => {
    return {
      data: props.value
    };
  }, [props.value]);

  return (
    <DropzoneDataContext.Provider value={value}>
      {props.children}
    </DropzoneDataContext.Provider>
  );
};

export const useDropzoneData = (name: string): DropzonePlace['widget'][] => {
  const context = useContext(DropzoneDataContext);

  if (!context) {
    throw new Error(
      'useDropzoneData() must be a child of <DropzoneDataContext />'
    );
  }
  const data: DropzonePlace[] = context.data;

  return data
    .filter((d) => d.dropzoneName === name)
    .sort((d1, d2) => d1.position - d2.position)
    .map((d) => ({ ...d.widget, dropzone: d.dropzoneName }));
};
