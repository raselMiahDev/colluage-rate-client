Colleagues Rating Web Application

A modern Colleagues Rating Web Application built using React, TypeScript, and Tailwind CSS. This application allows Google-authenticated users to create a profile, rate their colleagues on various skills and experiences, and report inappropriate ratings.

Live Link : [colluagesrate.netlify.app](https://colluagesrate.netlify.app/)
Features
==========

-Google Authentication: Secure user authentication via Google OAuth.

-User Profiles: Users can create and manage their profiles.

-Colleague Rating: Rate colleagues on skills, experiences, and overall performance.

-Report Ratings: Report and flag inappropriate or inaccurate ratings.

-Responsive Design: Fully responsive and optimized for all devices.

-Error Handling: Graceful error boundaries for enhanced user experience.

Tech Stack
-------------
Frontend: React + TypeScript

UI Styling: Tailwind CSS

State Management: Zustand

Form Handling: React Hook Form + Zod

API Communication: Axios

Routing: React Router DOM

Authentication: Google OAuth

Validation: Zod

Packages Used

"@hookform/resolvers"
"@react-oauth/google"
"@tanstack/react-query"
"axios"
"clsx"
"date-fns"
"helmet"
"jwt-decode"
"react"
"react-dom"
"react-error-boundary"
"react-helmet-async"
"react-hook-form"
"react-icons"
"react-rating-stars-component"
"react-router-dom"
"react-toastify"
"tailwind-merge"
"zod"
"zustand"

Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (>= 18.x)

pnpm (preferred package manager)

Installation

Clone the repository:

git clone https://github.com/raselMiahDev/colluage-rate-client.git
cd colleagues-rating-webapp

Install dependencies:

pnpm install

Set up environment variables:

Create a .env file in the root directory:

VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_API_BASE_URL=your-api-base-url

Run the development server:

pnpm dev

Open the app:

Visit http://localhost:5173 in your browser.

Scripts
========
Start Development Server:
------------------------
pnpm dev

Build for Production:
---------------------
pnpm build

Preview Production Build:
------------------------
pnpm preview

Linting and Formatting:
-----------------------
pnpm lint


Contributing
-------------

Contributions are welcome! Please open an issue or submit a pull request.

⭐️ Star this repo if you find it helpful!