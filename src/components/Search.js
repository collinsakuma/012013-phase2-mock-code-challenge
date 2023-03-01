import React from "react";

function Search({ plantSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => plantSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
