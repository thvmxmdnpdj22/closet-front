import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import ViewPresenter from "./ViewPresenter";

const ViewContainer = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const [post,setPost]= useState(
    location.state?.post
  );

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return <ViewPresenter 
            post={post}
            setPost={setPost} 
            navigate={navigate}
        />;
};

export default ViewContainer;