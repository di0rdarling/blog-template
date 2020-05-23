import * as React from "react";
import { Button, Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { usePostStoreState } from "../context/post/postContext";
import PostContainer from "./postContainer";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000000",
    minHeight: "100%",
    padding: "10px 20px 0px 50px"
  },
  appBarContainer: {
    width: "100%",
    textAlign: "right",
    marginBottom: 100
  },
  text: {
    color: "white"
  },
  postListContainer: {
    marginTop: 24
  }
});

export default function HomePage() {
  let classes = useStyles();
  let posts = usePostStoreState();

  return (
    <Box className={classes.root}>
      <Box className={classes.appBarContainer}>
        <Button className={classes.text}>Blog</Button>
        <Button className={classes.text}>About</Button>
        <Button className={classes.text}>Contact</Button>
      </Box>
      <Box>
        <Typography className={classes.text}>Posts</Typography>
      </Box>
      <Grid container spacing={6} className={classes.postListContainer}>
        {posts &&
          posts.map((post, index) => <PostContainer key={index} post={post} />)}
      </Grid>
    </Box>
  );
}
