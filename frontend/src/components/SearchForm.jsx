import React from "react";
import { useState } from "react";

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

const SearchForm = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [state, setState] = useState("Australia");

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
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="p-2 border rounded"
      >
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
