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

## 🧩 API Integration
CineSeek uses the MoviesDatabase API:

/titles — fetch movie data

Supports filters: year, genre

Implements pagination

Authentication:
API key is stored in .env.local and injected into headers via Next.js API routes, ensuring secure client-side access.

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

📸 Screenshots (Optional)
Coming soon...

🤝 Contributing
- Contributions are welcome!
- Fork the repo
- Create a feature branch (git checkout -b feature/awesome-feature)
- Commit your changes (git commit -m 'Add awesome feature')
- Push and open a PR

📜 License
This project is licensed under the MIT License.

💡 Inspiration
"Cinema is a mirror by which we often see ourselves." — Alejandro González Iñárritu
