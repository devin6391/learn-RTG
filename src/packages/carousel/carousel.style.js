export const appBarStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  }
});

export const carouselElemWidth = 345;
export const carouselElemMargin = 33;
const carouselTransitionTime = "0.3s";
const carouselPadding = 10;
const carouselArrowStyle = theme => ({
  flex: 1,
  display: "flex",
  backgroundColor: theme.palette.grey[300],
  cursor: "pointer",
  "& > svg": {
    margin: "auto"
  },
  "&:hover": {
    backgroundColor: theme.palette.grey[400]
  }
});

export const carouselComponentStyles = theme => ({
  root: {
    width: 500,
    display: "flex"
  },
  leftMove: {
    ...carouselArrowStyle(theme)
  },
  carouselContainer: {
    flex: 6,
    display: "flex",
    width: carouselElemWidth,
    overflowX: "hidden"
  },
  rightMove: {
    ...carouselArrowStyle(theme)
  },
  card: {
    maxWidth: carouselElemWidth,
    marginLeft: carouselElemMargin,
    marginRight: carouselElemMargin
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  itemList: {
    width: "auto",
    display: "flex",
    transition: carouselTransitionTime,
    "& > div": {
      width: carouselElemWidth,
      paddingTop: carouselPadding,
      paddingBottom: carouselPadding
    }
  },
  rtgList: {
    width: carouselElemWidth,
    display: "flex",
    position: "relative",
    height: carouselElemWidth - 65
  },
  rtgWrapper: {
    position: "absolute",
    top: carouselPadding,
    bottom: carouselPadding,
    left: 0,
    right: 0,
    width: carouselElemWidth
  },
  rtgFarRight: {
    transform: `translate3d(${carouselElemWidth + carouselElemMargin}px, 0, 0)`
  },
  rtgFarLeft: {
    transform: `translate3d(-${carouselElemWidth + carouselElemMargin}px, 0, 0)`
  },
  rtgCenter: {
    transform: `translate3d(${carouselElemMargin}px, 0, 0)`
  },
  rtgWithTransition: {
    transition: carouselTransitionTime
  }
});
