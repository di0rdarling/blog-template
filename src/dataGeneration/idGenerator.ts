/**
 * Generates a unique random strinf Id.
 */
export function generateRandomId(): string {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
