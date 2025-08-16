# 🎬 CineSeek

CineSeek is a modern movie discovery application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It allows users to browse movies, search by year or genre, and view detailed information fetched from the **MoviesDatabase API**.  
The app is designed with a responsive UI, clean architecture, and TypeScript typing for maintainability and scalability.

---

## 🚀 Features
- 🔍 **Movie Search** — filter movies by year and genre
- 🎭 **Movie Details** — view key information about each film
- 📱 **Responsive Design** — optimised for mobile, tablet, and desktop
- ⚡ **API Integration** — MoviesDatabase API with server-side routes
- 🛡️ **Secure API Keys** — protected via environment variables
- ⏳ **Pagination & State Management** — efficient navigation of results
- 🌀 **Loading & Error States** — smooth and user-friendly UX

---

## 🛠️ Tech Stack
- [Next.js 14 (Pages Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MoviesDatabase API](https://www.themoviedb.org/documentation/api)
- [Font Awesome](https://fontawesome.com/)

---

## 📂 Project Structure
```
alx-movie-app/
├── components/
│ ├── commons/
│ │ ├── Button.tsx
│ │ ├── Loading.tsx
│ │ └── MovieCard.tsx
│ └── layouts/
│ ├── Footer.tsx
│ ├── Header.tsx
│ └── Layout.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── api/
│ │ └── fetch-movies.ts
│ ├── movies/
│ │ └── index.tsx
│ ├── _app.tsx
│ └── index.tsx
├── public/
├── styles/
│ └── globals.css
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```
---

## ⚙️ Setup & Installation
```
### 1. Clone Repository
git clone https://github.com/your-username/alx-movie-app.git
cd alx-movie-app

### 2. Install Dependencies
npm install
# or
yarn install

### 3. Configure Environment Variables
Create a .env.local file in the project root:
MOVIES_API_KEY=your_api_key_here

### 4. Run Development Server
npm run dev
Then open http://localhost:3000 in your browser.
```

## 🧩API Overview
The **MoviesDatabase API** provides programmatic access to a comprehensive database of movies and TV shows.  
It provides a collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members.  

Key features include:  
- Searching movies by title, genre, or year  
- Retrieving detailed movie information  
- Pagination for browsing large datasets  
- Filtering options for year, type, and genre  

## Version
v1.0 

## Available Endpoints

The MoviesDatabase API provides several endpoints to fetch movie, series, and actor information. All endpoints return an object with a `results` key. Endpoints with pagination include additional keys: `page`, `next`, and `entries`. All query parameters are optional unless otherwise noted.

### Titles
| Endpoint | Description |
|----------|-------------|
| `/titles` | Returns an array of titles based on optional filters and sorting query parameters. Use the `list` query parameter to set the collection you want to query. |
| `/x/titles-by-ids` | Returns an array of titles according to an array of IDs provided. Query parameters: `idsList` (array of IMDb IDs), `info`, `list`. |
| `/titles/{id}` | Returns a single title by IMDb ID. Path parameter `id` is required. Query parameter: `info`. |
| `/titles/{id}/ratings` | Returns title rating and number of votes. Path parameter `id` is required. |
| `/titles/series/{id}` | Returns an array of episodes for a series, including episode ID, episode number, and season number (ascending order). Path parameter `id` required. |
| `/titles/seasons/{id}` | Returns the number of seasons for a series as an integer. Path parameter `id` required. |
| `/titles/series/{id}/{season}` | Returns episodes of a specific season for a series. Path parameters `id` and `season` required. |
| `/titles/episode/{id}` | Returns details for a single episode by IMDb ID. Path parameter `id` required. Query parameter: `info`. |
| `/titles/x/upcoming` | Returns an array of upcoming titles. Supports multiple query parameters. |
| `/titles/search/keyword/{keyword}` | Returns titles matching a given keyword. Path parameter `keyword` required. Supports multiple query parameters. |
| `/titles/search/title/{title}` | Returns titles matching a given title or partial title. Path parameter `title` required. Unique query parameter `exact` can enforce exact matches (default: false). |
| `/titles/search/akas/{aka}` | Returns titles matching a specific AKA. Path parameter `aka` required. Works only for exact, case-sensitive matches. Supports multiple query parameters. |

### Actors
| Endpoint | Description |
|----------|-------------|
| `/actors` | Returns an array of actors. Supports `limit` and `page` query parameters. |
| `/actors/{id}` | Returns details for a single actor by IMDb ID. Path parameter `id` required. |

### Utils
| Endpoint | Description |
|----------|-------------|
| `/title/utils/titleType` | Returns an array of available title types. |
| `/title/utils/genres` | Returns an array of genres. |
| `/title/utils/lists` | Returns an array of lists available for the `list` query parameter. |


## Request and Response Format
### Example Request
```
GET /titles?year=2020&genre=Action HTTP/1.1
Host: moviesdatabaseapi.com
x-rapidapi-key: YOUR_API_KEY

Example Response:
{
  "results": [
    {
      "id": "tt1234567",
      "title": "Example Movie",
      "year": 2020,
      "genre": ["Action", "Thriller"],
      "rating": "7.5",
      "summary": "A brief synopsis of the movie."
    }
  ],
  "totalResults": 100,
  "page": 1
}
```

## Authentication
The API requires an API key for authentication.

Include the API key in request headers:

x-rapidapi-key: YOUR_API_KEY

## Error Handling
### Common error responses include:
- 401 Unauthorised – Invalid or missing API key
- 404 Not Found – Requested resource does not exist
- 429 Too Many Requests – Exceeded rate limits
- 500 Internal Server Error – Server-side error, retry after some time

### Recommended Handling
- Use try/catch blocks for API requests
- Validate API responses before using data
- Implement retries with exponential backoff for rate-limited requests

## Usage Limits and Best Practices
- Respect API rate limits to avoid being blocked
- Cache responses locally when possible to reduce repeated requests
- Use pagination to handle large datasets efficiently
- Secure API keys using environment variables, never commit them to source control

## ✅ Best Practices
- TypeScript interfaces for props & API responses
- Reusable React components for UI consistency
- Loading states & error handling for smooth UX
- Next.js Image optimisation for performance
- Clear separation of concerns in file structure
- Pagination to handle API rate limits & response sizes

## 🐞 Error Handling
- Loading.tsx for pending states
- try/catch blocks in API routes
- Status code validation
- Type guards for API data
- Error boundaries for graceful fallback

## 📸 Screenshots
![Screenshot_16-8-2025_195622_localhost](https://github.com/user-attachments/assets/2f69e2e2-04f4-49fa-89ae-394c067834cd)

## 🤝 Contributing
- Contributions are welcome!
- Fork the repo
- Create a feature branch (git checkout -b feature/awesome-feature)
- Commit your changes (git commit -m 'Add awesome feature')
- Push and open a PR

## 📜 License
This project is licensed under the MIT License.

## 💡 Inspiration
>"Cinema is a mirror by which we often see ourselves." — Alejandro González Iñárritu
