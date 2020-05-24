import * as React from "react";
import { Button, Box, makeStyles, Typography } from "@material-ui/core";
import { PostsSlider } from "../components/slider/postsSlider";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000000",
    padding: "10px 20px 0px 50px"
  },
  appBarContainer: {
    width: "100%",
    textAlign: "right",
    marginBottom: 100
  },

  //TODO Theme provider
  text: {
    color: "white"
  },
  trendingPostsSliderContainer: {
    // width: '100%'
  }
});

export default function HomePage() {
  let classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.appBarContainer}>
        <Button className={classes.text}>Blog</Button>
        <Button className={classes.text}>About</Button>
        <Button className={classes.text}>Contact</Button>
      </Box>
      <Box>
        <Typography className={classes.text}>Trending Posts</Typography>
      </Box>
      <Box className={classes.trendingPostsSliderContainer}>
        <PostsSlider />
      </Box>
    </Box>
  );
}
