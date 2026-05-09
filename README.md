# Sai Deeksha Talabaktula — Polished Portfolio v3

A premium, recruiter-focused, production-grade portfolio for an MCA student specializing in Software Development, AI/ML, GenAI, LLMs, and Backend Engineering.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050816` | Deep navy-black base |
| Secondary | `#0f172a` | Card/surface backgrounds |
| Accent Cyan | `#22d3ee` | Primary accent, hover states, links |
| Accent Purple | `#8b5cf6` | Secondary accent, gradients |
| Text Primary | `#f1f5f9` | Headlines, important text |
| Text Secondary | `#94a3b8` | Body text, descriptions |
| Text Muted | `#64748b` | Labels, captions |
| Border | `rgba(255,255,255,0.05)` | Subtle card borders |
| Glass | `backdrop-blur-xl` + `bg-[#0f172a]/40` | Glassmorphism surfaces |

## What's Improved in v3

### Visual Design
- **New color palette**: Deep navy-black (`#050816`) with cyan (`#22d3ee`) and purple (`#8b5cf6`) accents
- **Better contrast**: Higher readability with stronger text hierarchy
- **Glassmorphism depth**: Softer, more premium glass effects with subtle inner glows
- **Ambient orbs**: Cyan/purple gradient orbs floating in background for depth
- **Grid overlay**: Subtle CSS grid pattern in hero for tech aesthetic

### Typography
- **Font weights**: Heavier weights (800-900) for headlines
- **Letter spacing**: Tight tracking on large text, wide tracking on labels
- **Font sizes**: Larger, more impactful hero typography
- **Line heights**: Improved readability with relaxed line-height on body

### Animations
- **Scroll reveals**: All sections animate in on scroll with `useInView`
- **Card hover lifts**: Smooth `translateY(-6px)` with glow transitions
- **Gradient text**: Cyan-to-purple gradient on name and key headlines
- **Typing animation**: Hero cycles through role titles
- **Animated counters**: Achievement numbers count up on scroll
- **Bouncy scroll arrow**: Infinite bounce animation

### Project Cards
- **Deployment badges**: Live, Dockerized, AI Powered, Production Ready, Upcoming, Ongoing
- **Image error handling**: Fallback placeholder if Unsplash image fails
- **Hover glow**: Cyan glow on featured cards
- **Better spacing**: More breathing room inside cards

### New Sections
- **Currently Building**: Shows active work, learning, and open-source contributions
- **Resume instructions**: Embedded help text explaining how to replace `resume.pdf`

### Fixes
- **CGPA typo**: Fixed `90.0+` → `9.0+`
- **Multi-stock image**: Replaced broken URL with proper Unsplash image
- **Multi-stock title**: Renamed to `AI-Powered Multi-Stock Forecasting System`

## Project Structure

```
portfolio-polished/
├── public/
│   └── favicon.svg              # Cyan/purple gradient favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed glass nav with mobile menu
│   │   ├── Hero.jsx             # Typewriter, gradient orbs, stats
│   │   ├── About.jsx            # 6 highlight cards
│   │   ├── Skills.jsx           # 8 categorized skill cards
│   │   ├── Projects.jsx         # 5 project cards with badges
│   │   ├── Building.jsx         # NEW: Currently building section
│   │   ├── Achievements.jsx     # 5 achievement cards with counters
│   │   ├── Resume.jsx           # Resume preview + instructions
│   │   ├── Contact.jsx          # Links + contact form
│   │   └── Footer.jsx           # Social links + scroll-to-top
│   ├── App.jsx                  # Layout with global orbs
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind + custom utilities
├── index.html                   # SEO meta tags
├── package.json
├── vite.config.js               # Optimized build config
├── tailwind.config.js           # Custom colors + animations
├── postcss.config.js
└── README.md
```

## Setup

```bash
cd portfolio-polished
npm install
npm run dev
```
Open `http://localhost:5173`

## Build

```bash
npm run build
```

## Deploy on Render (Static Site)

1. Push to GitHub.
2. Go to [dashboard.render.com](https://dashboard.render.com) → **New +** → **Static Site**.
3. Connect repo.
4. **Build command:** `npm run build`
5. **Publish directory:** `dist`
6. Click **Create Static Site**.

## Project Assets

### Where to place images

For project images, you have three options:

1. **External URLs** (current approach): Use Unsplash or similar CDN URLs directly in `Projects.jsx`. Add `onError` fallback for broken links.

2. **Local images** (recommended for production):
   ```
   public/
   ├── images/
   │   ├── stock-prediction.jpg
   │   ├── heart-disease.jpg
   │   ├── plant-disease.jpg
   │   ├── task-manager.jpg
   │   └── placement-mentor.jpg
   └── resume.pdf
   ```
   Then reference as `/images/stock-prediction.jpg` in components.

3. **Import in Vite**:
   ```jsx
   import stockImg from '../assets/stock-prediction.jpg'
   <img src={stockImg} />
   ```
   Place in `src/assets/` and Vite will hash/cache them.

### Resume PDF

Place your resume at `public/resume.pdf`. Vite copies everything in `public/` to `dist/` as-is. The download button links to `/resume.pdf`.

## Performance Optimizations

- **Code splitting**: Vite config splits vendor, framer-motion, and lucide into separate chunks
- **Lazy loading**: Project images use `loading="lazy"`
- **Image fallbacks**: `onError` handler prevents layout shift from broken images
- **CSS animations**: GPU-accelerated transforms only (no layout-triggering animations)
- **Reduced motion**: Consider adding `prefers-reduced-motion` media query for accessibility

## SEO Checklist

- [ ] Title tag optimized
- [ ] Meta description set
- [ ] Open Graph tags included
- [ ] Twitter Card meta included
- [ ] Semantic HTML structure
- [ ] Favicon SVG with gradient
- [ ] Canonical URL (add to `index.html` if deploying to custom domain)

## Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | > 90 |
| Accessibility | > 95 |
| Best Practices | 100 |
| SEO | 100 |

## Favicon Suggestions

Current favicon: Cyan-to-purple gradient border with "SD" initials.

Alternative ideas:
- Use your actual photo cropped to circle
- Abstract geometric shape (hexagon with gradient)
- Minimal monogram with accent underline

Generate at [favicon.io](https://favicon.io) or design in Figma and export as SVG.

## License

MIT
