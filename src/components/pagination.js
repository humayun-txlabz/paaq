import React from "react";
import leftArrow from "../assets/Icons/left-arrow-black.png";
import rightArrow from "../assets/Icons/right-arrow-white.png";
const PaginationComponent = ({ totalPages, goToPage, currentPage }) => {
  return (
    <div className="pagination-wih-left-right">
      {currentPage == 1 ? null : <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          goToPage(currentPage - 1);
        }}
        className="pagination-left"
      >
        <img src={leftArrow} />
      </div>}
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
      {/* <div className="digit">2</div>
            <div className="digit active">3</div> */}
      {totalPages !== currentPage ? <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          goToPage(currentPage + 1);
        }}
        className="pagination-right"
      >
        <img src={rightArrow} />
      </div> : null}
    </div>
  );
};

export default PaginationComponent;
