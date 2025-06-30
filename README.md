# Ushikumaya - Traditional Japanese Bamboo Hideaway

A modern React website for Ushikumaya, a traditional Japanese Airbnb villa in Yokoshibahikari-machi, Chiba Prefecture.

## 🚀 Features

- **Modern React Stack**: Built with Vite, React Router, and modern JavaScript
- **Beautiful Animations**: Smooth page transitions and interactions using Framer Motion
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Image Gallery**: Categorized photo gallery with lightbox functionality
- **Auto-sliding Banner**: Hero banner with multiple images and smooth transitions
- **Mobile-First**: Touch-friendly interface with mobile booking button
- **Fast Performance**: Optimized build with code splitting and lazy loading

## 🛠 Tech Stack

- **Frontend**: React 18, React Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📱 Pages

1. **Home** - Hero banner, features overview, and quick info cards
2. **Stay Info** - Accommodation details, amenities, and property features
3. **Gallery** - Categorized photo gallery (Property, Countryside, BBQ, Starry Nights, Winter)
4. **Area Guide** - Local attractions, amenities, and seasonal highlights
5. **Access** - Transportation options and directions
6. **FAQ** - Comprehensive frequently asked questions
7. **Contact** - Contact methods and inquiry form

## 🎨 Design Features

- **Bamboo Green Theme**: Custom color palette inspired by bamboo groves
- **Japanese Aesthetics**: Traditional design elements with modern UI
- **Smooth Animations**: Page transitions, hover effects, and loading states
- **Interactive Components**: Auto-sliding banner, filterable gallery, expandable FAQ
- **Mobile Responsive**: Optimized for mobile, tablet, and desktop

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel
vercel --prod
```

## 📦 Deployment

The site is deployed on Vercel for optimal performance and easy deployment workflow.

- **Live Site**: Deployed on Vercel with automatic deployments
- **Build Process**: Automatic builds on push to main branch
- **CDN**: Global edge network via Vercel
- **Features**: 
  - Instant deployments
  - Preview deployments for PRs
  - Automatic HTTPS
  - Optimized for performance

## 🏞 Property Details

**Ushikumaya** is a traditional Japanese hideaway located in:
- **Location**: Yokoshibahikari-machi, Sanbu District, Chiba Prefecture
- **Capacity**: Up to 6 guests
- **Features**: Bamboo grove setting, traditional tatami rooms
- **Amenities**: Free parking (6 cars), BBQ equipment, pet-friendly
- **Access**: 21 minutes from Narita Airport, 7 minutes to golf courses

## 📋 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.jsx   # Header navigation
│   ├── Footer.jsx       # Site footer
│   ├── BannerSlider.jsx # Auto-sliding hero banner
│   └── MobileBookButton.jsx # Mobile booking CTA
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── StayInfo.jsx     # Accommodation details
│   ├── Gallery.jsx      # Photo gallery
│   ├── AreaGuide.jsx    # Local attractions
│   ├── Access.jsx       # Transportation info
│   ├── FAQ.jsx          # Frequently asked questions
│   └── Contact.jsx      # Contact information
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles & Tailwind
```

## 🎯 Key Components

### BannerSlider
- Auto-advancing slideshow with 6 images
- Touch/swipe support for mobile
- Keyboard navigation (arrow keys)
- Progress bar and slide indicators

### Gallery
- Category-based filtering (All, Property, Countryside, BBQ, etc.)
- Lightbox functionality for full-size viewing
- Smooth animations between categories
- Responsive grid layout

### Navigation
- Responsive mobile menu with hamburger toggle
- Smooth scroll-based visibility (mobile booking button)
- Active route highlighting

## 📄 License

This project is created for Ushikumaya Airbnb property. All rights reserved.