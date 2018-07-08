import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { appBarStyles } from "../basic.style";
import FadeComponent from "../fade-component";
import FadeCss from "../fade-css";
import FadeRtgTransition from "../fade-rtg-transition";
import FadeRtgCssTransition from "../fade-rtg-csstransition";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class BasicTabs extends React.Component {
  state = {
    value: "plain",
    showTransition: false,
    showCssTransition: false
  };

  handleChange = (event, value) => {
    console.log("value: ", value);
    this.setState({ value });
    if (value === "transition") {
      setTimeout(
        () =>
          this.setState({
            showTransition: true,
            showCssTransition: false
          }),
        10
      );
    } else if (value === "cssTransition") {
      setTimeout(
        () =>
          this.setState({
            showCssTransition: true,
            showTransition: false
          }),
        10
      );
    }
  };

  render() {
    const { classes } = this.props;
    const { value, showTransition, showCssTransition } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Plain" value="plain" />
            <Tab label="CSS" value="css" />
            <Tab label="RTG Transition" value="transition" />
            <Tab label="RTG CSS transition" value="cssTransition" />
          </Tabs>
        </AppBar>
        {value === "plain" && (
          <TabContainer>
            <FadeComponent text="Plain Component" />
          </TabContainer>
        )}
        {value === "css" && (
          <TabContainer>
            <FadeCss />
          </TabContainer>
        )}
        {value === "transition" && (
          <TabContainer>
            <FadeRtgTransition animatenow={showTransition} />
          </TabContainer>
        )}
        {value === "cssTransition" && (
          <TabContainer>
            <FadeRtgCssTransition animatenow={showCssTransition} />
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(appBarStyles, { withTheme: true })(BasicTabs);
