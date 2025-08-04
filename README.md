# Stack Search Australia

Stack Search Australia is a web application designed to help users find software engineering and tech-related job opportunities across various Australian states. It leverages the Adzuna API to fetch job listings based on user-defined keywords and location preferences.

## Live Demo

Check out the live application here: [https://stack-search-australia.onrender.com/](https://stack-search-australia.onrender.com/)
- Note: Allow 15-30 seconds for live site to spin up

## Features

- **Job Search:** Users can search for jobs by entering keywords and selecting a state.
- **Map View:** Visual representation of job locations across Australia using Mapbox.
- **Job Details:** Clicking on a job pin on the map displays detailed job information in a modal.
- **Save Favorites:** Users can save job listings as favorites for later viewing.

## Technologies Used

- **Frontend:** React.js, Vite, Mapbox for maps integration.
- **Backend:** Node.js, Express.js for serving API requests.
- **API:** Adzuna API for fetching job listings.
- **Styling:** Tailwind CSS for UI components.

## Try It Out Locally 

### Prerequisites

- Node.js and npm installed on your machine.
- Adzuna API credentials (APP ID and API key).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stack-search-australia.git
   cd stack-search-australia
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - ADZUNA_APP_ID=your_app_id
   - ADZUNA_API_KEY=your_api_key
     
### Running the Application
```bash
npm run dev
```

### Acknowledgements
- Mapbox: For providing the mapping platform used in this application.
- Adzuna: For providing the job search API used to fetch job listings.

### Author
Noor Abid
