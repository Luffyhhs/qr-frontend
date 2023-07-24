import React from "react";
import "./qrcode.scss";
import QrForm from "./QrForm";

const QrCode = ({ onShow }) => {
  return (
    <React.Fragment>
      <div className="form-container">
        <QrForm onShow={onShow} />
      </div>
    </React.Fragment>
  );
};

export default QrCode;
