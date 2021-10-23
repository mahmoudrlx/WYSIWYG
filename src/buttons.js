/** @format */

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Buttons = (props) => {
  return (
    <Tooltip title={props.toolTip} arrow>
      <IconButton
        onClick={() =>
          props.handleChange(
            props.propertyName,
            props.value === "bold"
              ? "normal"
              : props.value === "italic"
              ? "normal"
              : props.propertyValue
          )
        }
        size='small'
        key={props.propertyValue}
        value={props.propertyValue}
        name={props.propertyName}
        sx={{
          backgroundColor:
            props.propertyValue === props.value ? "#bfbfbf" : "none",
        }}>
        <FontAwesomeIcon icon={Icons[props.buttonIcon]} color='black' />
      </IconButton>
    </Tooltip>
  );
};

export default Buttons;
