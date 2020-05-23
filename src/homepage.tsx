import * as React from "react";
import { Button, Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { usePostStoreState } from "../src/context/post/postContext";
import { useEffect } from "react";
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
  },
  postSummaryContainer: {
    textAlign: "center"
  },
  image: {
    height: 260,
    width: 260
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

      <Grid container spacing={3} className={classes.postListContainer}>
        <Grid item xs={3}>
          <Box className={classes.postSummaryContainer}>
            <img
              className={classes.image}
              src="https://i.pinimg.com/564x/03/43/be/0343bea0ef7435928643d2ebb0a19719.jpg"
              alt="white bike"
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.postSummaryContainer}>
            <img
              className={classes.image}
              src="https://i.pinimg.com/564x/3e/67/a2/3e67a206c722190c741878e76166fd9b.jpg"
              alt="white bike"
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.postSummaryContainer}>
            <img
              className={classes.image}
              src="https://i.pinimg.com/564x/0f/0f/5d/0f0f5da1cbf3ee0822da4c4f24565b88.jpg"
              alt="white bike"
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.postSummaryContainer}>
            <img
              className={classes.image}
              src="https://i.pinimg.com/564x/33/c1/a0/33c1a07b29c4a7ddb75a099c89b043e3.jpg"
              alt="white bike"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
