import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { fadeBlockStyles } from "../basic.style";
import FadeComponent from "../fade-component";
import { Transition } from "react-transition-group";

const FadeRtgTransition = ({ classes, animatenow }) => (
  <Transition in={animatenow} timeout={1} appear={true}>
    {state => {
      console.log(state);
      switch (state) {
        case "entered":
          return (
            <FadeComponent
              className={classes.root + " " + classes.animateCss}
              text={"This is React Transition Group fade"}
            />
          );
        default:
          return (
            <FadeComponent
              className={classes.root}
              text={"This is React Transition Group fade"}
            />
          );
      }
    }}
  </Transition>
);

export default withStyles(fadeBlockStyles, { withTheme: true })(
  FadeRtgTransition
);
