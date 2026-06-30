# 🎨 Design System & Style Guide

## Color Palette

### Primary Colors
```
Emerald Green
  Hex: #10b981
  RGB: 16, 185, 129
  Usage: Primary accent, buttons, icons
  
Cyan Blue
  Hex: #06b6d4
  RGB: 6, 182, 212
  Usage: Secondary accent, gradients
  
Gradient (Main)
  Direction: 135deg
  From: #10b981 (Emerald)
  To: #06b6d4 (Cyan)
  Usage: Text, buttons, highlights
```

### Light Mode Palette
```
Background: #f8fafc (Slate-50)
  Use for: Page background, light sections
  
Text (Foreground): #0f172a (Slate-900)
  Use for: Primary text, headings
  
Cards: #ffffff (White)
  Use for: Card backgrounds, containers
  
Border: #e2e8f0 (Slate-200)
  Use for: Dividers, borders
  
Muted: #f1f5f9 (Slate-100)
  Use for: Hover states, muted backgrounds
  
Muted Text: #64748b (Slate-500)
  Use for: Secondary text, descriptions
```

### Dark Mode Palette
```
Background: #0f172a (Slate-950)
  Use for: Page background, dark sections
  
Text (Foreground): #f1f5f9 (Slate-100)
  Use for: Primary text, headings
  
Cards: #1e293b (Slate-800)
  Use for: Card backgrounds, containers
  
Border: #334155 (Slate-700)
  Use for: Dividers, borders
  
Muted: #1e293b (Slate-800)
  Use for: Hover states, muted backgrounds
  
Muted Text: #cbd5e1 (Slate-300)
  Use for: Secondary text, descriptions
```

---

## Typography

### Font Family
```
Primary Font: Geist (Google Font)
  - Regular (400)
  - Medium (500)
  - Bold (700)
  
Fallback: System fonts
```

### Heading Styles
```
H1 (Page Title)
  - Size: 2.25rem (36px) - Mobile
  - Size: 3rem (48px) - Tablet
  - Size: 3.75rem (60px) - Desktop
  - Weight: Bold (700)
  - Line Height: 1.2
  
H2 (Section Heading)
  - Size: 1.875rem (30px) - Mobile
  - Size: 2.25rem (36px) - Tablet
  - Size: 3rem (48px) - Desktop
  - Weight: Bold (700)
  - Line Height: 1.2
  
H3 (Subsection)
  - Size: 1.5rem (24px)
  - Weight: Bold (700)
  - Line Height: 1.3
  
H4 (Card Title)
  - Size: 1.125rem (18px)
  - Weight: Bold (700)
  - Line Height: 1.4
```

### Body Text
```
Primary Body
  - Size: 1rem (16px)
  - Weight: Regular (400)
  - Line Height: 1.6
  - Color: Foreground
  
Secondary Text
  - Size: 0.875rem (14px)
  - Weight: Regular (400)
  - Line Height: 1.5
  - Color: Foreground/70
  
Small Text
  - Size: 0.75rem (12px)
  - Weight: Regular (400)
  - Line Height: 1.4
  - Color: Foreground/50
```

---

## Spacing System

### Margin & Padding Scale
```
xs: 0.25rem (4px)   - Micro spacing
sm: 0.5rem (8px)    - Small spacing
md: 1rem (16px)     - Default spacing
lg: 1.5rem (24px)   - Large spacing
xl: 2rem (32px)     - Extra large spacing
2xl: 3rem (48px)    - Double extra large
3xl: 4rem (64px)    - Triple extra large
4xl: 5rem (80px)    - Quad extra large
```

### Gap (Between Elements)
```
Small Gap: 0.5rem (8px)
Default Gap: 1rem (16px)
Large Gap: 1.5rem (24px)
Extra Large Gap: 2rem (32px)
```

### Section Padding
```
Mobile: 
  Horizontal: 1rem (16px)
  Vertical: 3rem (48px)
  
Tablet:
  Horizontal: 2rem (32px)
  Vertical: 5rem (80px)
  
Desktop:
  Horizontal: 4rem (64px)
  Vertical: 5rem (80px)
```

---

## Border Radius

### Radius Values
```
Small: 0.375rem (6px)
  Use for: Small buttons, badges
  
Default: 0.625rem (10px)
  Use for: Inputs, cards
  
Large: 1rem (16px)
  Use for: Large cards, sections
  
Extra Large: 1.5rem (24px)
  Use for: Hero sections, prominent cards
  
Full: 9999px
  Use for: Perfect circles, pill buttons
```

---

## Shadows

### Shadow Styles
```
Glass Effect (Glassmorphism):
  - Backdrop blur: 16px
  - Background: rgba(255, 255, 255, 0.1) [Light Mode]
  - Background: rgba(15, 23, 42, 0.2) [Dark Mode]
  - Border: rgba(226, 232, 240, 0.6) [Light Mode]
  - Border: rgba(255, 255, 255, 0.1) [Dark Mode]
  
Hover Shadow:
  - Color: rgba(16, 185, 129, 0.5) [Emerald glow]
  - Blur: 8px - 12px
  - Spread: 0px
  
Subtle Shadow:
  - Color: rgba(0, 0, 0, 0.1)
  - Blur: 4px
  - Offset: 0px 2px
  
Medium Shadow:
  - Color: rgba(0, 0, 0, 0.15)
  - Blur: 8px
  - Offset: 0px 4px
  
Large Shadow:
  - Color: rgba(0, 0, 0, 0.2)
  - Blur: 16px
  - Offset: 0px 8px
```

---

## Buttons

### Primary Button (Gradient)
```
Background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%)
Color: White (#ffffff)
Padding: 0.75rem 1.5rem (12px 24px)
Border Radius: 0.5rem (8px)
Font Weight: 600
Font Size: 1rem (16px)

Hover State:
  - Scale: 1.05x
  - Transform: translateY(-4px)
  - Shadow: Large shadow with emerald glow
  - Duration: 300ms

Active State:
  - Scale: 0.95x
  - Duration: 100ms
```

### Secondary Button (Outlined)
```
Background: Transparent
Border: 2px solid #10b981 (Emerald)
Color: #10b981 (Emerald)
Padding: 0.75rem 1.5rem (12px 24px)
Border Radius: 0.5rem (8px)
Font Weight: 600
Font Size: 1rem (16px)

Hover State:
  - Background: #10b981
  - Color: White
  - Duration: 300ms
```

---

## Form Elements

### Input Fields
```
Background: Background color (theme-aware)
Border: 1px solid #e2e8f0 [Light Mode]
Border: 1px solid #334155 [Dark Mode]
Border Radius: 0.5rem (8px)
Padding: 0.75rem 1rem (12px 16px)
Font Size: 1rem (16px)
Color: Foreground color (theme-aware)

Focus State:
  - Ring: 2px solid #10b981 (Emerald)
  - Ring Offset: 0px
  - Duration: 200ms
  
Placeholder:
  - Color: Foreground/50
  - Font Style: Normal
```

### Select Dropdowns
```
Same as input fields
Arrow: Theme-aware color
```

### Text Areas
```
Same as input fields
Resize: Vertical only (resize-none in CSS)
Min Height: 4rem (64px)
```

### Checkboxes & Radios
```
Size: 1rem (16px)
Border: 2px solid
Color: #10b981 (Emerald)
Border Radius: 0.375rem (6px) [Checkbox]
Border Radius: 50% [Radio]
```

---

## Cards & Containers

### Standard Card
```
Background: Card color (theme-aware)
Border: 1px solid #e2e8f0 [Light Mode]
Border: 1px solid #334155 [Dark Mode]
Border Radius: 1rem (16px)
Padding: 1.5rem (24px)
Shadow: Subtle shadow

Hover State:
  - Scale: 1.05x
  - Transform: translateY(-5px)
  - Shadow: Large shadow
  - Duration: 300ms
```

### Glass Card (Glassmorphic)
```
Background: rgba(255, 255, 255, 0.1) [Light]
Background: rgba(15, 23, 42, 0.2) [Dark]
Backdrop Filter: blur(16px)
Border: 1px solid rgba(226, 232, 240, 0.6) [Light]
Border: 1px solid rgba(255, 255, 255, 0.1) [Dark]
Border Radius: 1rem (16px)
Padding: 1.5rem (24px)
```

---

## Hover Effects

### Card Hover
```
Scale: 1.05 (5% increase)
Translate Y: -5px (lift up)
Shadow: Increase from medium to large
Duration: 300ms
Easing: Smooth cubic-bezier
```

### Button Hover
```
Scale: 1.05 (5% increase)
Translate Y: -2px (slight lift)
Shadow: Add or increase glow
Duration: 300ms
```

### Text Link Hover
```
Color: #10b981 (Emerald)
Duration: 200ms
```

### Icon Hover
```
Scale: 1.1 (10% increase)
Color: Accent color
Duration: 200ms
```

---

## Animation Timings

### Standard Durations
```
Fast: 200ms
  Use for: Simple transitions, hovers
  
Normal: 300ms
  Use for: Most interactions
  
Slow: 500ms
  Use for: Revealing animations
  
Reveal: 800ms
  Use for: Entrance animations, scroll reveals
```

### Easing Functions
```
Default: ease-in-out
  Use for: Most animations
  
Smooth: cubic-bezier(0.4, 0, 0.2, 1)
  Use for: Smooth transitions
  
Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
  Use for: Playful animations
```

---

## Breakpoints

### Tailwind Breakpoints
```
Mobile First (sm+):
  - sm: 640px  (Tablet)
  - md: 768px  (Tablet)
  - lg: 1024px (Desktop)
  - xl: 1280px (Large Desktop)
  - 2xl: 1536px (Extra Large)
```

### Layout Strategy
```
Mobile (<768px):
  - Single column
  - Full width
  - Stacked forms
  - Hamburger menu

Tablet (768px-1024px):
  - 2 columns
  - Flexible spacing
  - Desktop nav visible

Desktop (>1024px):
  - 3+ columns
  - Full features
  - Expanded layout
```

---

## Accessibility

### Color Contrast
```
Foreground on Background:
  - Light Mode: 4.5:1 (WCAG AA)
  - Dark Mode: 4.5:1 (WCAG AA)
  
Emerald (#10b981) on White:
  - Contrast Ratio: 4.5:1
  
Cyan (#06b6d4) on White:
  - Contrast Ratio: 3.2:1 (WCAG A)
```

### Focus States
```
All Interactive Elements:
  - Visible focus ring
  - Ring Color: Emerald
  - Ring Width: 2px
  - Ring Offset: 2px
```

### Semantic HTML
```
Use <header> for navigation
Use <main> for main content
Use <footer> for footer
Use <section> for content sections
Use <article> for independent content
Use <nav> for navigation
```

---

## CSS Classes (Tailwind)

### Custom Classes (in globals.css)
```
.glass
  - Glassmorphism effect
  - Use on: Cards, containers

.card-hover
  - Hover animation effects
  - Use on: Interactive cards

.button-gradient
  - Gradient button styling
  - Use on: Primary buttons

.section-padding
  - Standard section spacing
  - Use on: All major sections

.gradient-text
  - Gradient text effect
  - Use on: Headings, emphasis
```

---

## Dark Mode Implementation

### CSS Variables
```css
:root {
  /* Light Mode */
  --background: #f8fafc;
  --foreground: #0f172a;
}

.dark {
  /* Dark Mode */
  --background: #0f172a;
  --foreground: #f1f5f9;
}
```

### Using Variables
```
In Tailwind: bg-background, text-foreground
In CSS: color: var(--foreground);
In JavaScript: getComputedStyle(document.documentElement).getPropertyValue('--background')
```

---

## Visual Hierarchy

### Size Hierarchy
```
H1: 3rem (60px)    - 100%
H2: 2.25rem (36px) - 75%
H3: 1.5rem (24px)  - 50%
Body: 1rem (16px)  - Baseline
Small: 0.875rem (14px) - 85%
```

### Color Hierarchy
```
Primary: Foreground color (High contrast)
Secondary: Foreground/70 (Medium contrast)
Tertiary: Foreground/50 (Low contrast)
Accents: Emerald/Cyan (Attention)
```

### Weight Hierarchy
```
Bold (700): Headings, primary text
Medium (500): Secondary headings
Regular (400): Body text, descriptions
```

---

## Usage Examples

### Button Implementation
```jsx
// Primary Button
<button className="button-gradient">Enroll Now</button>

// Secondary Button
<button className="px-6 py-3 rounded-lg border-2 border-emerald-500 text-emerald-500 font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
  Get Started
</button>
```

### Card Implementation
```jsx
// Glass Card
<div className="glass rounded-xl p-6 border border-slate-200/60 dark:border-white/10">
  Content here
</div>

// Standard Card
<div className="bg-card rounded-xl p-6 border border-border shadow-md">
  Content here
</div>
```

### Gradient Text
```jsx
<h1 className="gradient-text text-5xl font-bold">
  Heading with gradient
</h1>
```

---

## Quality Standards

### Design Consistency
- ✅ All cards use same border radius
- ✅ All buttons use consistent padding
- ✅ All sections use consistent spacing
- ✅ Color palette limited to 5 colors
- ✅ Font family consistent throughout

### Accessibility
- ✅ Color contrast >= 4.5:1 for text
- ✅ Focus states visible on all interactive elements
- ✅ Semantic HTML used throughout
- ✅ Proper heading hierarchy
- ✅ Alt text on images

### Performance
- ✅ Minimal animations (no excess motion)
- ✅ Hardware-accelerated transforms
- ✅ Optimized images
- ✅ Lazy loading where applicable
- ✅ Fast load times (<3s target)

---

**Design System Created with Professional Standards** ✨
