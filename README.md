# OpenMath Website

A modern, responsive Next.js website for OpenMath - Global STEM Education organization.

## Features

- 🎥 Full-screen video background hero section with smooth animations
- 🎨 Interactive mission statement section with mouse-following effect
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔬 Research section with embedded papers
- 📊 Impact statistics dashboard
- ✨ Smooth animations and transitions
- 🎯 Clean, modern UI with professional styling

## Project Structure

```
OpenMath/
├── app/
│   ├── openmath/
│   │   ├── page.tsx           # OpenMath page component
│   │   └── page.module.css    # Component styles
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles & CSS variables
├── public/
│   └── about-us/              # Place media files here
│       ├── Untitled video (11).mp4
│       └── BeFunky-collage (1).jpg
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 2. Add Media Files

The application expects the following media files in the `public/about-us/` folder:

- **Video**: `Untitled video (11).mp4` - Hero section background video
- **Image**: `BeFunky-collage (1).jpg` - Mission section background image

Create the `public/about-us/` directory and add these files.

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Image Optimization**: Next.js Image component
- **Responsive**: Mobile-first design approach

## Color Scheme

The site uses a professional color palette defined in `app/globals.css`:

- **Primary**: `#340002` (Dark Brown)
- **Secondary**: `#b97d10` (Gold)
- **Tertiary**: `#e8c547` (Light Gold)
- **Quaternary**: `#6b0004` (Deep Red)
- **Quinary**: `#c98b1e` (Warm Brown)

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #340002;
  --secondary: #b97d10;
  /* ... other colors ... */
}
```

### Updating Content

Edit `app/openmath/page.tsx` to modify:
- Hero title
- Mission statement
- Programs and descriptions
- Research paper details
- Contact information

### Styling

Component-specific styles are in `app/openmath/page.module.css`. Global styles are in `app/globals.css`.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimizations

- ✅ Image optimization with Next.js Image
- ✅ CSS Modules for scoped styling
- ✅ Client-side interactive effects
- ✅ Responsive video lazy-loading
- ✅ Mobile-aware mouse event handling

## License

Private - OpenMath Organization

## Contact

For questions about this website, contact: info@amcacademy.ca
