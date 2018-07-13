import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { carouselComponentStyles } from "../carousel.style";
import KeyboardLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TransitioningComponent from "./transitioningComponent";

class CarouselContainer extends Component {
  state = {
    currIndex: 0,
    prevIndex: 0,
    appearDirty: false,
    direction: 0 // 0 for left and 1 for right
  };

  componentDidMount() {
    this.setState({ prevIndex: this.props.dataArr.length - 1 });
  }

  slideLeftClick = () => {
    let { currIndex } = this.state;
    let prevIndex = currIndex;
    if (currIndex > 0) {
      currIndex--;
    } else if (currIndex === 0) {
      currIndex = this.props.dataArr.length - 1;
    } else {
      throw Error(`Current Index of element can't go below 0`);
    }
    this.setState({ currIndex, prevIndex, direction: 1, appearDirty: true });
  };

  slideRightClick = () => {
    let { currIndex } = this.state;
    let prevIndex = currIndex;
    let maxIndex = this.props.dataArr.length - 1;
    if (currIndex < maxIndex) {
      currIndex++;
    } else if (currIndex === maxIndex) {
      currIndex = 0;
    } else {
      throw Error(`Current Index of element can't go beyond ${maxIndex}`);
    }
    this.setState({ currIndex, prevIndex, direction: 0, appearDirty: true });
  };

  getElems = () => {
    const { classes, dataArr } = this.props;
    const { direction, currIndex, prevIndex, appearDirty } = this.state;
    const currData = dataArr[currIndex];
    const prevData = dataArr[prevIndex];
    return [
      React.cloneElement(
        <TransitioningComponent
          enter={true}
          data={currData}
          classes={classes}
          direction={direction}
          key={currData.title}
          appear={appearDirty}
        />
      ),
      React.cloneElement(
        <TransitioningComponent
          enter={false}
          data={prevData}
          classes={classes}
          direction={direction}
          key={prevData.title}
          appear={false}
        />
      )
    ];
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.leftMove} onClick={this.slideLeftClick}>
          <KeyboardLeftIcon />
        </div>
        <div className={classes.carouselContainer}>
          <div className={classes.rtgList}>{this.getElems()}</div>
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
