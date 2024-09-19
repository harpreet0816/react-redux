import React, { useState } from "react";

const PageBlogs = ({ data }) => {
  // We want to show 50 items (blogs) per page
  const itemsPerPage = 50;

  // State to keep track of the current page, starting from page 1
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting index for the current page (based on page number)
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Calculate the ending index for the current page (last item to show)
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get only the items that should be displayed on the current page
  const currentItems = data.slice(startIndex, endIndex);

  // Function to move to the next page
  const handleNextPage = () => {
    // Only go to the next page if there are more items to show
    if (endIndex < data.length) {
      setCurrentPage((prevPage) => prevPage + 1); // Increase the page number by 1
    }
  };

  // Function to move to the previous page
  const handlePrevPage = () => {
    // Only go to the previous page if we're not already on the first page
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1); // Decrease the page number by 1
    }
  };

  return (
    <div>
      {/* List the current items (blogs) on the current page */}
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>
            {item.id} {item.title} {/* Display the id and title of each blog */}
          </li>
        ))}
      </ul>

      {/* Add Previous and Next buttons for navigation */}
      <div>
        {/* Show 'Previous' button only if we're not on the first page */}
        {currentPage > 1 && <button onClick={handlePrevPage}>Previous</button>}

        {/* Show 'Next' button only if there are more items left after this page */}
        {endIndex < data.length && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </div>
  );
};

PageBlogs.defaultProps = {
  data: [], // Provide a default empty array for data
};

export default PageBlogs;
