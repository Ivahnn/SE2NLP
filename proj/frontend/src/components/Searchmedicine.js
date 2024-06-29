import React, { useState } from "react";
import "./Searchmedicine.css"; // Ensure the file name matches exactly

function SearchingMedicine() {
  const [searchType, setSearchType] = useState("generic");
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState("NO MEDICINE SELECTED");

  const searchMedicine = () => {
    if (searchInput.trim() === "") {
      setResult("Please enter a medicine name to search.");
    } else {
      setResult(`Searching for ${searchType} with name: ${searchInput}`);
    }
  };

  return (
    <div className="container">
      <h2>How do you want to search for drug information?</h2>
      <div className="search-box">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search Medicine"
        />
        <button onClick={searchMedicine}>🔍</button>
      </div>
      <div className="no-selection">
        <p>{result}</p>
        <img
          src="placeholder.png"
          alt="Medicine Icon"
          style={{ opacity: 0.1 }}
        />
      </div>
    </div>
  );
}

export default SearchingMedicine;
