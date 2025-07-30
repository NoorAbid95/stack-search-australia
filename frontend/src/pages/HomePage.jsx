import React from 'react'
import SearchForm from '../components/SearchForm'
import JobList from '../components/JobList'
import { api } from '../utils/axios.js'
import { useState } from 'react'

const HomePage = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = async (keyword, state) =>{
        try {
            setLoading(true)
            const res = await api.get("/jobs", {
                params: {keyword, state}
            })
            setJobs(res.data)
        } catch (error) {
            console.log("Error fetching jobs", error);
        }finally{
            setLoading(false)
        }
    }
  return (
    <main>
        <SearchForm onSearch={handleSearch}/>
        {loading ? (
            <p className='text-center mt-4'>Loading Jobs...</p>
        ): (<JobList jobs={jobs}/>)}
    </main>
  )
}

export default HomePage