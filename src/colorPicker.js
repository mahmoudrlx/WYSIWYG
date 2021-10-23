/** @format */

import React, { useState } from "react";
import { TextField, FormControl, InputAdornment } from "@mui/material";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const ColorPicker = (props) => {
  const [color, setColor] = useState(props.value);
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <FormControl fullWidth variant='standard'>
      <TextField
        id='input-with-icon-textfield'
        key={props.propertyName + props.value}
        value={color}
        name={props.propertyName}
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
        type='text'
        variant='standard'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FontAwesomeIcon icon={faCircle} color={color} />
            </InputAdornment>
          ),
        }}
      />
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updateColor) => {
            setColor(updateColor.hex);
            props.propertyName === "boxShadow"
              ? props.handleColoreShadow(updateColor.hex)
              : props.propertyName === "textShadow"
              ? props.handleColoreShadow(updateColor.hex)
              : props.handleChange(props.propertyName, updateColor.hex);
          }}
        />
      )}
    </FormControl>
  );
};

export default ColorPicker;
