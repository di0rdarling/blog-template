import { Comment } from "./comment";
import { ObjectHeader } from "./objectHeader";

/**
 * This object represents the full Post model.
 */
export interface Post extends ObjectHeader {
  /**
   * Post title.
   */
  title: string;

  /**
   * Post content.
   */
  content: string;

  /**
   * Allow users to comment on a post.
   */
  allowCommenting: boolean;

  /**
   * Comments made on the post.
   */
  comments?: Comment[];
}
