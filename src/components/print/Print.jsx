import React, { forwardRef } from "react";
import qr from "../../assets/thurein_qr_code.png";
import cb from "../../assets/Central_Bank_of_Myanmar_seal.png";
import mab from "../../assets/mab_logo.png";
import "./print.scss";

const Print = forwardRef((props, ref) => {
  return (
    <div className="print-box" ref={ref}>
      <div className="info-box">
        <div className="logo-box">
          <img src={cb} alt="CB Bank logo" />
          <p>Myanmar Pay</p>
        </div>
        <span>
          <strong>SCAN MMQR HERE</strong>
        </span>
        <div className="print-img-box">
          <img src={qr} alt="QR Code" />
        </div>
        <div className="name-box">
          <strong>{props.name}</strong>
        </div>
        <div className="partner-box">
          <img src={mab} alt="MAB Logo" />
        </div>
      </div>
    </div>
  );
});

export default Print;
