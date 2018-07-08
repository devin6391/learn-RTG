import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CarouselComponent from "../carouselComponent";
import { carouselComponentStyles } from "../carousel.style";
import KeyboardLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardRightIcon from "@material-ui/icons/KeyboardArrowRight";

const CarouselContainer = ({ classes, dataArr }) => (
  <div className={classes.root}>
    <div className={classes.leftMove}>
      <KeyboardLeftIcon />
    </div>
    <div className={classes.carouselContainer}>
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
    <div className={classes.rightMove}>
      <KeyboardRightIcon />
    </div>
  </div>
);

export default withStyles(carouselComponentStyles, { withTheme: true })(
  CarouselContainer
);
