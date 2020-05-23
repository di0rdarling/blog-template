import React from "react";
import Homepage from "../src/components/homepage";
import { PostStoreProvider } from "../src/context/post/postContext";

export default function Router() {
  return (
    <PostStoreProvider>
      <Homepage />
    </PostStoreProvider>
  );
}
