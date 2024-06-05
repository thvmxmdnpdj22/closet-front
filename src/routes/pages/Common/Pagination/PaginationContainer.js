import React, { useState, useEffect } from "react";
import PaginationPresenter from "./PaginationPresenter";
import './Pagination.css'; // 필요한 스타일을 적용합니다.

const PaginationContainer = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <PaginationPresenter
      totalPages={totalPages}
      currentPage={currentPage}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
    />
  );
};

export default PaginationContainer;