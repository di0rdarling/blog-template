import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
import { Post } from "../../domain/post/post";
import { convertToHomepageDateTime } from "../../util/dateTimeUtils";

const useStyles = makeStyles({
  imageContainer: {
    margin: "16px 0px 8px 16px",
    marginBottom: 8
  },
  image: {
    height: 230,
    width: 310
  },
  title: {
    margin: "8px 0px",
    color: "white"
  },
  body: {
    margin: "8px 0px 16px 16px"
  },
  authoringDetailsContainer: {
    margin: "8px 0px",
    display: "flex"
  },
  contentContainer: {
    color: "white",
    width: "100%"
  },
  profileIcon: {
    marginRight: 8,
    marginTop: 1,
    color: "white"
  }
});

interface PostSlideProps {
  key: number;
  post: Post;
}

export default function PostSlide(props: PostSlideProps) {
  let classes = useStyles();

  let { post } = props;

  return (
    <Box>
      <Box className={classes.imageContainer}>
        <img
          className={classes.image}
          src="https://i.pinimg.com/564x/03/43/be/0343bea0ef7435928643d2ebb0a19719.jpg"
          alt="white bike"
        />
      </Box>
      <Box className={classes.body}>
        <Typography variant="h5" className={classes.title}>
          {post.title}
        </Typography>
        <Box className={classes.authoringDetailsContainer}>
          <AccountIcon fontSize="large" className={classes.profileIcon} />
          <Box>
            <Typography variant="caption" className={classes.title}>
              Created by {post.createdAuthor}
            </Typography>
            <Box>
              <Typography variant="caption" className={classes.title}>
                Posted at {convertToHomepageDateTime(post.createdDateTime)}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.contentContainer}>
          <Typography variant="subtitle1">
            {post.content.length > 100
              ? `${post.content.substr(0, 100)}...`
              : post.content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
