# 🎮 Video Games SPA

A responsive Single Page Application built using React (Vite) that fetches and displays a list of video games from a public API.

This project was developed as part of a technical assessment to demonstrate React fundamentals, API integration, state management, data manipulation, and responsive UI implementation.

---

## 🚀 Features

- Fetches 100 video games from external API
- Displays:
  - Game Name
  - Release Year
  - Summary
  - Rating
- Filter by:
  - Name (contains search)
  - Minimum Rating
- Sort by:
  - Release Date
  - Score
  - Name
- Clear filters without re-fetching API
- Loading state while fetching data
- Error handling for failed API calls
- Fully responsive (Desktop / Tablet / Mobile)
- Clean and modern UI built with Tailwind CSS

---

## 🛠 Tech Stack

- React (with Vite)
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- Fetch API
- Async / Await
- Functional Components + React Hooks
- Responsive Design using Tailwind utility classes

---

## 📡 API Used

Data is fetched from:

https://admin.edulatte.in/api/games?pagination[pageSize]=100

The application:
- Retrieves 100 games
- Stores original data separately
- Applies filtering and sorting locally
- Does NOT re-call API when filters change (as per assignment requirement)

---

## 🧠 Application Architecture

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Filters.jsx
│   ├── GameCard.jsx
│   ├── Loader.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Contact.jsx
│
├── services/
│   ├── api.js
│
├── App.jsx
├── main.jsx
├── index.css

---

## 📌 Key Implementation Details

### 🔄 Data Fetching
- API call handled inside useEffect
- Uses async/await
- Implements loading and error state
- Clean separation of API logic inside services/api.js

### 🔍 Filtering & Sorting Logic
- Uses JavaScript array methods (.filter() and .sort())
- Maintains original dataset for reset functionality
- Filtering happens locally without additional API requests

### 📱 Responsive Design
- Built entirely using Tailwind CSS
- Sidebar filter layout for desktop
- Stacked layout for mobile
- Flexible grid system for game cards

### 🧹 Code Quality
- Component-based architecture
- Reusable components
- Clean folder structure
- Readable and maintainable code
