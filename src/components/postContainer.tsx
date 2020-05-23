import * as React from "react";
import { Post } from "../domain/post/post";
import { Box, Typography, Grid, makeStyles } from "@material-ui/core";
import { convertToHomepageDateTime } from "../util/dateTimeUtils";

const useStyles = makeStyles({
  postSummaryContainer: {
    textAlign: "center"
  },
  image: {
    height: 230,
    width: "80%"
  },
  postTitle: {
    margin: "8px 0px",
    color: "white"
  },
  postTextContainer: {
    width: "100%"
  },
  authoringDetailsContainer: {
    margin: "8px 0px"
  },
  text: {
    color: "white"
  }
});

interface PostContainerProps {
  post: Post;
}

export default function PostContainer(props: PostContainerProps) {
  let classes = useStyles();
  let { post } = props;

  return (
    <Grid item xs={4}>
      <Box className={classes.postSummaryContainer}>
        <img
          className={classes.image}
          src="https://i.pinimg.com/564x/03/43/be/0343bea0ef7435928643d2ebb0a19719.jpg"
          alt="white bike"
        />
      </Box>
      <Box className={classes.postTextContainer}>
        <Typography variant="h5" className={classes.postTitle}>
          {post.title}
        </Typography>
        <Box className={classes.authoringDetailsContainer}>
          <Box>
            <Typography variant="caption" className={classes.postTitle}>
              Created by {post.createdAuthor}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" className={classes.postTitle}>
              Posted at {convertToHomepageDateTime(post.createdDateTime)}
            </Typography>
          </Box>
        </Box>
        <Typography variant="subtitle1" className={classes.text}>
          {post.content}
        </Typography>
      </Box>
    </Grid>
  );
}
