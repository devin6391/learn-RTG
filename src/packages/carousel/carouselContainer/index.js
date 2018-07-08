import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CarouselComponent from "../carouselComponent";
import {
  carouselComponentStyles,
  carouselElemMargin,
  carouselElemWidth
} from "../carousel.style";
import KeyboardLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardRightIcon from "@material-ui/icons/KeyboardArrowRight";

class CarouselContainer extends Component {
  state = {
    marginLeft: carouselElemMargin,
    currIndex: 0
  };

  slideLeftClick = () => {
    let { marginLeft, currIndex } = this.state;
    let maxIndex = this.props.dataArr.length - 1;
    if (currIndex > 0) {
      currIndex--;
    } else if (currIndex === 0) {
      currIndex = maxIndex;
    } else {
      throw Error(`Current Index of element can't go below 0`);
    }
    marginLeft = -carouselElemWidth * currIndex + carouselElemMargin;
    this.setState({ marginLeft, currIndex });
  };

  slideRightClick = () => {
    let { marginLeft, currIndex } = this.state;
    let maxIndex = this.props.dataArr.length - 1;
    if (currIndex < maxIndex) {
      currIndex++;
    } else if (currIndex === maxIndex) {
      currIndex = 0;
    } else {
      throw Error(`Current Index of element can't go beyond ${maxIndex}`);
    }
    marginLeft = -carouselElemWidth * currIndex + carouselElemMargin;
    this.setState({ marginLeft, currIndex });
  };

  render() {
    const { classes, dataArr } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.leftMove} onClick={this.slideLeftClick}>
          <KeyboardLeftIcon />
        </div>
        <div className={classes.carouselContainer}>
          <div
            className={classes.itemList}
            style={{ marginLeft: this.state.marginLeft }}
          >
            {dataArr.map(data => (
              <CarouselComponent
                key={data.title}
                imageUrl={data.imageUrl}
                title={data.title}
                text={data.text}
                classes={classes}
              />
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
