import "hammerjs";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
const PopupWrapper = ({
  Component,
  toShow,
  title,
  closeEventHandler = () => {},
  size = "m",
  backdrop="true",
  extraClass,
  dialogClassName = `kmw-90 p-5 ${extraClass ? extraClass : ""}`,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    closeEventHandler();
  };

  useEffect(() => {
    toShow ? setShow(true) : setShow(false);
  }, [toShow]);

  return (
    <>
      <div className="loan-aging-popup">
        <Modal
          show={show}
          onHide={handleClose}
          size={size}
          backdrop={backdrop}
          dialogClassName={dialogClassName}
        >
          <Modal.Header closeButton style={{ padding: "16px" }}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-5">{Component}</Modal.Body>
        </Modal>
      </div>
      <style>
        {`.modal-header  {
       padding: 16px
     }
    `}
      </style>
    </>
  );
};
export default PopupWrapper;
