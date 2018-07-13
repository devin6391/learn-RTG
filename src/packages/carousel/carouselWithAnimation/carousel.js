import React, { Component } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/core/styles";
import { carouselComponentStyles } from "../carousel.style";

const TransitioningComponent = ({
  enter,
  classes,
  direction,
  appear,
  children
}) => (
  <Transition in={enter} timeout={1} appear={appear}>
    {state => {
      let wrapperClass = classes.rtgFarRight;
      console.log(state);
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
          {children}
        </div>
      );
    }}
  </Transition>
);

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevWatchProp: null,
      prevChildProps: null,
      nextWatchProp: null,
      nextChildProps: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("In derive state fn");
    console.log(nextProps);
    console.log(prevState);
    return {
      prevWatchProp: prevState.nextWatchProp,
      prevChildProps: prevState.nextChildProps,
      nextWatchProp: nextProps.watchProp,
      nextChildProps: nextProps.childProps
    };
  }

  getCLonedElems = () => {
    const {
      prevWatchProp,
      prevChildProps,
      nextWatchProp,
      nextChildProps
    } = this.state;
    const { direction, classes } = this.props;
    let clonedElems = [];
    nextWatchProp &&
      nextChildProps &&
      clonedElems.push(
        <TransitioningComponent
          enter={true}
          classes={classes}
          direction={direction}
          key={nextWatchProp}
          appear={true}
        >
          {React.cloneElement(this.props.children, nextChildProps)}
        </TransitioningComponent>
      );
    prevWatchProp &&
      prevWatchProp !== nextWatchProp &&
      prevChildProps &&
      clonedElems.push(
        <TransitioningComponent
          enter={false}
          classes={classes}
          direction={direction}
          key={prevWatchProp}
          appear={true}
        >
          {React.cloneElement(this.props.children, prevChildProps)}
        </TransitioningComponent>
      );
    console.log(clonedElems.length);
    return clonedElems;
  };

  render() {
    const { watchProp, childProps, classes, children, direction } = this.props;
    return <div className={classes.rtgList}>{this.getCLonedElems()}</div>;
  }
}

export default withStyles(carouselComponentStyles, { withTheme: true })(
  Carousel
);
