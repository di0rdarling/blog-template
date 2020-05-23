import generateFakePost from "../dataGeneration/postObjectGenerator";
import { Post } from "../domain/post/post";

const faker = require("faker");

export function getAllPosts() {
  let fetchedPosts: Post[] = [];
  let i = faker.random.number({
    min: 3,
    max: 10
  });
  while (fetchedPosts.length < i) {
    fetchedPosts.push(generateFakePost());
  }
  return fetchedPosts;
}
