/** @format */

import React from "react";
import { TextField } from "@mui/material";

const TextBox = (props) => {
  return (
    <TextField
      key={props.propertyName + props.value}
      value={props.value}
      name={props.propertyName}
      onChange={(event) =>
        props.handleChange(event.target.name, event.target.value)
      }
      type={props.textBoxType}
      label={props.labelHelper}
      variant='outlined'
    />
  );
};

export default TextBox;
