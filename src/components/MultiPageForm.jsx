// MultiPageForm.jsx
import React, { useState } from "react";
import "./MultiPageForm.css"; // Import the CSS file for the container
import Kyc1 from "./Kyc1/Kyc1"; // Import the Kyc1 component
import Kyc2 from "./Kyc2/Kyc2"; // Import the Kyc2 component
import Kyc3 from "./Kyc3/Kyc3"; // Import the Kyc3 component

const MultiPageForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="multi-page-form">
      {currentPage === 1 && <Kyc1 nextPage={nextPage} />}
      {currentPage === 2 && <Kyc2 nextPage={nextPage} />}
      {currentPage === 3 && <Kyc3 />}

      <div className="button-container">
        {currentPage > 1 && (
          <button className="prev-button" onClick={prevPage}>
            Previous
          </button>
        )}

        {currentPage < 3 && (
          <button className="next-button" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiPageForm;
