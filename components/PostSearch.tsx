// ---------------------------(1variant)--------------------------------
// "use client";

// import { getPostsBySearch } from "@/servises/getPosts";
// import { FormEventHandler, useState } from "react";

// type Props = {
//   onSearch: (value: any[]) => void;
// };

// const PostSearch = ({ onSearch }: Props) => {
//   const [search, setSearch] = useState("");

//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
//     event.preventDefault();

//     const posts = await getPostsBySearch(search);
//     onSearch(posts);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="search"
//         placeholder="search..."
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export { PostSearch };

// --------------------------------(2 variant with zustand)-------------------------------------
// "use client";

// import { usePosts } from "@/store";
// import { FormEventHandler, useState } from "react";

// const PostSearch = () => {
//   const [search, setSearch] = useState("");
//   const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
//     event.preventDefault();

//     await getPostsBySearch(search);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="search"
//         placeholder="search..."
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export { PostSearch };
// -------------------------------------------------------------------

// ----------------------------(3 variant with swr)---------------------------------------
"use client";

import useSWR from "swr";
import { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "@/servises/getPosts";

const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
