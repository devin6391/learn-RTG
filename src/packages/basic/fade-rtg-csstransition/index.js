import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { fadeBlockStyles } from "../basic.style";
import FadeComponent from "../fade-component";
import { CSSTransition } from "react-transition-group";

const FadeRtgCssTransition = ({ classes, animatenow }) => (
  <CSSTransition
    in={animatenow}
    timeout={1}
    classNames={{
      enter: classes.root,
      enterDone: classes.root + " " + classes.animateCss,
      exitDone: classes.root
    }}
  >
    <FadeComponent
      className={classes.root}
      text={"This is React Transition Group fade"}
    />
  </CSSTransition>
);

export default withStyles(fadeBlockStyles, { withTheme: true })(
  FadeRtgCssTransition
);
