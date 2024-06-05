import React from "react";
import './Pagination.css'; // 필요한 스타일을 적용합니다.

const PaginationPresenter = ({
  totalPages,
  currentPage,
  handlePrevPage,
  handleNextPage,
  handlePageClick
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            onClick={() => handlePageClick(i)}
            className={i === currentPage ? "active" : ""}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        이전
      </button>
      <ul className="page-numbers">
        {renderPageNumbers()}
      </ul>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        다음
      </button>
    </div>
  );
};

export default PaginationPresenter;