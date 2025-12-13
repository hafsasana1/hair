# Hair Routine Generator

A React-based web application that helps users generate personalized hair care routines using AI-powered analysis.

## Overview

This is a Vite + React application with Tailwind CSS styling. It features a hair quiz that analyzes users' hair type, porosity, and goals to create custom day-by-day hair care plans.

## Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── quiz/          # Quiz-specific components
│   │   └── ui/            # Base UI components (buttons, toasts, etc.)
│   ├── context/           # React context providers
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components for routing
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## Running the Application

- **Development**: `npm run dev` - Starts development server on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`
- **Preview**: `npm run preview` - Preview production build

## Technical Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with tailwindcss-animate
- **Routing**: React Router DOM v6
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Key Features

- AI-powered hair routine quiz
- Multiple hair routine pages for different hair types
- Responsive design
- SEO support via React Helmet
