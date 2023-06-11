// --------------------(1variant)-----------------------------
// "use client";

// import Link from "next/link";

// type Props = {
//   posts: any[];
// };

// const Posts = ({ posts }: Props) => {
//   return (
//     <ul>
//       {posts.map((post: any) => (
//         <li key={post.id}>
//           <Link href={`/blog/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export { Posts };

// ---------------------(2variant)---------------------------------
"use client";

import Link from "next/link";
import { usePosts } from "@/store";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import LoadingPosts from "@/app/blog/loading";

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return loading ? (
    // <h3>Loading...</h3>
    <LoadingPosts />
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
// ---------------------------------------------------------------
