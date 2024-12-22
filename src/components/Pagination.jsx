import React from "react";

const Pagination = ({
  totalUsers,
  usersPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      {totalPages != 0 ? (
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            {"<"}
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      ) : (
        <div className="m-3 text-red-500">
          ⚠️ No user found with the given name/email!
        </div>
      )}
    </div>
  );
};

export default Pagination;
