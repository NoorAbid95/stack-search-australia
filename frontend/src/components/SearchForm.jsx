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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 p-4"
    >
      <input
        type="text"
        placeholder="Enter a keyword (e.g. React, Python)"
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <select
        value={state}
        onChange={(e) => onStateChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="Australia">Australia</option>
        {STATES.map((stateName) => (
          <option key={stateName} value={stateName}>
            {stateName}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
