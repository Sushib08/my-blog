import { getAllPosts } from "@/lib/posts";
import { useState } from "react";

export default function LoadMore({ posts, setPosts, taxonomy = null }) {
  let bT = posts.pageInfo.hasNextPage
    ? "Plus de Posts"
    : "Aucun Posts à Charger";
  let bD = posts.pageInfo.hasNextPage ? false : true;

  const [buttonText, setButtonText] = useState(bT);
  const [buttonDisabled, setButtonDisabled] = useState(bD);

  const handleOnclick = async (event) => {
    setButtonText("Chargement...");
    setButtonDisabled(true);

    const morePosts = await getAllPosts(posts.pageInfo.endCursor, taxonomy);

    let updatedPosts = {
      pageInfo: {},
      nodes: [],
    };

    updatedPosts.pageInfo = morePosts.pageInfo;

    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });

    morePosts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });

    setPosts(updatedPosts);

    if (morePosts.pageInfo.hasNextPage) {
      setButtonText("Plus de Posts");
      setButtonDisabled(false);
    } else {
      setButtonText("Aucun Posts à Charger");
      setButtonDisabled(true);
    }
  };
  return (
    <button
      className="load-more ml-[50%] font-bold w-[150px] h-16 rounded-xl mb-5 bg-blue-400 text-slate-100 py-2 hover:bg-blue-500"
      onClick={handleOnclick}
      disabled={buttonDisabled}
    >
      {buttonText}
    </button>
  );
}
