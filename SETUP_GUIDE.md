# OpenMath Website - Setup Guide

## ✅ What's Been Set Up

Your OpenMath website has been fully scaffolded with all necessary files and configurations!

### Project Structure
```
OpenMath/
├── app/
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page router
│   └── openmath/
│       ├── page.tsx             # OpenMath component
│       └── page.module.css      # Component styles
├── public/
│   └── about-us/                # Media files directory (needs to be created)
├── package.json                 # Dependencies
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── .eslintrc.json               # ESLint rules
├── .gitignore                   # Git ignore patterns
├── README.md                    # Main documentation
└── SETUP_GUIDE.md              # This file
```

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

This installs:
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### Step 2: Add Media Files

You need to add two media files to the `public/about-us/` directory:

1. **Video file**: `Untitled video (11).mp4`
   - Used in the hero section as background
   - Recommended: Full-screen video (16:9 aspect ratio)
   - Formats: MP4 works best

2. **Image file**: `BeFunky-collage (1).jpg`
   - Used in the mission section as background
   - Recommended: High resolution (1920x1080 or higher)
   - Formats: JPG, PNG, WebP supported

**To add files:**
1. Navigate to `public/about-us/` folder
2. Place your `Untitled video (11).mp4` there
3. Place your `BeFunky-collage (1).jpg` there

### Step 3: Run Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

## 📁 File Organization

### Key Files

- **`app/layout.tsx`** - Root layout with metadata
- **`app/page.tsx`** - Home page entry point
- **`app/globals.css`** - Global styles and CSS color variables
- **`app/openmath/page.tsx`** - Main OpenMath component
- **`app/openmath/page.module.css`** - Component-scoped styles
- **`next.config.js`** - Next.js configuration
- **`package.json`** - Project dependencies

### CSS Variables (in `app/globals.css`)

The site uses CSS variables for theming:
```css
--primary: #340002        /* Dark Brown */
--secondary: #b97d10      /* Gold */
--tertiary: #e8c547       /* Light Gold */
--quaternary: #6b0004     /* Deep Red */
--quinary: #c98b1e        /* Warm Brown */
```

## 🛠️ Available Commands

### Development
```bash
npm run dev       # Start dev server at localhost:3000
```

### Production
```bash
npm run build     # Build for production
npm run start     # Start production server
```

### Linting
```bash
npm run lint      # Check code with ESLint
```

## 📝 What's Included

### Features
- ✅ Full-screen video background hero section
- ✅ Interactive mission statement with mouse-following effect
- ✅ Programs showcase grid
- ✅ Impact statistics dashboard
- ✅ Research paper section with embedded iframe
- ✅ Smooth animations
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Professional color scheme
- ✅ CSS Modules for scoped styling

### Responsive Breakpoints
- **Desktop**: > 1024px - Full features enabled
- **Tablet**: 768px - 1024px - Optimized layout
- **Mobile**: < 768px - Simplified layout
- **Small Mobile**: < 480px - Minimal layout

## 🎨 Customization

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #340002;
  --secondary: #b97d10;
  /* Update these values */
}
```

### Update Content
Edit `app/openmath/page.tsx`:
- Hero title
- Mission statement
- Programs description
- Research paper details
- Contact emails

### Modify Styling
- **Global styles**: `app/globals.css`
- **Component styles**: `app/openmath/page.module.css`

## 🔗 Important Links

- **Research Paper**: https://research-archive.org/index.php/rars/preprint/view/2400/version/2552
- **Contact Email**: info@amcacademy.ca
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev

## ⚙️ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Troubleshooting

### Media files not showing?
- Ensure files are in `public/about-us/` folder
- Check file names match exactly:
  - `Untitled video (11).mp4`
  - `BeFunky-collage (1).jpg`
- Restart dev server after adding files

### Styles not applying?
- Check CSS variable names in `app/globals.css`
- Restart dev server
- Clear browser cache (Ctrl+Shift+Delete)

### npm install issues?
- Delete `node_modules` folder
- Delete `package-lock.json` file
- Run `npm install` again

## 📊 Performance Tips

1. **Optimize images**: Compress before adding to `public/`
2. **Video optimization**: Use H.264 codec, keep file size < 10MB
3. **Lazy loading**: Images are already optimized with Next.js Image component
4. **Caching**: Static files are cached automatically

## 🚢 Deployment

### To Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel at https://vercel.com
3. Deploy automatically on push

### To Other Platforms
```bash
npm run build
npm run start
```

## 📚 Next Steps

1. Add your media files to `public/about-us/`
2. Run `npm install`
3. Run `npm run dev`
4. Visit http://localhost:3000
5. Customize content as needed
6. Deploy to production

## ❓ Need Help?

Check the main README.md for more detailed documentation, or review the component code in `app/openmath/page.tsx` for implementation details.

---

**Happy building! 🎉**
