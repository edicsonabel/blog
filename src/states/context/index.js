import React, { createContext, useState } from "react";

export const DataContext = createContext();

const { Provider } = DataContext;

export const ContextProvider = ({ children }) => {
  const [PageActive, setPageActive] = useState("none");

  return (
    <Provider
      value={{
        PageActive,
        setPageActive,
      }}
    >
      {children}
    </Provider>
  );
};
