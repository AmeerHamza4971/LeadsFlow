# LeadsFlow - Job Posting Application

A simple Next.js application for managing and viewing job postings.

## Features

- 📋 View list of all job postings
- 🔍 View detailed information about each job posting
- 📱 Responsive design for mobile and desktop
- 🎨 Modern and clean UI

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
LeadsFlow/
├── app/
│   ├── jobs/
│   │   └── [id]/
│   │       ├── page.tsx      # Job detail page
│   │       └── page.css      # Job detail styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page (job listings)
│   ├── page.css              # Home page styles
│   ├── globals.css           # Global styles
│   └── not-found.tsx         # 404 page
├── data/
│   └── jobs.ts               # Static job post data
├── package.json
├── tsconfig.json
└── next.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules

## Current Status

The application currently displays static job post data. Future enhancements could include:
- Database integration
- User authentication
- Job posting creation/editing
- Search and filter functionality
- Application submission
