export const appBarStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  }
});

export const fadeBlockStyles = theme => ({
  root: {
    width: 300,
    height: 200,
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    padding: 10,
    "& h1": {
      margin: "auto"
    },
    opacity: 0,
    transition: "1s"
  },
  animateCss: {
    opacity: 1
  },
  noClass: {},
  alwaysShow: {
    opacity: 1
  },
  "root-enter": {
    opacity: 1
  }
});
