import React, { PropsWithChildren, useContext, useMemo } from 'react';
import { WidgetData } from '../types/widgetData';

const ServerDataContext = React.createContext<{ data: WidgetData[] }>({
  data: []
});

export const WidgetDataProvider = (
  props: PropsWithChildren<{ value: any }>
) => {
  const value = useMemo(() => {
    return {
      data: props.value
    };
  }, [props.value]);

  return (
    <ServerDataContext.Provider value={value}>
      {props.children}
    </ServerDataContext.Provider>
  );
};

export const useWidgetData = (fn: Function) => {
  const context = useContext(ServerDataContext);

  if (!context) {
    throw new Error(
      'useServerData() must be a child of <ServerDataProvider />'
    );
  }

  if (fn) {
    return fn(context.data);
  } else {
    return context.data;
  }
};
