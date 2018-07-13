import React from "react";
import { Transition } from "react-transition-group";
import CarouselComponent from "../carouselComponent";

export default ({ enter, data, classes, direction, appear }) => (
  <Transition in={enter} timeout={1} appear={appear}>
    {state => {
      let wrapperClass = classes.rtgFarRight;
      switch (state) {
        case "entering":
          wrapperClass = !!direction ? classes.rtgFarLeft : classes.rtgFarRight;
          break;
        case "entered":
          wrapperClass = classes.rtgCenter + " " + classes.rtgWithTransition;
          break;
        case "exiting":
          wrapperClass = classes.rtgCenter;
          break;
        case "exited":
          wrapperClass =
            (!!direction ? classes.rtgFarRight : classes.rtgFarLeft) +
            " " +
            classes.rtgWithTransition;
          break;
        default:
          throw new Error("Transition has no state");
      }
      return (
        <div className={`${wrapperClass} ${classes.rtgWrapper}`}>
          <CarouselComponent
            imageUrl={data.imageUrl}
            title={data.title}
            text={data.text}
            classes={classes}
          />
        </div>
      );
    }}
  </Transition>
);
