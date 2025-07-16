import { createContext, useContext } from "react";

const DilContext = createContext();

export const DilProvider = ({ children }) => {
  return (
    <DilContext.Provider value={{ dil: "tr" }}>{children}</DilContext.Provider>
  );
};

export const useDil = () => {
  return useContext(DilContext);
};
