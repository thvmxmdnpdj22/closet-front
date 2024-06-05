import React, { useState } from "react";
import CommunityPresenter from "./CommunityPresenter";
import { useNavigate } from "react-router-dom";

const CommunityContainer = () => {

    const navigate = useNavigate();

    const [posts, setPosts] = useState([]); // 게시글 목록 관리 함수
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch =(searchTerm) => {
      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if(filteredPosts.length > 0){
        console.log("검색결과",filteredPosts);
      }else{
        console.log("검색 결과가 없습니다.")
      }
    };
  
    /**새로운 게시글을 게시글 목록에 추가하는 함수 */
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    }


  return (
    <CommunityPresenter
      navigate={navigate}

      posts={posts}
      setPosts={setPosts}

      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}

      

      addPost={addPost}/>
  );
};

export default CommunityContainer;
