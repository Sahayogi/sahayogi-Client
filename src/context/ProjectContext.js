import React, { createContext, useContext } from "react";
const Context = createContext();

const initialState = {
  title:"",
  img: "",
  status: "",
  donations:"",
  role:"donor"
};

const Provider = ({ children }) => {
  return(
  <Context.Provider value={{data: initialState}}>{children}</Context.Provider>);
};

const useAuthForDonation = () => {
  return useContext(Context);
};

export { Context, Provider, useAuthForDonation };
