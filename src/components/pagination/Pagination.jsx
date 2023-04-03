import React from "react";
import "./pagination.css";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currPage,
  setPostsPerPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = () => {
    window.scroll(0,0)
  }

  return (
    <>
      <div className="pagination">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => {setCurrentPage(page); handleClick()} }
              className={page === currPage ? "Active" : ""}
            >
              {page}
            </button>
          );
        })}{" "}
      </div>
    </>
  );
}
