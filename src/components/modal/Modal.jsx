import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./modal.scss";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className="modal">
          <div className="modal__content">{props.children}</div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
