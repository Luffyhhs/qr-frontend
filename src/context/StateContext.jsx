import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [merchantData, setMerchantData] = useState([]);
  const [select, setSelect] = useState("");
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(`../assets/default_qr_code.png`);

  const imgHandler = (name) => {
    merchantData.map((data) =>
      data.merchantName === name
        ? setImg(
            `../../assets/${data.merchantName
              .replace(/\s/g, "_")
              .toLowerCase()}_qr_code.png`
          )
        : null
    );
  };

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
    //http://localhost:8080 => test
    //https://qr-backend-g3ui.onrender.com =>build
    const file = await fetch("http://localhost:8080/data");
    const { merchants } = await file.json();
    setMerchantData(merchants);

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
    img,
    imgHandler,
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
