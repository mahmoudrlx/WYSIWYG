/** @format */

import React from "react";
import Dropdown from "./dropdown";
import fonts from "./data/fonts.json";
import units from "./data/units.json";
import BorderStyle from "./data/borderStyle.json";
import reactCssProperies from "./data/reactCssProperies.json";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Divider,
  FormLabel,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextBox from "./textBox";
import Buttons from "./buttons";
import ColorPicker from "./colorPicker";
import Shadow from "./shadow";

class CssEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FontFamily: fonts,
      Units: units,
      borderStyle: BorderStyle,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (property, value) => {
    this.props.newReactCssStyle(property, value);
  };

  cssComponentsGroups = () => {
    let componentsGroup = [];
    const map = new Map();
    for (const item of reactCssProperies) {
      if (!map.has(item.group)) {
        map.set(item.group, true);
        componentsGroup.push({
          group: item.group,
          accordion: item.accordion,
        });
      }
    }
    return componentsGroup;
  };

  cssEditorComponents = () => {
    let outPuts = [];
    let value = "";

    reactCssProperies.forEach((item) => {
      if (item.type === "dropdown") {
        if (item.dataName === "Units") {
          value = this.props.reactCssStyle[item.reactCssProperty].replace(
            /[^a-zA-Z]+/g,
            ""
          );
        } else {
          value = this.props.reactCssStyle[item.reactCssProperty];
        }
        outPuts.push({
          [item.accordion]: (
            <Dropdown
              key={item.reactCssProperty}
              options={this.state[item.dataName]}
              handleChange={this.handleChange}
              value={value}
              propertyName={item.reactCssProperty}
              labelHelper={item.label}
            />
          ),
          groupName: item.group,
          accordion: item.accordion,
        });
      }
      if (item.type === "textBox") {
        if (item.textBoxType === "number") {
          value = this.props.reactCssStyle[item.reactCssProperty].match(/\d+/);
        } else {
          value = this.props.reactCssStyle[item.reactCssProperty];
        }
        outPuts.push({
          [item.accordion]: (
            <TextBox
              textBoxType={item.textBoxType}
              value={value}
              handleChange={this.handleChange}
              propertyName={item.reactCssProperty}
              labelHelper={item.label}
            />
          ),
          groupName: item.group,
          accordion: item.accordion,
        });
      }
      if (item.type === "buttons") {
        value = this.props.reactCssStyle[item.reactCssProperty];
        outPuts.push({
          [item.accordion]: (
            <Buttons
              buttonIcon={item.buttonIcon}
              toolTip={item.toolTip}
              value={value}
              propertyValue={item.reactCssValue}
              propertyName={item.reactCssProperty}
              handleChange={this.handleChange}
            />
          ),
          groupName: item.group,
          accordion: item.accordion,
        });
      }
      if (item.type === "colorPicker") {
        value = this.props.reactCssStyle[item.reactCssProperty];
        outPuts.push({
          [item.accordion]: (
            <ColorPicker
              value={value}
              propertyValue={item.reactCssValue}
              propertyName={item.reactCssProperty}
              handleChange={this.handleChange}
            />
          ),
          groupName: item.group,
          accordion: item.accordion,
        });
      }
    });
    return outPuts;
  };

  render() {
    return (
      <div>
        <Accordion
          sx={{
            marginBottom: "10px",
            backgroundColor: "#bc2225",
            color: "#ffffff",
          }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component={"span"} variant={"body2"}>
              Text
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fbe9ea" }}>
            {this.cssComponentsGroups()
              .filter((item) => item.accordion === "text")
              .map((elem) => (
                <Typography component={"span"} variant={"body2"}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}>
                    <FormLabel sx={{ width: "100px" }}>
                      {elem.group + ":"}
                    </FormLabel>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      sx={{ margin: "15px 0 15px 20px" }}>
                      {this.cssEditorComponents()
                        .filter((acco) => acco.groupName === elem.group)
                        .map((item) => item.text)}
                    </Stack>
                  </div>
                  <Divider variant='middle' />
                </Typography>
              ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            marginBottom: "10px",
            backgroundColor: "#eb6e35",
            color: "#ffffff",
          }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component={"span"} variant={"body2"}>
              Color
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fdeee8" }}>
            {this.cssComponentsGroups()
              .filter((item) => item.accordion === "color")
              .map((elem) => (
                <Typography component={"span"} variant={"body2"}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}>
                    <FormLabel sx={{ width: "200px" }}>
                      {elem.group + ":"}
                    </FormLabel>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      sx={{ margin: "15px 0 15px 20px" }}>
                      {this.cssEditorComponents()
                        .filter((acco) => acco.groupName === elem.group)
                        .map((item) => item.color)}
                    </Stack>
                  </div>
                  <Divider variant='middle' />
                </Typography>
              ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            marginBottom: "10px",
            backgroundColor: "#f4af30",
            color: "#ffffff",
          }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component={"span"} variant={"body2"}>
              Text Shadow
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fef6e7" }}>
            <Typography component={"span"} variant={"body2"}>
              <Shadow
                value={this.props.reactCssStyle["textShadow"]}
                handleChange={this.handleChange}
                propertyName='textShadow'
                sliderColor='#f4af30'
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            marginBottom: "10px",
            backgroundColor: "#027474",
            color: "#ffffff",
          }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component={"span"} variant={"body2"}>
              Box Shadow
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e6ffff" }}>
            <Typography component={"span"} variant={"body2"}>
              <Shadow
                value={this.props.reactCssStyle["boxShadow"]}
                handleChange={this.handleChange}
                propertyName='boxShadow'
                sliderColor='#027474'
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            marginBottom: "10px",
            backgroundColor: "#7c1536",
            color: "#ffffff",
          }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component={"span"} variant={"body2"}>
              Layout
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fbe9ef" }}>
            {this.cssComponentsGroups()
              .filter((item) => item.accordion === "layout")
              .map((elem) => (
                <Typography component={"span"} variant={"body2"}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: "10px 0 10px 0",
                    }}>
                    <FormLabel sx={{ width: "100px" }}>
                      {elem.group + ":"}
                    </FormLabel>
                    <Grid container columns={4} spacing={2}>
                      {this.cssEditorComponents()
                        .filter((acco) => acco.groupName === elem.group)
                        .map((item) => (
                          <Grid item xs={1}>
                            {item.layout}
                          </Grid>
                        ))}
                    </Grid>
                  </div>
                  <Divider variant='middle' />
                </Typography>
              ))}
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

export default CssEditor;
