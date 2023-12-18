import React, { useState, useEffect, useRef } from "react";
import AppAndPlayStoreFooter from "components/appAndPlayStoreFooter";

import ItemCard from "./ItemCard";
import TitleCard from "./TitleCard";
import { apiClientContentFul } from "services/apiClient";

const MainBlog = (props) => {
  //To restrain from React Hydration error
  //start
  const { posts } = props;
  const [showChild, setShowChild] = useState(false);
  const [allPosts, setAllPosts] = useState(posts?.items);
  const [isPostsEnded, setIsPostsEnded] = useState(false);
  const initialPosts = useRef(6);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  //end

  const getPosts = async () => {
    
    if (posts.total > initialPosts.current) {
      const nextPosts = await apiClientContentFul(
        "mainBlogs",
        initialPosts.current,
        6
      )
        .then((res) => {
          return res.items;
        })
        .catch(console.error);

      setAllPosts((current) => [...current, ...nextPosts]);
      initialPosts.current = initialPosts.current + 6;
      if(initialPosts.current >= posts.total){
        setIsPostsEnded(true);
      }
    }
  };

  return (
    <div className="blog-main">
      <TitleCard title={"Our Blogs"} />
      <div className="blog-items">
     
        {allPosts?.map((item, index) => (
          <ItemCard blog={item} key={index} />
        ))}
      </div>
      { !isPostsEnded ? (
      <div className="blogs-main-btn-bottom">
        <div className="blogs-main-bottom-color-btn" onClick={() => getPosts()}>
          Load More...
        </div>
      </div>
      ) : null}
      <AppAndPlayStoreFooter />
    </div>
  );
};

export default MainBlog;
