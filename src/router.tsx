import React from "react";
import Homepage from "../src/homepage";
import { PostStoreProvider } from "../src/context/post/postContext";

export default function Router() {
  return (
    <PostStoreProvider>
      <Homepage />
    </PostStoreProvider>
  );
}
