import { Comment } from "../comment/comment";
import { Image } from "../image/image";

/**
 * Represents the post create model.
 */
export interface PostCreate {
  /**
   * Post title.
   */
  title: string;

  /**
   * Image of the post
   */
  image: Image;

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
