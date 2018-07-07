import React from "react";
import FadeComponent from "../fade-component";
import { CSSTransition } from "react-transition-group";

export default ({ animatenow }) => (
  <CSSTransition
    in={animatenow}
    timeout={1}
    classNames={{
      enter: "fadePureCssClass",
      enterDone: "fadePureCssClass fadePureCssClass-show",
      exitDone: "fadePureCssClass"
    }}
  >
    <FadeComponent
      className={"fadePureCssClass"}
      text={"This is React Transition Group fade"}
    />
  </CSSTransition>
);
