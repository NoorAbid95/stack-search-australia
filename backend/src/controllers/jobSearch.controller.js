import { adzunaJobSearch } from "../utils/adzuna.api.js";

export const jobSearch = async (req, res) => {
  const { keyword, state } = req.query;
  try {
    const results = await adzunaJobSearch(keyword, state);

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "No jobs found." });
    }

    const formattedJobs = results.map((job) => ({
      jobTitle: job.title,
      companyName: job.company?.display_name || "Unknown Company",
      location: job.location?.display_name || "Location not specified",
      description: job.description,
      salaryRange:
        job.salary_min && job.salary_max
          ? `$${job.salary_min.toLocaleString()} - $${job.salary_max.toLocaleString()}`
          : "Not specified",
      redirectUrl: job.redirect_url,
      latitude: job.latitude,
      longitude: job.longitude,
    }));

    res.status(200).json(formattedJobs);
  } catch (error) {
    console.error("Job search error:", error.message);
    res.status(500).json({ error: "Failed to fetch jobs from Adzuna." });
  }
};
