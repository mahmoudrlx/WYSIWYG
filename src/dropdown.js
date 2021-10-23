/** @format */

import React from "react";
import { Select, MenuItem, InputLabel, FormControl, Box } from "@mui/material";

const Dropdown = (props) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel shrink id='demo-simple-select-helper-label'>
          {props.labelHelper}
        </InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          key={props.propertyName}
          value={props.value}
          label={props.value}
          name={props.propertyName}
          onChange={(event) =>
            props.handleChange(event.target.name, event.target.value)
          }>
          {props.options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
