import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import FadeComponent from "../fade-component";
import { fadeBlockStyles } from "../basic.style";

class FadeCss extends Component {
  state = {
    animationClass: "noClass"
  };
  componentDidMount() {
    this.setState({
      animationClass: "animateCss"
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <FadeComponent
        className={classes.root + " " + classes[this.state.animationClass]}
        text={"This is plain CSS fade"}
      />
    );
  }
}

export default withStyles(fadeBlockStyles, { withTheme: true })(FadeCss);
