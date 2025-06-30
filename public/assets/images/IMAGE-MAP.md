# Ushikumaya Image Organization Map

This document shows the new organized structure of images and where each image is used in the website.

## Folder Structure Overview

```
public/assets/images/
├── pages/                    # Images organized by page
│   ├── home/
│   │   ├── banner/          # Banner slider images (5 images)
│   │   └── cards/           # Info card images (3 images)
│   ├── stay/
│   │   ├── gallery/         # Property showcase images (4 images)
│   │   └── features/        # Feature section images (1 image)
│   ├── area/
│   │   └── attractions/     # Local attraction images (4 images)
│   └── gallery/             # Full gallery page images (23 images)
│       ├── property/        # House/property images (6 images)
│       ├── nature/          # Natural scenery (2 images)
│       ├── amenities/       # BBQ, facilities (2 images)
│       ├── seasonal/        # Seasonal images (5 images)
│       └── night/           # Night sky images (3 images)
└── meta/                     # Favicon and OG images (2 images)
```

## Image Usage by Page

### Home Page (`/`)

#### Banner Slider (auto-rotating)
- `pages/home/banner/bamboo_grove.jpg` - Bamboo forest view
- `pages/home/banner/tatami_room.jpg` - Traditional tatami room
- `pages/home/banner/bbq_setup.jpg` - BBQ equipment
- `pages/home/banner/sunflower_fields.jpg` - Countryside sunflowers
- `pages/home/banner/parking_area.jpg` - Parking facilities

#### Info Cards
- `pages/home/cards/accommodation.jpg` - Accommodation card
- `pages/home/cards/activities.jpg` - Activities card
- `pages/home/cards/transport.jpg` - Transport card

### Stay Info Page (`/stay`)

#### Gallery Showcase
- `pages/stay/gallery/tatami_room.jpg` - Traditional room
- `pages/stay/gallery/modern_room.jpg` - Modern living area
- `pages/stay/gallery/bbq_equipment.jpg` - BBQ setup
- `pages/stay/gallery/parking.jpg` - Parking space

#### Features Section
- `pages/stay/features/traditional_tatami.jpg` - Traditional experience image

### Area Guide Page (`/area`)

#### Attractions
- `pages/area/attractions/golf_courses.jpg` - Golf courses (7-11 min)
- `pages/area/attractions/kujukuri_beach.jpg` - Kujukuri Beach (21 min)
- `pages/area/attractions/water_park.jpg` - Water Park (21 min)
- `pages/area/attractions/strawberry_picking.jpg` - Strawberry farms (15 min)

### Gallery Page (`/gallery`)

#### Property Images
- `pages/gallery/property/tatami_room.jpg`
- `pages/gallery/property/modern_room.jpg`
- `pages/gallery/property/corridor.jpg`
- `pages/gallery/property/parking.jpg`
- `pages/gallery/property/bathroom.jpg`
- `pages/gallery/property/facilities.jpg`

#### Nature Images
- `pages/gallery/nature/bamboo_forest.jpg`
- `pages/gallery/nature/sunflowers.jpg`

#### Amenities
- `pages/gallery/amenities/bbq_setup.jpg`
- `pages/gallery/amenities/bbq_dining.jpg`

#### Seasonal Images
- `pages/gallery/seasonal/cherry_blossoms.jpg`
- `pages/gallery/seasonal/autumn_fields.jpg`
- `pages/gallery/seasonal/winter_snow.jpg`
- `pages/gallery/seasonal/ice_formations.jpg`
- `pages/gallery/seasonal/winter_architecture.jpg`

#### Night Sky
- `pages/gallery/night/starry_sky.jpg`
- `pages/gallery/night/constellations.jpg`
- `pages/gallery/night/moonlight.jpg`

## Note on Duplicate Images

Some images appear in multiple page folders because they serve different purposes on different pages. This makes it easier to understand what each page uses and allows for independent updates. For example:
- Tatami room images appear in home, stay, and gallery sections
- Parking images are used in home cards, stay gallery, and main gallery
- This structure prioritizes clarity over storage efficiency

## Meta Images

- `meta/favicon.jpg` - Site favicon
- `meta/og-image.jpg` - Open Graph social media image

## How to Add/Replace Images

### To replace an image on a specific page:

1. **Home Banner**: Replace images in `pages/home/banner/`
2. **Home Cards**: Replace images in `pages/home/cards/`
3. **Stay Info**: Replace images in `pages/stay/gallery/` or `pages/stay/features/`
4. **Area Attractions**: Replace images in `pages/area/attractions/`
5. **Gallery**: Replace images in the appropriate subfolder under `pages/gallery/`

### Naming Convention:
- Use descriptive names: `tatami_room.jpg` not `IMG_1234.jpg`
- Use underscores for spaces: `bamboo_grove.jpg`
- Keep names concise but clear
- All images should be optimized/compressed before adding

### Image Requirements:
- **Banner images**: 1920x1080 minimum, landscape orientation
- **Card images**: 800x600 minimum
- **Gallery images**: High quality, various orientations accepted
- **File format**: JPEG for photos, PNG for graphics with transparency
- **File size**: Optimize to under 500KB per image when possible

## Adding New Images

To add new images to the website:

1. **Choose the right folder**: Determine which page the image will be used on
2. **Add to appropriate folder**: Place the image in `pages/[page-name]/[section]/`
3. **Use descriptive names**: Use clear, descriptive filenames like `bamboo_grove.jpg`
4. **Optimize images**: Ensure images are optimized for web (under 500KB recommended)
5. **Update components**: Update the component code to reference the new image path