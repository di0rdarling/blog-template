/**
 * Represent the metadata of an object.
 */
export interface ObjectHeader {
  /**
   * Object id.
   */
  id: string;

  /**
   * Author of the post.
   */
  createdAuthor: string;

  /**
   * Date time the post was created.
   */
  createdDateTime: string;

  /**
   * Date time the post was modified.
   */
  modifiedDateTime?: string;
}
