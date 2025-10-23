# 🚀 OpenMath Website - Quick Reference

## ⚡ 3-Step Quick Start

```bash
npm install           # Step 1: Install dependencies
# Step 2: Add files to public/about-us/
npm run dev           # Step 3: Visit http://localhost:3000
```

---

## 📋 Essential Commands

### Development
```bash
npm run dev           # Start development server
npm run dev -- -p 3001  # Run on different port
```

### Production
```bash
npm run build         # Create production build
npm run start         # Run production server
```

### Code Quality
```bash
npm run lint          # Check for issues
npm run lint -- --fix # Auto-fix issues
```

---

## 📁 Key Files to Modify

| File | What to Change | Example |
|------|----------------|---------|
| `app/openmath/page.tsx` | Content (hero, mission, programs) | Change title, text, links |
| `app/openmath/page.module.css` | Component styles | Adjust padding, sizing |
| `app/globals.css` | Global styles & colors | Update color variables |
| `package.json` | Project metadata | Update name/description |
| `public/about-us/` | Media files | Add video & image |

---

## 🎨 Customization Checklist

- [ ] Update hero title in `page.tsx`
- [ ] Update mission statement in `page.tsx`
- [ ] Update program descriptions in `page.tsx`
- [ ] Change colors in `app/globals.css`
- [ ] Add video to `public/about-us/`
- [ ] Add image to `public/about-us/`
- [ ] Update contact email in `page.tsx`
- [ ] Update research paper links in `page.tsx`

---

## 🎨 Color Variables

Quick reference for styling. Edit in `app/globals.css`:

```css
--primary: #340002       /* Dark brown */
--secondary: #b97d10     /* Gold */
--tertiary: #e8c547      /* Light gold */
--quaternary: #6b0004    /* Deep red */
--quinary: #c98b1e       /* Warm brown */
```

Use in CSS:
```css
color: var(--primary);
background: var(--secondary);
```

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 1024px) { /* Tablets */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small mobile */ }
```

---

## 🔗 Important Links

- **Development**: http://localhost:3000
- **Research Paper**: https://research-archive.org/index.php/rars/preprint/view/2400/version/2552
- **Contact Email**: info@amcacademy.ca
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev

---

## 📊 File Structure Quick View

```
OpenMath/
├── app/
│   ├── globals.css        ← Colors & global styles
│   ├── layout.tsx         ← Root layout
│   ├── page.tsx           ← Home page
│   └── openmath/
│       ├── page.tsx       ← Main component (EDIT THIS)
│       └── page.module.css ← Component styles (EDIT THIS)
├── public/about-us/       ← Add media files here
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Deployment Steps

### To Vercel (Recommended)
1. Push to GitHub: `git push`
2. Go to https://vercel.com
3. Import repository
4. Auto-deploys on push

### Manual Deployment
```bash
npm run build    # Build project
npm run start    # Run production server
```

---

## 🆘 Quick Troubleshooting

| Problem | Fix |
|---------|-----|
| **Port 3000 in use** | `npm run dev -- -p 3001` |
| **Media not loading** | Check `public/about-us/` folder |
| **Styles broken** | Restart dev server |
| **Build fails** | Run `npm install` again |
| **TypeScript errors** | Check variable names and types |

---

## 📄 Content Sections

### Hero Section
- File: `page.tsx` line ~97
- Edit: Title text
- Style: `.heroTitle` in `page.module.css`

### Mission Section
- File: `page.tsx` lines ~123-129
- Edit: Title and mission text
- Style: `.missionTitle`, `.missionText`

### Programs
- File: `page.tsx` lines ~137-159
- Edit: Program names and descriptions
- Style: `.programCard`, `.programTitle`

### Statistics
- File: `page.tsx` lines ~164-176
- Edit: Numbers and labels
- Style: `.statNumber`, `.statLabel`

### Research
- File: `page.tsx` lines ~182-219
- Edit: Paper title, authors, abstract, links
- Style: `.paperTitle`, `.readPaperButton`

---

## 🎯 Development Workflow

1. **Make changes** to files in `app/`
2. **Save** the file (auto-refresh in dev mode)
3. **Check** http://localhost:3000
4. **Repeat** until satisfied
5. **Run** `npm run lint` to check code quality
6. **Build** with `npm run build`
7. **Deploy** when ready

---

## ✅ Pre-Deployment Checklist

- [ ] All content is correct
- [ ] Images and video are optimized
- [ ] Links are working
- [ ] No console errors
- [ ] Mobile view looks good
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Tested in multiple browsers

---

## 📚 Documentation Guide

| File | Read When |
|------|-----------|
| **START_HERE.md** | First time |
| **SETUP_GUIDE.md** | Setting up |
| **README.md** | Need details |
| **CHECKLIST.md** | Before deploying |
| **PROJECT_SUMMARY.md** | Full overview |
| **QUICK_REFERENCE.md** | Need quick help |

---

## 💡 Pro Tips

1. **Auto-format code**: ESLint + Prettier configured
2. **Hot reload**: Changes auto-refresh (no restart needed)
3. **Mobile testing**: Use responsive design mode (F12)
4. **Compress media**: Use online tools before uploading
5. **Git setup**: `.gitignore` already configured

---

## 🎉 You're All Set!

**Next steps:**
1. Run `npm install`
2. Add media files
3. Run `npm run dev`
4. Visit http://localhost:3000
5. Customize and enjoy!

---

**Quick help**: Start with **START_HERE.md** for beginners or **SETUP_GUIDE.md** for details.

*Happy coding! 🚀*
