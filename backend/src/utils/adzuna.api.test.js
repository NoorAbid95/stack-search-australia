import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { adzunaJobSearch } from "./adzuna.api.js";

vi.mock("axios");

describe("adzunaJobSearch", () => {
  it("should call the Adzuna API with correct params and returns result", async () => {
    const mockResult = [{ id: 1, title: "Software Engineer" }];
    axios.get.mockResolvedValueOnce({ data: { results: mockResult } });

    const results = await adzunaJobSearch("react", "Victoria");

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.adzuna.com/v1/api/jobs/au/search/1", {
        params: {
            app_id: process.env.ADZUNA_APP_ID, 
            app_key: process.env.ADZUNA_APP_KEY, 
            what: "software engineer", 
            what_and: "react", 
            where: "Victoria", 
            results_per_page: 30, 
        }
      }
    );
    expect(results).toEqual(mockResult)
  });
  it("should return undefined if API call fails", async() =>{
    axios.get.mockRejectedValueOnce(new Error("API down"))
    const result = await adzunaJobSearch("node", "NSW")
    expect(result).toBeUndefined()
  })
});
