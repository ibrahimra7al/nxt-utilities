import React, { PropsWithChildren, useContext, useMemo } from 'react';

const DropzoneDataContext = React.createContext(null);

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
type dropzoneData = Array<{
  name: string;
  data: string;
  id: string;
}>;
type dropzoneContextData = Array<{
  dropzoneName: string;
  positions: number;
  widget: {
    id: string;
    name: string;
    data: string;
  };
}>;

export const useDropzoneData = (name: string): dropzoneData => {
  const context = useContext(DropzoneDataContext);

  if (!context) {
    throw new Error(
      'useDropzoneData() must be a child of <DropzoneDataContext />'
    );
  }
  const data: dropzoneContextData = context.data;

  return data
    .filter((d) => d.dropzoneName === name)
    .sort((d1, d2) => d1.positions - d2.positions)
    .map((d) => d.widget);
};
