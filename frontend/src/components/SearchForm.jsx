import React from "react";

const STATES = [
  "New South Wales",
  "Victoria",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "Northern Territory",
  "Australian Capital Territory",
];

const SearchForm = ({
  keyword,
  state,
  onKeywordChange,
  onStateChange,
  onSearch,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword, state);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 p-8 justify-center items-end w-full"
    >
      {/* Keyword input */}
      <div className="flex flex-col w-full md:w-106  ">
        <label htmlFor="keyword" className="mb-1 text-sm text-gray-700">
          Keyword
        </label>
        <input
          id="keyword"
          type="text"
          placeholder="e.g. React, Python"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* State select */}
      <div className="flex flex-col w-full md:w-70 ">
        <label htmlFor="location" className="mb-1 text-sm text-gray-700">
          Location
        </label>
        <select
          id="location"
          value={state}
          onChange={(e) => onStateChange(e.target.value)}
          className="p-2 border rounded cursor-pointer"
        >
          <option value="Australia">Australia</option>
          {STATES.map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>

      {/* Search button */}
      <div className="flex flex-col justify-center items-center w-full md:w-30">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-black/80 cursor-pointer w-1/2 md:w-full"
        >
          Search
        </button>
      </div>
    </form>
    </div>
    
  );
};

export default SearchForm;
