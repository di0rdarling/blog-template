import React, { useEffect } from "react";
import { Post } from "../../domain/post/post";
import { createContext, useReducer, useContext } from "react";
import { PostStoreAction, postStoreReducer } from "./postStoreReducer";
import { getAllPosts } from "../../integration/postStore";

export type PostStore = Post[];
export type PostStoreDispatch = (action: PostStoreAction) => void;

let PostStoreStateContext = createContext<PostStore | undefined>(undefined);
let PostStoreDispatchContext = createContext<PostStoreDispatch | undefined>(
  undefined
);

export interface PostStoreProps {
  children?: React.ReactNode;
}

export function PostStoreProvider(props: PostStoreProps) {
  let { children } = props;
  let [state, dispatch] = useReducer(postStoreReducer, [] as Post[]);

  useEffect(() => {
    let allPosts = getAllPosts();
    dispatch({
      type: "set posts",
      payload: allPosts
    });
  }, []);

  return (
    <PostStoreStateContext.Provider value={state}>
      <PostStoreDispatchContext.Provider value={dispatch}>
        {children}
      </PostStoreDispatchContext.Provider>
    </PostStoreStateContext.Provider>
  );
}

export function usePostStore(): [PostStore, PostStoreDispatch] {
  return [usePostStoreState(), usePostStoreDispatch()];
}

export function usePostStoreState() {
  const context = useContext(PostStoreStateContext);
  if (context === undefined) {
    throw new Error(
      "usePostStoreState must be used within a PostStoreProvider"
    );
  }
  return context;
}

export function usePostStoreDispatch() {
  const context = useContext(PostStoreDispatchContext);
  if (context === undefined) {
    throw new Error(
      "usePostStoreDispatch must be used within a PostStoreProvider"
    );
  }
  return context;
}
