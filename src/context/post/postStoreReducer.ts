import { Post } from "../../domain/post/post";
import { Comment } from "../../domain/comment/comment";
import { PostStore } from "./postContext";
import { PostCreate } from "../../domain/post/postCreate";

export type PostStoreAction =
  | { type: "set posts"; payload: Post[] }
  | { type: "create post"; post: PostCreate }
  | { type: "edit post"; post: Post }
  | { type: "delete post"; postId: number }
  | { type: "add post comment"; postId: number; comment: Comment }
  | { type: "edit post comment"; postId: number; comment: Comment }
  | { type: "delete post comment"; postId: number };

export function postStoreReducer(
  state: PostStore | undefined,
  action: PostStoreAction
) {
  switch (action.type) {
    case "set posts":
      return action.payload;
  }
}
