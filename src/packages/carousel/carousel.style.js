export const appBarStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  }
});

const carouselElemWidth = 345;
const carouselElemMargin = 33;
const carouselPadding = 10;
const carouselArrowStyle = theme => ({
  flex: 1,
  display: "flex",
  backgroundColor: theme.palette.grey[300],
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
    "& > div": {
      width: carouselElemWidth,
      paddingTop: carouselPadding,
      paddingBottom: carouselPadding
    }
  }
});
