import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Transition } from "react-transition-group";
import CarouselComponent from "../carouselComponent";
import { carouselComponentStyles } from "../carousel.style";
import KeyboardLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardRightIcon from "@material-ui/icons/KeyboardArrowRight";

class CarouselContainer extends Component {
  state = {
    currIndex: 0,
    direction: 0 // 0 for left and 1 for right
  };

  slideLeftClick = () => {
    let { currIndex } = this.state;
    if (currIndex > 0) {
      currIndex--;
    } else if (currIndex === 0) {
      currIndex = this.props.dataArr.length - 1;
    } else {
      throw Error(`Current Index of element can't go below 0`);
    }
    this.setState({ currIndex, direction: 1 });
  };

  slideRightClick = () => {
    let { currIndex } = this.state;
    let maxIndex = this.props.dataArr.length - 1;
    if (currIndex < maxIndex) {
      currIndex++;
    } else if (currIndex === maxIndex) {
      currIndex = 0;
    } else {
      throw Error(`Current Index of element can't go beyond ${maxIndex}`);
    }
    this.setState({ currIndex, direction: 0 });
  };

  render() {
    const { classes, dataArr } = this.props;
    const { direction, currIndex } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.leftMove} onClick={this.slideLeftClick}>
          <KeyboardLeftIcon />
        </div>
        <div className={classes.carouselContainer}>
          <div className={classes.rtgList}>
            {dataArr.map((data, index) => (
              <Transition in={index === currIndex} key={data.title} timeout={1}>
                {state => {
                  let wrapperClass = classes.rtgFarRight;
                  switch (state) {
                    case "entering":
                      wrapperClass = !!direction
                        ? classes.rtgFarLeft
                        : classes.rtgFarRight;
                      break;
                    case "entered":
                      wrapperClass =
                        classes.rtgCenter + " " + classes.rtgWithTransition;
                      break;
                    case "exiting":
                      wrapperClass = classes.rtgCenter;
                      break;
                    case "exited":
                      wrapperClass =
                        (!!direction
                          ? classes.rtgFarRight
                          : classes.rtgFarLeft) +
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
            ))}
          </div>
        </div>
        <div className={classes.rightMove} onClick={this.slideRightClick}>
          <KeyboardRightIcon />
        </div>
      </div>
    );
  }
}

export default withStyles(carouselComponentStyles, { withTheme: true })(
  CarouselContainer
);
