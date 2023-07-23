import React, { useEffect, useState } from "react";
import "./qrcode.scss";
import QrForm from "./QrForm";

const QrCode = () => {
  const [qrCodeData, setQRCodeData] = useState(``);
  useEffect(() => {}, [qrCodeData]);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const merchantName = merchantNameRef.current.value;
  //   const merchantCity = merchantCityRef.current.value;
  //   try {
  //     const response = await fetch("http://localhost:3000/emv-rq", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ merchantName, merchantCity }),
  //     });
  //     const { message } = await response.json();
  //     console.log(message);
  //     setQRCodeData(message);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <React.Fragment>
      <div className="form-container">
        <QrForm show={setQRCodeData} />
        {qrCodeData && <img src={qrCodeData} alt="QR code" />}
      </div>
    </React.Fragment>
  );
};

export default QrCode;
