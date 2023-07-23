import React, { useContext } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import StateContext from "../../context/StateContext";

const Overlay = (props) => {
  const dataCtx = useContext(StateContext);
  const { setShow } = dataCtx;
  const clickHandler = () => {
    props.onClose();
    setShow(true);
  };
  return (
    <Modal onClose={props.onClose}>
      <p>Your QR code has been created!</p>
      <Link to={"/"}>
        <button className="btn" onClick={clickHandler}>
          Ok
        </button>
      </Link>
    </Modal>
  );
};

export default Overlay;
