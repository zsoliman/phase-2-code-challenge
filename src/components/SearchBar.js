import React, {useState} from "react";

function SearchBar({searchInput, setSearchInput, mainData, newArray, handleChange}) {

  return (
    <div className="search">
      <input
      type="text"
      className="searchTerm"
      onChange={handleChange}
      value={searchInput}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
