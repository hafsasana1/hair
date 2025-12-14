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
- Contact Us page with form and FAQ
- About page with E-E-A-T credentials (expert team profiles, qualifications)
- Blog disclaimer component on all articles for legal compliance
- Enhanced Results page with:
  - **Fully Dynamic Routine Generation** (Updated Dec 14, 2025):
    - Morning routines personalized by hair type (straight, wavy, curly, coily)
    - Evening routines adapted to hair type and density
    - Weekly schedules with appropriate wash frequency per hair type
    - Product recommendations based on hair type, porosity, and climate
    - Advanced tips customized for porosity, climate, and concerns
    - All values normalized to lowercase for consistent matching
  - Climate-aware recommendations (humid, dry, cold, temperate)
  - Porosity-specific guidance (low, medium, high)
  - Density-adjusted techniques (thin, medium, thick)
  - Concern-targeted treatments (dryness, frizz, damage, hairloss, oiliness, dandruff, dullness)
  - Dynamic SEO title based on hair type and porosity
  - Daily routine (Morning & Night) sections
  - Weekly routine schedule (Wash Day, Refresh Day, Deep Conditioning, Protein Treatment)
  - Personalized product recommendations
  - Advanced hair care tips with NLP-rich content
  - **JSON-LD Structured Data** (Updated Dec 14, 2025):
    - FAQ schema with dynamic questions based on hair profile
    - HowTo schema for morning routine steps
    - Product schema for the personalized routine
  - Pinterest-style shareable routine card
  - SEO-friendly URL routing (/routine/:slug)
  - LocalStorage persistence for returning visitors

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

4. **Hair Types Guide** (`/blog/hair-types-guide`) - 3,500+ words (Added Dec 14, 2025)
   - Complete Andre Walker hair typing system explained (Types 1-4)
   - Hair texture and density understanding
   - Care tips and product recommendations for each type
   - 8 FAQs with schema markup
   - Internal linking to related articles

5. **Seasonal Hair Care Guide** (`/blog/seasonal-hair-care`) - 3,200+ words (Added Dec 14, 2025)
   - Complete guide to adapting hair care routines for spring, summer, fall, winter
   - UV protection and sun damage prevention
   - Humidity and frizz control strategies
   - Winter dryness and static prevention
   - Climate-specific tips for tropical, arid, coastal climates
   - DIY seasonal treatments with natural ingredients
   - 8 FAQs with schema markup
   - HowTo schema for better search visibility
   - Extensive internal linking to related hair routine pages
   - External links to dermatology and scientific sources

6. **DIY Hair Masks Guide** (`/blog/diy-hair-masks`) - 3,800+ words (Added Dec 14, 2025)
   - 25+ homemade hair mask recipes for every hair type
   - Masks for dry, oily, damaged, color-treated, curly hair
   - Hair growth stimulating masks with scientific backing
   - Frizz control treatments
   - Complete ingredient guide with benefits table
   - Step-by-step application instructions
   - 8 FAQs with schema markup
   - Recipe schema for rich snippets
   - HowTo schema for search visibility
   - Internal linking to all related hair routine pages
   - External links to scientific studies (PubMed)

7. **Hair Growth Guide** (`/blog/hair-growth-guide`) - 4,500+ words (Added Dec 14, 2025)
   - Complete science of the hair growth cycle (Anagen, Catagen, Telogen, Exogen phases)
   - Factors affecting hair growth (genetics, age, hormones, nutrition, stress)
   - Essential nutrients for hair growth (protein, biotin, iron, vitamin D, zinc, omega-3s)
   - Scalp health fundamentals and massage techniques
   - Scientifically proven treatments (Minoxidil, Finasteride, LLLT, PRP)
   - Natural remedies with research backing (rosemary oil, peppermint oil, castor oil)
   - Lifestyle changes for optimal growth
   - Common hair growth mistakes to avoid
   - Realistic growth timeline expectations
   - 8 FAQs with schema markup
   - Article, FAQ, and HowTo schemas for rich snippets
   - 4 custom WebP images (growth results, ingredients, follicle diagram, scalp massage)
   - Extensive internal linking to all related blog posts
   - External links to PubMed research and scientific journals

### SEO Features
- High-CTR META titles and descriptions
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data (Article schema, FAQ schema, ContactPage schema, AboutPage schema)
- Internal linking to hair routine pages
- External links to authoritative sources
- Images in WebP format for performance
- Table of contents with smooth scrolling
- Canonical URLs
- Blog disclaimer on all articles for legal compliance
- E-E-A-T signals (expert credentials, team bios, trust indicators)

### Server-Side SEO Implementation (Added Dec 14, 2025)
Comprehensive SEO optimizations for Google ranking and AI overview visibility:

**Meta Tags (index.html - Server-Side Rendered):**
- Primary meta title: "AI Hair Routine Generator by Hair Type & Climate | HairGen"
- High-CTR meta description optimized for 155-160 characters
- Keywords targeting hair type (1a-4c), porosity, climate-based care
- Robots directives: index, follow, max-image-preview:large, max-snippet:-1
- Bot-specific directives for Googlebot, Bingbot

**Schema Markup (JSON-LD in index.html):**
- WebSite schema with SearchAction for sitelinks search box
- Organization schema with contact point
- SoftwareApplication schema for the AI tool
- WebApplication schema for the quiz
- FAQPage schema with 6 comprehensive Q&As
- BreadcrumbList schema for navigation
- ItemList schema for hair routine guides
- Speakable schema for voice search and AI assistants

**AI Overview Optimization:**
- robots.txt allows major AI crawlers (GPTBot, ChatGPT-User, PerplexityBot, Claude-Web, anthropic-ai)
- Speakable specification for voice search compatibility
- FAQ schema optimized for AI extraction

**Additional SEO Files:**
- `public/robots.txt` - Crawler directives and sitemap reference
- `public/sitemap.xml` - Complete XML sitemap with all pages

**Social Media:**
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card tags for Twitter sharing
- 1200x630 recommended OG image dimensions

**Note:** Canonical URLs are set to hairgen.com - update these to match your production domain.

### E-E-A-T Implementation (Added Dec 14, 2025)
- **About Page** (`/about`): Enhanced with expert team profiles, credentials, qualifications
  - Expert team: Dr. Sarah Mitchell (Ph.D. Dermatology, Trichologist), Marcus Thompson (Licensed Cosmetologist), Dr. Emily Chen (M.D. Cosmetic Dermatology)
  - Trust signals and credential badges
  - Organization schema markup with employee credentials
- **Contact Page** (`/contact`): SEO-optimized contact form with FAQ section
  - ContactPage schema markup
  - Form handling for inquiries
  - Business hours and contact methods
- **BlogDisclaimer Component** (`src/components/BlogDisclaimer.jsx`): Reusable disclaimer for all blog articles
  - Medical/professional advice disclaimer
  - Links to Terms and Privacy pages
  - Added to all 7 blog articles

### Blog Images
Images are stored in `public/images/blog/` in WebP format for optimal performance.
