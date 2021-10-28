/** @format */

import React from "react";
import Dropdown from "./dropdown";
import CssEditor from "./cssEditor";
import { Grid, Stack, AppBar, Toolbar, Typography } from "@mui/material";

class App extends React.Component {
  state = {
    options: [
      {
        label: "Div",
        value: "1",
      },
      {
        label: "Button",
        value: "2",
      },
      {
        label: "TextBox",
        value: "3",
      },
      {
        label: "Dropdown",
        value: "4",
      },
    ],
    defaultlCssStyle: {
      fontFamily: "Times New Roman",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "bold",
      backgroundColor: "#323232",
      color: "#da2fd3",
      textAlign: "center",
      textDecoration: "underline",
      marginTop: "5px",
      marginRight: "3px",
      marginBottom: "4px",
      marginLeft: "6px",
      paddingTop: "2px",
      paddingRight: "3px",
      paddingBottom: "2px",
      paddingLeft: "6px",
      width: "200px",
      height: "100px",
      boxShadow: "5px 8px 3px #b1a6a6",
      textShadow: "1px 1px 1px #da2fd3",
    },
    value: "1",
  };

  htmlElementStyle = (value) => {
    if (value === "1")
      return <div style={this.state.defaultlCssStyle}>Text</div>;
    if (this.state.value === "2")
      return <button style={this.state.defaultlCssStyle}>Text</button>;
    if (this.state.value === "3")
      return (
        <input
          style={this.state.defaultlCssStyle}
          type='text'
          defaultValue='Text'></input>
      );
    if (this.state.value === "4")
      return (
        <select style={this.state.defaultlCssStyle}>
          <option>Text</option>
        </select>
      );
  };

  //update style
  newCssStyle = (property, value) => {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
      value =
        value +
        this.state.defaultlCssStyle[property].replace(/[^a-zA-Z]+/g, "");
    }
    switch (value) {
      case "px":
      case "pt":
      case "em":
      case "rem":
        value = this.state.defaultlCssStyle[property].match(/\d+/) + value;
        break;
      default:
    }

    this.setState(
      {
        defaultlCssStyle: { ...this.state.defaultlCssStyle, [property]: value },
      },
      () => {
        this.htmlElementStyle(this.state.value);
      }
    );
  };

  handleChange = (name, value) => {
    this.setState({ value: value });
    this.htmlElementStyle(value);
  };

  render() {
    const { options, value } = this.state;
    return (
      <div>
        <React.Fragment>
          <AppBar position='fixed'>
            <Toolbar>
              <Typography variant='h6' component='div'>
                {"WYSIWYG {Css Editor}"}
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </React.Fragment>
        <Grid container spacing={4} sx={{ marginTop: "10px" }}>
          <Grid item xs={7}>
            <Stack spacing={30}>
              <Stack
                direction='column'
                justifyContent='center'
                alignItems='stretch'>
                <Dropdown
                  options={options}
                  handleChange={this.handleChange}
                  value={value}
                  labelHelper='Html'
                />
              </Stack>
              <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'>
                {this.htmlElementStyle(value)}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <CssEditor
              reactCssStyle={this.state.defaultlCssStyle}
              newReactCssStyle={this.newCssStyle}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
