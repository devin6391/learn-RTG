import React from "react";
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
    <div className="fadePureCssClass">
      <h1>This is React Transition Group fade</h1>
    </div>
  </CSSTransition>
);
