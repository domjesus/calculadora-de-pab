import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const InputText = (props) => (
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">{props.label}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </InputGroup>
);

export default InputText;
