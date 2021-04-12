import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const Dias = (props) => (
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Dias
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue={props.dias} />
    </Col>
  </Form.Group>
);

export default Dias;
