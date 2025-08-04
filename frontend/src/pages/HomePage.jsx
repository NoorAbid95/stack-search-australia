import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import MapView from "../components/MapView";
import { api } from "../utils/axios.js";
import JobDetailModal from "../components/JobDetailModal.jsx";
import { TypeAnimation } from "react-type-animation";

import LoadingAnimation from "../components/LoadingAnimation.jsx";
import Navbar from "../components/Navbar.jsx";

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
    <>
      <Navbar />

      <main className="min-h-screen space-y-8 flex justify-center items-center w-full ">
        <div className="flex flex-col w-full items-center">
          <div>
            <TypeAnimation
              sequence={[
                "Helping Australians land their next Software Engineering role.",
                2000,
              ]}
              wrapper="p"
              speed={60}
              repeat={Infinity}
              className="font-semibold text-3xl text-[#3C2A15]"
            />
          </div>
          <div className="flex flex-col w-full items-center mt-20">
            <SearchForm
              keyword={keyword}
              state={state}
              onKeywordChange={setKeyword}
              onStateChange={setState}
              onSearch={handleSearch}
            />
            <div className="relative w-full">
              <MapView
                jobs={jobs}
                setSelectedJob={setSelectedJob}
                selectedState={state}
              />
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center w-full z-10">
                  <div className="flex justify-center items-center w-215 h-160 bg-white/50 rounded-lg">
                    <LoadingAnimation />
                  </div>
                </div>
              )}
              {selectedJob && (
                <JobDetailModal
                  job={selectedJob}
                  onClose={() => setSelectedJob(null)}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
