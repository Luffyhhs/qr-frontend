import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [merchantData, setMerchantData] = useState([]);
  const [select, setSelect] = useState("");
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    // dispatch({ type: "SHOW", payload: merchantData });
    const filteredData = merchantData.filter((data) =>
      data.merchantName === select ? data : []
    );
    dispatch({ type: "SELECT", payload: filteredData });
  }, [select, merchantData]);
  useEffect(() => {
    fetchData();
  }, [show]);
  const fetchData = async () => {
    const file = await fetch("https://qr-backend-g3ui.onrender.com/data");
    const data = await file.json();
    setMerchantData(data);
    // dispatch({ type: "SHOW", payload: data });
    setShow(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const initialState = {
    img: "",
    merchants: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const dataContext = {
    state,
    dispatch,
    select,
    setSelect,
    setShow,
  };
  return (
    <StateContext.Provider value={dataContext}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
