import * as React from "react";
import { useState } from "react";
import { makeStyles, Box, IconButton } from "@material-ui/core";
import BackArrow from "@material-ui/icons/ArrowBackIos";
import ForwardArrow from "@material-ui/icons/ArrowForwardIos";
import { usePostStoreState } from "../../context/post/postContext";
import PostSlide from "./postSlide";

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  white: {
    color: "white"
  },
  postsContainer: {
    display: "flex",
    justifyContent: "center"
  },
  postContainer: {
    margin: 8,
    maxWidth: 400
  }
});

export function PostsSlider() {
  let classes = useStyles();
  let posts = usePostStoreState();
  let [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSlide = () => {
    if (activeIndex === posts.length - 1) {
      return setActiveIndex(0);
    }
    setActiveIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setActiveIndex(posts.length - 1);
    }
    setActiveIndex(activeIndex - 1);
  };

  return (
    <Box className={classes.root}>
      <IconButton onClick={prevSlide}>
        <BackArrow className={classes.white} />
      </IconButton>
      <Box className={classes.postsContainer}>
        {posts.map((post, index) => (
          <Box>
            {(index === activeIndex ||
              index === activeIndex + 1 ||
              index === activeIndex + 2) && (
              <Box className={classes.postContainer}>
                <PostSlide key={index} post={post} />
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <IconButton onClick={nextSlide}>
        <ForwardArrow className={classes.white} />
      </IconButton>
    </Box>
  );
}
