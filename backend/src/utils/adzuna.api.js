import axios from "axios";

export const adzunaJobSearch = async (userKeyword, userState) => {
  const app_id = process.env.ADZUNA_APP_ID;
  const app_key = process.env.ADZUNA_APP_KEY;

  try {
    const response = await axios.get(
      "https://api.adzuna.com/v1/api/jobs/au/search/1",
      {
        params: {
          app_id,
          app_key,
          what: "software engineer",
          what_and: userKeyword,
          where: userState,
          results_per_page: 30,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log("Error in adzunaAPI call");
  }
};
