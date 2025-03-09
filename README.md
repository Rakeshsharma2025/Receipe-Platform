# Recipe Sharing Platform

## Overview
The **Recipe Sharing Platform** is a full-stack web application that allows users to share, discover, and manage recipes. Users can create accounts, upload recipes, explore trending dishes, and interact with other food enthusiasts in real-time.

## Features
- 🔐 **User Authentication** – Secure sign-up and login with JWT authentication.
- 📜 **Recipe Management** – Add, edit, and delete recipes with detailed descriptions and images.
- 🔍 **Search & Filter** – Easily search for recipes by name, category, or ingredients.
- 🕒 **Real-Time Updates** – Recipes and comments update instantly using WebSockets.
- ❤️ **Favorites & Likes** – Save favorite recipes and interact with other users.
- 📊 **Dashboard** – Personalized user dashboard with favorite recipes and activity logs.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time updates**: WebSockets
- **Hosting**: Vercel (Frontend), Render (Backend)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (local or cloud instance)

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/recipe-sharing-platform.git
   cd recipe-sharing-platform
   ```
2. **Backend Setup:**
   ```sh
   cd backend
   npm install
   npm start
   ```
3. **Frontend Setup:**
   ```sh
   cd frontend
   npm install
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## API Endpoints
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | /api/recipes  | Fetch all recipes |
| POST   | /api/recipes  | Add a new recipe |
| GET    | /api/users    | Get user details |

## Contributing
Feel free to fork the repository and submit pull requests.

## License
MIT License © 2025 Rakeshsharma 
