import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { fadeBlockStyles } from "../basic.style";
import { Transition } from "react-transition-group";

const FadeRtgTransition = ({ classes, animatenow }) => (
  <Transition in={animatenow} timeout={1} appear={true}>
    {state => {
      console.log(state);
      switch (state) {
        case "entering":
          return (
            <div className={classes.root}>
              <h1>This is React Transition Group fade</h1>
            </div>
          );
        case "entered":
          return (
            <div className={classes.root + " " + classes.animateCss}>
              <h1>This is React Transition Group fade</h1>
            </div>
          );
        default:
          return (
            <div className={classes.root}>
              <h1>This is React Transition Group fade</h1>
            </div>
          );
      }
    }}
  </Transition>
);

export default withStyles(fadeBlockStyles, { withTheme: true })(
  FadeRtgTransition
);
