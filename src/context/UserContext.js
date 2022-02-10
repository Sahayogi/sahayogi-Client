import React, { createContext, useContext } from "react";
const Context = createContext();

const initialState = {
  email: "",
  role: "",
};

const Provider = ({ children }) => {
  return(
  <Context.Provider value={{data: initialState}}>{children}</Context.Provider>);
};

const useAuth = () => {
  return useContext(Context);
};

export { Context, Provider, useAuth };
