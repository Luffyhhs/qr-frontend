import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
// import qr from "../assets/default_qr_code.png ";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [merchantData, setMerchantData] = useState([]);
  const [select, setSelect] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    // dispatch({ type: "SHOW", payload: merchantData });
    const filteredData = merchantData.filter((data) =>
      data.merchantId === select.merchantId ? data : []
    );
    dispatch({ type: "SELECT", payload: filteredData });
  }, [select, merchantData]);
  useEffect(() => {
    fetchData();
  }, [show]);
  async function fetchData() {
    //http://localhost:8080 => test
    //https://qr-back.onrender.com =>build
    try {
      const response = await fetch("https://qr-back.onrender.com/data", {
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const { merchants } = await response.json();
      setMerchantData(merchants);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const initialState = {
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
