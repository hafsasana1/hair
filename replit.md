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

## Blog Section

The blog section contains comprehensive SEO-optimized articles located in `src/pages/blog/`:

### Published Articles
1. **Hair Porosity Guide** (`/blog/hair-porosity-guide`) - 2,500+ words
   - Complete guide to understanding hair porosity
   - Testing methods, care tips for all porosity types
   
2. **Natural Ingredients Guide** (`/blog/natural-ingredients-for-healthy-hair`) - 2,200+ words
   - 10 science-backed natural ingredients for hair care
   - DIY recipes and usage instructions
   
3. **Heat Damage Protection** (`/blog/heat-damage-protection`) - 2,300+ words
   - Safe temperature guidelines by hair type
   - Heat protectant science and recovery treatments

### SEO Features
- High-CTR META titles and descriptions
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data (Article schema, FAQ schema)
- Internal linking to hair routine pages
- External links to authoritative sources
- Images in WebP format for performance
- Table of contents with smooth scrolling
- Canonical URLs

### Blog Images
Images are stored in `public/images/blog/` in WebP format for optimal performance.
