# Nandani Kumari — Modern Dark Portfolio & Week 2 CSS Fundamentals Assignment

**Student Name:** Nandani Kumari
**Project:** WD_Week2_NandaniKumari
**Assignment:** Week 2 — CSS Fundamentals (100 marks)

---

## 1. Project Overview

This is a complete, polished, responsive, modern dark portfolio website for **Nandani Kumari**, an aspiring software developer. It serves two purposes:

1. A professional portfolio showcasing Nandani's skills, projects, education, certifications, and activities.
2. A complete Week 2 CSS Fundamentals internship assignment demonstrating all six required tasks.

The design follows a premium developer aesthetic with a dark color palette, subtle borders, soft shadows, restrained glow effects, and clean typography.

---

## 2. Objectives of the Week 2 Assignment

- Demonstrate CSS syntax, selectors, colors, backgrounds, and font styling
- Demonstrate the CSS Box Model with content, padding, border, and margin
- Build layouts using Flexbox with alignment, gap, and wrapping
- Build layouts using CSS Grid with columns, rows, and responsive behavior
- Implement responsive design with media queries at three breakpoints
- Combine all concepts into a complete mini CSS project (this portfolio)

---

## 3. Technologies Used

- **HTML5** — semantic structure
- **CSS3** — all styling, layout, responsive design, and animations
- **Vanilla JavaScript** — used only for the accessible mobile navigation toggle

No frameworks, libraries, or build tools are required.

---

## 4. Folder Structure

```
WD_Week2_NandaniKumari/
├── index.html          — Main HTML page
├── style.css           — All CSS styles and assignment demonstrations
├── script.js           — Mobile navigation toggle (vanilla JS)
├── README.md           — This file
├── TESTING_CHECKLIST.md — Testing checklist
└── assets/
    └── README.md       — Notes on assets used
```

---

## 5. How to Open the Website Locally

### Option A: Open directly

1. Extract the ZIP file.
2. Open the `WD_Week2_NandaniKumari` folder.
3. Double-click `index.html` to open it in your default web browser.

### Option B: Use a local server (optional)

If you have Python installed:

```
cd WD_Week2_NandaniKumari
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## 6. Description of Each Assignment Task

### Task 1 — Introduction to CSS & Selectors (20 marks)
The external stylesheet `style.css` is linked from `index.html`. The CSS demonstrates:
- **Element selectors:** `body`, `h1`, `h2`, `h3`, `p`, `a`, `ul`
- **Class selectors:** `.btn`, `.card`, `.skill-group`, `.demo-class`, and many more
- **ID selector:** `#top` on the header, `#demo-id` on the Task 1 demo panel
- **Universal selector:** `*` for the global box-sizing reset
- **CSS variables:** color, spacing, radius, shadow, and font variables in `:root`
- **Backgrounds, colors, font sizes, font weights, and text alignment** throughout
- A visible demonstration panel in the CSS Assignment section

### Task 2 — CSS Box Model & Styling (20 marks)
- Global `box-sizing: border-box` applied via the universal selector
- An annotated Box Model diagram showing content, padding, border, and margin with labels
- A concrete example with defined width, height, padding, margin, border, border-radius, and box-shadow
- Properties demonstrated: `width`, `height`, `margin`, `padding`, `border`, `border-radius`, `box-shadow`, `box-sizing`

### Task 3 — Flexbox Layout (15 marks)
- Flexbox used in the navigation bar, hero action buttons, skill lists, and social links
- A labelled demonstration panel showing `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, and `flex-wrap`
- Properties demonstrated: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`

### Task 4 — CSS Grid Layout (15 marks)
- CSS Grid used for the skills grid, projects gallery, certifications grid, and about cards
- A dedicated demonstration panel with 6 grid items using `grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))` and `gap`
- Responsive column changes via media queries
- Properties demonstrated: `display: grid`, `grid-template-columns`, `repeat()`, `minmax()`, `auto-fill`, `gap`

### Task 5 — Responsive Design & Media Queries (15 marks)
- Three breakpoints: Mobile (≤599px), Tablet (600px–1023px), Desktop (≥1024px)
- Fluid typography with `clamp()`
- `max-width` for content containers
- `minmax()` in grid templates
- Relative units: `rem`, `%`, `vw`
- Collapsible mobile navigation menu
- Tested at 320px, 375px, 600px, 768px, 1024px, and 1440px widths

### Task 6 — Mini CSS Project (15 marks)
- The entire portfolio website IS the mini project
- It combines CSS selectors, Box Model, Flexbox, CSS Grid, responsive design, and media queries
- All six task demonstrations are clearly labelled and visible in the CSS Assignment section

**Total: 100 marks**

---

## 7. CSS Selectors Demonstrated

| Selector Type | Example | Where Used |
|---|---|---|
| Element | `body`, `h1`, `p`, `a` | Global base styles |
| Class | `.btn`, `.card`, `.skill-group` | Throughout the page |
| ID | `#top`, `#demo-id` | Header, Task 1 demo |
| Universal | `*` | Box-sizing reset |

---

## 8. Box Model Explanation

Every HTML element is a rectangular box with four layers (from inside out):

1. **Content** — the actual text or element content
2. **Padding** — space between content and border
3. **Border** — the border surrounding padding
4. **Margin** — space outside the border, separating elements

With `box-sizing: border-box`, padding and border are included within the declared width and height, making layouts more predictable.

---

## 9. Flexbox Explanation

Flexbox is a one-dimensional layout model for arranging items in a row or column.

Key properties:
- `display: flex` — creates a flex container
- `flex-direction` — `row` (default) or `column`
- `justify-content` — horizontal alignment (`center`, `space-between`, etc.)
- `align-items` — vertical alignment (`center`, `flex-start`, etc.)
- `gap` — spacing between flex items
- `flex-wrap` — allows items to wrap to new lines

Used in: navigation bar, hero buttons, skill lists, Task 3 demo panel.

---

## 10. CSS Grid Explanation

CSS Grid is a two-dimensional layout system for creating rows and columns.

Key properties:
- `display: grid` — creates a grid container
- `grid-template-columns` — defines column sizes
- `repeat()` — repeats a pattern (e.g., `repeat(3, 1fr)`)
- `minmax()` — sets min and max column width
- `auto-fill` — creates as many columns as fit
- `gap` — spacing between grid items

Used in: skills grid, projects gallery, certifications grid, Task 4 demo panel.

---

## 11. Responsive Breakpoints

| Breakpoint | Range | Behavior |
|---|---|---|
| Mobile | ≤ 599px | Single-column, collapsible nav, fluid type |
| Tablet | 600px – 1023px | 2-column grids, inline nav |
| Desktop | ≥ 1024px | Multi-column grids, 2-column hero |

---

## 12. Portfolio Section Overview

| Section | Description |
|---|---|
| Hero | Introduction with code-window CSS illustration and CTA buttons |
| About | Three cards summarizing who Nandani is and what she does |
| Skills | 7 skill groups in a responsive grid |
| Projects | 3 project cards with CSS-generated dashboard mockups |
| Education | Timeline with 3 qualifications |
| Certifications | 4 certification cards in a grid |
| Activities | 2 activity cards (participation, not wins) |
| CSS Assignment | 6 task cards with live demonstrations |
| Contact | Contact info with `mailto:`/`tel:` links + demo form |
| Footer | Brand, nav links, copyright |

---

## 13. How to Update Personal Information and Links

1. Open `index.html` in a text editor (e.g., VS Code, Notepad).
2. To update contact details, find the **Contact Section** (`<section id="contact">`) and edit the email, phone, location, LinkedIn, and GitHub links.
3. To update projects, find the **Projects Section** (`<section id="projects">`) and edit the project cards.
4. To update the color scheme, open `style.css` and modify the CSS variables in the `:root` block at the top.
5. Save the file and refresh the browser.

---

## 14. Known Limitations

- The contact form is a **frontend demonstration only** — no backend is connected. Messages are not sent.
- Project thumbnails are CSS-generated illustrations, not screenshots of live applications.
- The DHIS project is shown as an ongoing development project, not a completed product.
- No live deployment links or repository URLs are provided for projects, as none were verified.

---

## 15. Submission Instructions

1. Verify all files are present in the `WD_Week2_NandaniKumari` folder.
2. Compress the folder into a ZIP file named `WD_Week2_NandaniKumari.zip`.
3. Submit the ZIP file as instructed by the internship program.
