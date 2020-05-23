import { ObjectHeader } from "./objectHeader";

/**
 * This object represents the full comment model.
 */
export interface Comment extends ObjectHeader {
  /**
   * The users comment.
   */
  comment: string;
}
