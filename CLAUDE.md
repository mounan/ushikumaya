# Ushikumaya Project - CLAUDE.md

## Project Overview

**Ushikumaya** is a website for a traditional Japanese Airbnb villa located in Yokoshibahikari-machi, Chiba Prefecture. The project was initially built with Jekyll and has been **completely migrated to React** for better flexibility and modern development capabilities.

## Technology Stack Migration

### Previous Stack (Jekyll)
- Jekyll static site generator
- Liquid templating
- SCSS for styling
- Basic JavaScript for interactions

### Current Stack (React)
- **React 18** with modern hooks and functional components
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing for SPA navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Lucide React** - Modern icon library
- **Vercel** - Modern deployment platform with edge network

## Project Structure

```
ushikumaya/
├── public/               # Static assets
│   └── assets/images/    # Property photos (preserved from Jekyll)
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── BannerSlider.jsx
│   │   └── MobileBookButton.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── StayInfo.jsx
│   │   ├── Gallery.jsx
│   │   ├── AreaGuide.jsx
│   │   ├── Access.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment configuration
```

## Property Information

### Basic Details
- **Name**: Ushikumaya (うしくまや)
- **Location**: Yokoshibahikari-machi, Sanbu District, Chiba Prefecture, Japan
- **Capacity**: Up to 6 guests (3 bedrooms + loft tatami space)
- **Setting**: Traditional Japanese hideaway surrounded by bamboo groves
- **Airbnb**: https://www.airbnb.jp/rooms/48761201

### Key Features
- **Free Parking**: Space for 6 vehicles with covered areas
- **BBQ Equipment**: Complete setup included during campaign
- **Pet Friendly**: Small dogs welcome (under 10kg, ¥1,000 cleaning fee)
- **Golf Access**: 7 minutes to Caledonian Golf Club, 11 minutes to Shibayama
- **Beach Access**: 21 minutes to Kujukuri Beach
- **Airport Access**: 21 minutes from Narita Airport

### Services Offered
- Airport shuttle service (for golf guests)
- Golf course transportation
- Station pick-up arrangements
- Local experience assistance

## Website Features

### 1. Auto-Sliding Banner
- 5 high-quality property images
- Auto-advance every 5 seconds
- Touch/swipe support for mobile
- Keyboard navigation (arrow keys)
- Progress bar with slide indicators
- Smooth fade transitions

### 2. Advanced Photo Gallery
- Categorized images: Property, Countryside, BBQ, Starry Nights, Winter
- Filter buttons for category selection
- Lightbox functionality for full-size viewing
- Smooth animations between categories
- Responsive grid layout

### 3. Mobile-Responsive Design
- Mobile-first approach
- Floating booking button on mobile (hides/shows on scroll)
- Touch-friendly navigation
- Optimized for all screen sizes

### 4. Modern Animations
- Page transitions using Framer Motion
- Hover effects on cards and buttons
- Staggered animations for lists
- Loading states and micro-interactions

### 5. Component Architecture
- **Navigation**: Responsive header with mobile hamburger menu
- **Footer**: Comprehensive site information and quick links
- **BannerSlider**: Hero section with rotating images
- **MobileBookButton**: Sticky CTA for mobile users

## Pages Overview

### Home (`/`)
- Hero banner with auto-sliding images
- Feature highlights (parking, BBQ, golf, etc.)
- Quick info cards (Accommodation, Activities, Transport)
- Call-to-action sections

### Stay Info (`/stay`)
- Property gallery showcase
- Detailed feature grid (capacity, layout, amenities)
- Traditional Japanese experience section
- Booking call-to-action

### Gallery (`/gallery`)
- Categorized photo collection
- Interactive filtering system
- Lightbox image viewer
- Professional property photography

### Area Guide (`/area`)
- Local attractions (golf, beach, water park, strawberry picking)
- Distance and time information
- Seasonal activity recommendations
- Local amenities (restaurants, shopping, transport)

### Access (`/access`)
- Transportation options (car, train, plane)
- Step-by-step directions
- Key location distances
- Parking and shuttle information

### FAQ (`/faq`)
- Comprehensive question categories
- Expandable/collapsible sections
- Quick reference information
- Booking and property policies

### Contact (`/contact`)
- Multiple contact methods
- Special services information
- Inquiry form (redirects to Airbnb)
- Emergency contact details

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod
```

## Deployment

### Vercel Setup
- Modern deployment platform with global edge network
- Automatic deployments on push to main branch
- Preview deployments for pull requests
- Instant rollbacks and zero-downtime deployments

### Build Configuration
- Vite configured for optimal production builds
- Automatic code splitting and lazy loading
- Asset optimization and compression
- SPA routing support with vercel.json configuration

### Deployment Features
- Automatic HTTPS with SSL certificates
- Global CDN for fast content delivery
- Built-in analytics and performance monitoring
- Environment variables support
- Custom domains and subdomains

## Design System

### Color Palette
- **Primary (Bamboo)**: Green tones inspired by bamboo groves
- **Gradients**: Bamboo-themed background gradients
- **Accent Colors**: Complementary colors for different features

### Typography
- Modern, readable font stack
- Consistent sizing scale
- Proper contrast ratios

### Components
- Card-based layout system
- Consistent button styles
- Icon integration with Lucide React

## Migration Benefits

### Performance Improvements
- Faster build times with Vite
- Optimized bundle sizes
- Better caching strategies

### Developer Experience
- Hot module replacement
- Modern JavaScript features
- Component-based architecture
- Better debugging tools

### User Experience
- Smooth page transitions
- Interactive components
- Mobile-optimized interactions
- Faster loading times

## Maintenance Notes

### Image Management
- **Original images**: Preserved in `/assets/images/` (3-9MB each)
- **Compressed images**: Optimized versions in `/public/assets/images/` with `_compressed.jpg` suffix
- **Gallery images**: Special versions with `_gallery.jpg` suffix for vertical images (1080x1080 with white backgrounds)
- **Compression specs**: Max 1920x1080 resolution, 80% JPEG quality, metadata stripped, auto-oriented
- **Size reduction**: 90%+ reduction (3-9MB → 150-600KB)
- **Orientation fixes**: All images auto-oriented, vertical images get white backgrounds in gallery
- **Banner optimization**: Only horizontal images used in banner slider
- **Organization**: Categorized by type (house, countryside, bbq, starynight, winter)
- **All React components**: Updated to use appropriate compressed/gallery versions

### Content Updates
- Easy to update via React components
- Centralized data structures
- No build dependencies for content changes

### Future Enhancements
- Consider adding a CMS for easier content management
- Implement i18n for Japanese language support
- Add more interactive features (booking calendar, reviews)
- SEO optimizations for better search visibility

## Contact & Booking
All inquiries and bookings should be directed to the Airbnb listing: https://www.airbnb.jp/rooms/48761201