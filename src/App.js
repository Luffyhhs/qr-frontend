import "./App.css";
import { Route, Routes } from "react-router-dom";
import QrCode from "./components/QrCode";
import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import MerchantQr from "./components/merchantsQr/MerchantQr";
import Overlay from "./components/modal/Overlay";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const dummyUsername = "admin@demo.com";
  const dummyPassword = "admin@#demo";
  const userLoginDataToken = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (userLoginDataToken === "1") {
      setLoginStatus(true);
    }
  }, [userLoginDataToken]);

  const loginStatusHandler = (email, password) => {
    if (email === dummyUsername && password === dummyPassword) {
      setLoginStatus(true);
      localStorage.setItem("LoggedIn", "1");
    }
  };
  const showOverlayHandler = () => {
    setShowOverlay(true);
  };
  const hideOverlayHandler = () => {
    setShowOverlay(false);
  };

  return (
    <div className="App">
      <Routes>
        {!loginStatus ? (
          <Route path="/" element={<Login loginData={loginStatusHandler} />} />
        ) : (
          <Route path="/" element={<MerchantQr />} />
        )}

        {showOverlay && (
          <Route
            path="/reqQr"
            element={<Overlay onClose={hideOverlayHandler} />}
          />
        )}
        <Route path="/reqQr" element={<QrCode onShow={showOverlayHandler} />} />
      </Routes>
    </div>
  );
}

export default App;
