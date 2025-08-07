import {describe, it, expect, vi, beforeEach} from 'vitest'
import { jobSearch } from './jobSearch.controller.js'
import * as adzunaApi from "../utils/adzuna.api.js"

const mockRequest = (query ={}) =>({query})
const mockResponse = () =>{
    const res = {}
    res.status = vi.fn().mockReturnValue(res)
    res.json = vi.fn().mockReturnValue(res)
    return res
}

describe('jobSearch controller', () =>{
    beforeEach(() => {
        vi.restoreAllMocks()
    })
    it("should return return formatted job data when results exists", async() =>{
        const fakeJobs = [{
            title: "Software Engineer",
            company: {display_name: "Tech Co"}, 
            locaiton: {display_name: "Melbourne, VIC"}, 
            description: "A tech role", 
            salary_min: 80000, 
            salary_max: 120000, 
            contract_time: "full_time", 
            redirect_url: "http://test.com/job1", 
            latitude: -37.8136, 
            longitude: 144.9631
        }]
        vi.spyOn(adzunaApi, 'adzunaJobSearch').mockResolvedValue(fakeJobs)

        const req = mockRequest({keyword: "react", state: 'vic'})
        const res = mockResponse()

        await jobSearch(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith([{
            jobTitle: "Software Engineer",
            companyName: "Tech Co", 
            location: "Location not specified", 
            description: "A tech role", 
            salaryRange: '$80,000 - $120,000',
            contract: "Full Time", 
            redirectUrl: "http://test.com/job1", 
            latitude: -37.8136, 
            longitude: 144.9631
        }])
    })
    it("should return 404 if no jobs are found", async() =>{
        vi.spyOn(adzunaApi, 'adzunaJobSearch').mockResolvedValue([])

        const req = mockRequest({keyword: 'none', state: 'vic'}
        )
        const res = mockResponse()

        await jobSearch(req, res)

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({message: 'No jobs found.'})
    })
    it("should handle API errors and return 500", async() =>{
        vi.spyOn(adzunaApi, 'adzunaJobSearch').mockRejectedValue(new Error('API failed'))

        const req = mockRequest({keyword: 'react', state: 'vic'})
        const res = mockResponse()

        await jobSearch(req, res)

        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({error: "Failed to fetch jobs from Adzuna."})
    })
})



