export const appBarStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  }
});

const carouselElemWidth = 345;

export const carouselComponentStyles = theme => ({
  root: {
    width: 500,
    display: "flex"
  },
  leftMove: {
    flex: 1,
    display: "flex"
  },
  carouselContainer: {
    flex: 6,
    display: "flex",
    width: carouselElemWidth
  },
  rightMove: {
    flex: 1,
    display: "flex"
  },
  card: {
    maxWidth: carouselElemWidth
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});
