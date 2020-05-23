import moment from "moment";

/**
 * @description Converts an iso date time string into a readable format for the hompage.
 */
export function convertToHomepageDateTime(dateTime: string) {
  return moment(dateTime).format("MM/DD/YY");
}
