import React from "react";

import leftArrow from "../assets/Icons/left-arrow-black.png";
import rightArrow from "../assets/Icons/right-arrow-white.png";

const PaginationComponent = ({ totalPages, goToPage, currentPage }) => {
  return (
    <div className="pagination-wih-left-right">
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          currentPage > 1 ? goToPage(currentPage - 1) : e.stopPropagation();
        }}
        className="pagination-left"
      >
        <img src={leftArrow} />
      </div>
      {Array(totalPages)
        .fill(1)
        .map((item, index) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              goToPage(index + 1);
            }}
            className={`digit ${index + 1 == currentPage ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          currentPage < totalPages
            ? goToPage(currentPage + 1)
            : e.stopPropagation();
        }}
        className="pagination-right"
      >
        <img src={rightArrow} />
      </div>
    </div>
  );
};

export default PaginationComponent;
