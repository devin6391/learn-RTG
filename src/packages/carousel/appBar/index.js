import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CarouselNoAnimation from "../carouselNoAnimation";
import CarouselWithAnimation from "../carouselWithAnimation";
import { appBarStyles } from "../carousel.style";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const carouselDataArr = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "The Seat",
    text: "Relax in the beauty"
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "The Farm",
    text: "Feel the freedom"
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    title: "The Track",
    text: "Railway track through peaceful trees"
  }
];

class CarouselTabs extends React.Component {
  state = {
    value: "noAnimation"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Carousel Without animation" value="noAnimation" />
            <Tab label="Carousel With Animation" value="withAnimation" />
          </Tabs>
        </AppBar>
        {value === "noAnimation" && (
          <TabContainer>
            <CarouselNoAnimation dataArr={carouselDataArr} />
          </TabContainer>
        )}
        {value === "withAnimation" && (
          <TabContainer>
            <CarouselWithAnimation dataArr={carouselDataArr} />
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(appBarStyles, { withTheme: true })(CarouselTabs);
