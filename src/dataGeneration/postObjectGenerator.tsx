import { Post } from "../domain/post/post";
import { generateRandomId } from "../dataGeneration/idGenerator";
const faker = require("faker");

export default function generateFakePost(): Post {
  return {
    id: generateRandomId(),
    title: faker.lorem.words(),
    createdAuthor: faker.name.findName(),
    createdDateTime: faker.date.past(),
    content: faker.lorem.paragraph(),
    allowCommenting: false
  };
}
