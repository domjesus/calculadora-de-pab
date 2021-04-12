import React from "react";
import { Toast } from "react-bootstrap";

const ToastFactory = (props) => {
  return (
    props.show &
    (
      <Toast
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Bootstrap</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
    )
  );
};

export default ToastFactory;
