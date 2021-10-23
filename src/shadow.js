/** @format */

import React, { useState } from "react";
import { Slider, Box, FormLabel, Switch, Stack } from "@mui/material";
import ColorPicker from "./colorPicker";

const Shadow = (props) => {
  const shadow = props.value.split(" ");
  const [hOffset, setHOffset] = useState(parseInt(shadow[0].split("px")));
  const [vOffset, setVOffset] = useState(parseInt(shadow[1].split("px")));
  const [blur, setBlur] = useState(parseInt(shadow[2].split("px")));
  const [color, setColor] = useState(shadow[3]);
  const [insetSwitch, setInsetSwitch] = useState(false);

  const handleColoreShadow = (newColor) => {
    setColor(newColor);
    props.handleChange(
      props.propertyName,
      `${hOffset}px ${vOffset}px ${blur}px ${color}`
    );
  };

  return (
    <Box fullWidht>
      <Stack direction='row' sx={{ marginBottom: "25px" }}>
        <FormLabel sx={{ width: "200px" }}>h-offset:</FormLabel>
        <Slider
          aria-label='hOffset'
          valueLabelDisplay='auto'
          sx={{ color: props.sliderColor }}
          min={-100}
          max={200}
          defaultValue={hOffset}
          onChange={(event) => {
            setHOffset(event.target.value);
            props.handleChange(
              props.propertyName,
              `${hOffset}px ${vOffset}px ${blur}px ${color}`
            );
          }}
        />
      </Stack>
      <Stack direction='row' sx={{ marginBottom: "25px" }}>
        <FormLabel sx={{ width: "200px" }}>v-offset:</FormLabel>
        <Slider
          aria-label='vOffset'
          valueLabelDisplay='auto'
          sx={{ color: props.sliderColor }}
          min={-100}
          max={100}
          defaultValue={vOffset}
          onChange={(event) => {
            setVOffset(event.target.value);
            props.handleChange(
              props.propertyName,
              `${hOffset}px ${vOffset}px ${blur}px ${color}`
            );
          }}
        />
      </Stack>
      <Stack direction='row' sx={{ marginBottom: "25px" }}>
        <FormLabel sx={{ width: "200px" }}>blur:</FormLabel>
        <Slider
          aria-label='blur'
          valueLabelDisplay='auto'
          sx={{ color: props.sliderColor }}
          min={0}
          max={100}
          defaultValue={blur}
          onChange={(event) => {
            setBlur(event.target.value);
            props.handleChange(
              props.propertyName,
              `${hOffset}px ${vOffset}px ${blur}px ${color}`
            );
          }}
        />
      </Stack>
      <Stack direction='row' sx={{ marginBottom: "25px" }}>
        <FormLabel sx={{ width: "200px" }}>color:</FormLabel>
        <ColorPicker
          value={color}
          propertyName={props.propertyName}
          handleColoreShadow={handleColoreShadow}
        />
      </Stack>
      <Stack direction='row' sx={{ marginBottom: "25px" }}>
        <FormLabel sx={{ width: "140px" }}>inset:</FormLabel>
        <Switch
          checked={insetSwitch}
          onChange={(event) => {
            setInsetSwitch(event.target.checked);
            event.target.checked === true
              ? props.handleChange(
                  props.propertyName,
                  `${hOffset}px ${vOffset}px ${blur}px ${color} inset`
                )
              : props.handleChange(
                  props.propertyName,
                  `${hOffset}px ${vOffset}px ${blur}px ${color}`
                );
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Stack>
    </Box>
  );
};

export default Shadow;
