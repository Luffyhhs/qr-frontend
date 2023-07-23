import "./App.css";
import { Route, Routes } from "react-router-dom";
import QrCode from "./components/QrCode";
import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import MerchantQr from "./components/merchantsQr/MerchantQr";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
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

  return (
    <div className="App">
      <Routes>
        {!loginStatus ? (
          <Route path="/" element={<Login loginData={loginStatusHandler} />} />
        ) : (
          <Route path="/" element={<MerchantQr />} />
        )}
        <Route path="/reqQr" element={<QrCode />} />
      </Routes>
    </div>
  );
}

export default App;
