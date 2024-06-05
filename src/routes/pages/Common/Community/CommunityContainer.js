import React, { useEffect, useState } from "react";
import CommunityPresenter from "./CommunityPresenter";
import { default as Pagination } from "../Pagination"; // 경로를 적절히 설정
import { useNavigate } from "react-router-dom";

const CommunityContainer = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]); // 게시글 목록 관리 함수
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]); // 검색된 게시글 목록
  const postsPerPage = 10; // 페이지 당 표시할 게시글 수

  // 검색어에 따라 게시글 필터링
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length > 0) {
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts([]); // 검색 결과가 없을 때 빈 배열로 설정
    }
  };

  // 로컬스토리지에서 게시글 목록 불러오기
  useEffect(() => {
    const postArr = JSON.parse(localStorage.getItem('post')) || [];
    setPosts(postArr);
    setFilteredPosts(postArr); // 초기에는 모든 게시글을 보여줌
  }, []);

  // 페이지네이션을 위한 현재 페이지의 게시글 가져오기
  const [currentPage, setCurrentPage] = useState(1);
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  // 새로운 게시글을 게시글 목록에 추가하는 함수
  const addPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
    localStorage.setItem('post', JSON.stringify(updatedPosts)); // 로컬스토리지 업데이트
  };

  const renderNoResultMessage = () => {
    if (searchTerm && filteredPosts.length === 0) {
      return <div className="no-result-message">입력하신 정보를 찾을 수 없습니다.</div>;
    }
    return null;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <CommunityPresenter
        navigate={navigate}
        posts={currentPosts} // 현재 페이지의 게시글만 전달
        currentPage={currentPage}
        setPosts={setPosts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        addPost={addPost}
        renderNoResultMessage={renderNoResultMessage}
      />
      <Pagination
        totalItems={filteredPosts.length}
        itemsPerPage={postsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CommunityContainer;