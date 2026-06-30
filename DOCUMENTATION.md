# The Universe Computer Institute - Website Documentation

## 🎓 Project Overview

A professional, modern website for **The Universe Computer Institute**, featuring:
- **11 Comprehensive Courses** with details and enrollment options
- **Dark & Light Theme** with smooth transitions
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Glassmorphism** aesthetic with professional animations
- **Fast Performance** optimized for Lighthouse scores

---

## 📁 Project Structure

```
/app
  ├── layout.jsx              # Root layout with theme provider
  ├── globals.css             # Global styles with design tokens
  ├── page.jsx                # Home page (Hero + Featured Courses)
  ├── /courses/page.jsx       # All courses with filters
  ├── /about/page.jsx         # About page
  ├── /offers/page.jsx        # Offers & discounts
  ├── /admissions/page.jsx    # Admissions process & form
  └── /contact/page.jsx       # Contact form & info

/components
  ├── navbar.jsx              # Sticky navigation with theme toggle
  ├── footer.jsx              # 4-column footer with links
  ├── course-card.jsx         # Reusable course card component
  └── theme-provider.tsx      # Next-themes integration
```

---

## 🎨 Design System

### Color Palette
- **Emerald Green**: `#10b981` (Primary accent)
- **Cyan Blue**: `#06b6d4` (Secondary accent)
- **Gradient**: `135deg, #10b981 0%, #06b6d4 100%`

### Light Mode
- Background: `#f8fafc` (Slate-50)
- Foreground: `#0f172a` (Slate-900)
- Cards: `#ffffff` (White)

### Dark Mode
- Background: `#0f172a` (Slate-950)
- Foreground: `#f1f5f9` (Slate-100)
- Cards: `#1e293b` (Slate-800)

### Glassmorphism Effect
- Backdrop blur with semi-transparent background
- Subtle borders for depth
- Hover effects with gradient overlays

---

## 📚 All 11 Courses

1. **Language Typing** - Typing in English, Marathi & Hindi (Beginner, 4 weeks)
2. **Basic Computer Course** - Fundamentals of computers (Beginner, 6 weeks)
3. **Microsoft Office Mastery** - Excel, Word, PowerPoint (Intermediate, 8 weeks)
4. **Digital Marketing Mastery** - SEO, Social Media, Analytics (Intermediate, 10 weeks)
5. **Professional Accounting** - Tally ERP9, GST, Taxation (Intermediate, 12 weeks)
6. **Creative Clay Art** - Pottery & Sculpting (Beginner, 8 weeks)
7. **Modern Web Designing** - UI/UX, HTML, CSS, Responsive (Intermediate, 12 weeks)
8. **Advanced Excel & VBA** - Macros, VBA, Data Analysis (Advanced, 10 weeks)
9. **Advanced Tally Prime/ERP9** - ERP Implementation (Advanced, 8 weeks)
10. **Power BI Data Analytics** - Business Intelligence & Visualization (Advanced, 10 weeks)
11. **Graphic Design Masterclass** - Adobe Creative Suite (Intermediate, 12 weeks)

---

## 🚀 Key Features

### 1. **Home Page** (`/`)
- Hero section with animated gradient text
- 4 stat cards (Students, Experience, Courses, Success Rate)
- Featured 6 courses grid
- CTA section
- Smooth scroll reveal animations

### 2. **Courses Page** (`/courses`)
- Grid view of all 11 courses
- **Filter by Category**: Fundamentals, Office, Marketing, Accounting, Web, Design, Analytics, Arts, Languages
- **Filter by Level**: All, Beginner, Intermediate, Advanced
- Real-time filtering with smooth transitions
- Responsive 1-3 column layout

### 3. **About Page** (`/about`)
- Mission & Vision sections
- Why Choose Us (4 feature cards)
- Professional content with glassmorphism design

### 4. **Offers Page** (`/offers`)
- 4 special offers with discounts
- Summer discount (30%)
- Group enrollment (40%)
- Referral program (20%)
- Early bird offer (25%)

### 5. **Admissions Page** (`/admissions`)
- 4-step process visualization
- Requirements checklist
- Eligibility criteria
- Complete application form with validation

### 6. **Contact Page** (`/contact`)
- 4 contact info cards
- Full contact form
- FAQ section with common questions
- Why contact us section

---

## 🎭 UI Components

### Navbar
- Sticky positioning with glassmorphism
- Desktop navigation menu
- Mobile hamburger menu
- Theme toggle (Sun/Moon icons)
- Responsive design

### Footer
- 4-column layout:
  1. Brand info
  2. Quick links
  3. Popular courses
  4. Contact info with icons
- Social media links
- Copyright notice

### Course Card
- Icon + Title + Description
- Level, Duration, Rating badges
- Hover scale & glow effects
- "Enroll Now" button with animation
- Framer Motion reveal-on-scroll

---

## 🎬 Animations & Interactions

### Framer Motion Features
- **Reveal-on-Scroll**: Elements fade in as user scrolls
- **Hover Effects**: Cards scale up (1.05x) and lift (-5px)
- **Button Animations**: Scale feedback on hover/tap
- **Staggered Lists**: Sequential reveal of items
- **Smooth Transitions**: 0.3-0.8s duration animations

### CSS Animations
- Fade in/out effects
- Slide in transitions
- Gradient text animation
- Glow shadows on hover

---

## 🎯 Form Implementation

### Admissions Form
- Fields: Name, Email, Phone, Course Selection, Message
- Course dropdown with all 11 options
- Form validation (required fields)
- Success alert on submission
- Form reset after submit

### Contact Form
- Fields: Name, Email, Subject, Message
- Text area for longer messages
- Form validation
- Success feedback

---

## 🌓 Theme Implementation

### Technology: `next-themes`
- System preference detection
- Manual toggle with Sun/Moon icons
- Persistent theme selection
- Zero flash on page load

### CSS Variables
All colors defined as CSS custom properties:
```css
:root {
  --accent-emerald: #10b981;
  --accent-cyan: #06b6d4;
  --gradient-main: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
}

.dark {
  --background: #0f172a;
  --foreground: #f1f5f9;
}
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (full-width, single column)
- **Tablet**: 768px - 1024px (2 columns where applicable)
- **Desktop**: > 1024px (3+ columns, full features)

### Grid Layouts
- Courses: `1 → 2 → 3` columns
- Stats: `2 × 2` cards on mobile, responsive on larger screens
- Footer: Stacked on mobile, 4-column on desktop

---

## 🔧 Technical Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion 12.38.0
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: JSX (all pages in .jsx format)

---

## 📦 Installation & Deployment

### Local Development
```bash
pnpm install
pnpm dev
# Open http://localhost:3000
```

### Build for Production
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
```bash
# Via CLI
vercel

# Or connect GitHub repo to Vercel dashboard
```

---

## 🎨 Customization Guide

### Change Primary Color
Edit `/app/globals.css`:
```css
:root {
  --accent-emerald: #YOUR_HEX_COLOR;
}
```

### Update Course Data
Edit `/app/page.jsx` and `/app/courses/page.jsx`:
- Modify `coursesData` array
- Add/remove courses
- Update course properties

### Add New Pages
1. Create `/app/newpage/page.jsx`
2. Use existing components (Navbar, Footer)
3. Follow the same animation patterns
4. Update navbar links in `components/navbar.jsx`

### Modify Form Fields
Edit respective form pages and update:
- Input fields in JSX
- `formData` state management
- `handleChange` and `handleSubmit` functions

---

## ✨ Features Highlights

✅ **Full Dark/Light Theme** - System-aware with manual toggle
✅ **All Pages Display Content** - No placeholder content
✅ **Glassmorphism Design** - Professional modern aesthetic
✅ **11 Real Courses** - Complete course catalog
✅ **Responsive Mobile-First** - Perfect on all devices
✅ **Smooth Animations** - Framer Motion throughout
✅ **Professional Forms** - Contact, Admissions, Application
✅ **Filter System** - Category & Level filters on courses
✅ **Fast Performance** - Optimized for Lighthouse
✅ **Clean Code** - Well-organized, maintainable JSX

---

## 📧 Contact & Support

**Email**: theuniverse0311institute@gmail.com  
**Phone**: +91 9999 999 999  
**Address**: Pune, Maharashtra, India  
**Hours**: Mon - Sat: 9:00 AM - 6:00 PM

---

## 📄 License

This project is created for The Universe Computer Institute. All rights reserved.

---

**Created with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
