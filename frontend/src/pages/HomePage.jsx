import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import MapView from "../components/MapView";
import { api } from "../utils/axios.js";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [state, setState] = useState("Australia");
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = async (searchKeyword, searchState) => {
    try {
      setLoading(true);
      const res = await api.get("/jobs", {
        params: { keyword: searchKeyword, state: searchState },
      });
      const jobs = res.data;
      console.log(jobs);
      console.log("First job object:", res.data[0]);
      setJobs(jobs);
    } catch (error) {
      console.error("Error fetching jobs", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="space-y-8">
      <SearchForm
        keyword={keyword}
        state={state}
        onKeywordChange={setKeyword}
        onStateChange={setState}
        onSearch={handleSearch}
      />
      {loading ? (
        <p className="text-center">Loading jobs...</p>
      ) : (
        <>
          <MapView
            jobs={jobs}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            selectedState={state}
          />
        </>
      )}
    </main>
  );
};

export default HomePage;
