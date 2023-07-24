import React, { useContext, useRef, useState } from "react";
import qr from "../../assets/thurein_qr_code.png";

import { Link } from "react-router-dom";

import ReactToPrint from "react-to-print";
import "./merchantQr.scss";
import Print from "../print/Print";
import StateContext from "../../context/StateContext";

const MerchantQr = () => {
  const [data, setData] = useState({
    merchantId: 12345,
    merchantName: "Name",
    merchantAcc: 1234567890,
    merchantCategory: "Category",
    merchantSubCategory: "Sub Category",
    merchantCountry: "Country",
    merchantCity: "City",
    merchantCurrency: "CURRENCY",
  });
  const dataCtx = useContext(StateContext);

  const {
    select,
    setSelect,
    state: { merchants },
    img,
    imgHandler,
  } = dataCtx;

  console.log(img);

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelect(selectedValue);
    imgHandler(selectedValue);

    if (selectedValue) {
      const selectedMerchant = merchants.find(
        (merchant) => merchant.merchantName === selectedValue
      );
      setData(selectedMerchant);
      console.log(selectedMerchant);
    } else {
      setData({}); // Reset data when no merchant is selected
    }
  };
  const qrRef = useRef(null);

  return (
    <div className="qr-check">
      <div className="top_box">
        <div className="select-box">
          <label htmlFor="options">Merchant Name</label>

          <select id="options" value={select} onChange={handleOptionChange}>
            <option value="">--Choose Name--</option>
            {merchants.map((merchant) => (
              <option value={merchant.merchantName} key={Math.random() * 1000}>
                {merchant.merchantName}
              </option>
            ))}
          </select>
        </div>
        <Link to={"/reqQr"}>
          <button className="btn_create">Create New</button>
        </Link>
      </div>
      <div className="show-box">
        <ul className="info-box">
          <li>
            Merchant Id <span>: {data.merchantId}</span>
          </li>
          <li>
            Merchant Name <span>: {data.merchantName}</span>
          </li>
          <li>
            Merchant Account <span>: {data.merchantAcc}</span>
          </li>
          <li>
            Merchant Category <span>: {data.merchantCategory}</span>
          </li>
          <li>
            Merchant Sub Category <span>: {data.merchantSubCategory}</span>
          </li>
          <li>
            Country <span>: {data.merchantCountry}</span>
          </li>
          <li>
            City <span>: {data.merchantCity}</span>
          </li>
          <li>
            Currency <span>: {data.merchantCurrency}</span>
          </li>
        </ul>
        <div className="qr-box">
          <img src={qr} alt="QR Code" />

          <div className="btn-box">
            <ReactToPrint
              trigger={() => <button className="button">Print Preview</button>}
              content={() => qrRef.current}
            />
            <Print name={select} ref={qrRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantQr;
