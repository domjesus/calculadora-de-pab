import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const Data = (props) => (
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Data {props.type}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
      type="date"
      id={props.id}
      value={props.value}
      onChange={props.setDate}
    />
  </InputGroup>
);

export default Data;
