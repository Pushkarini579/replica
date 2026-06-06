# Rhetorica '26 - Literary Festival Landing Page

Rhetorica '26 is the fifth edition of the annual literary festival of **Techno International New Town**, organized by **LITWITS**, the literary club of TINT. This project is a modern, visually immersive landing page designed to capture the essence of the festival through watercolor aesthetics and smooth, engaging animations.

##  Design & Aesthetic

The landing page features a unique "watercolor" theme, utilizing hand-drawn style illustrations and classic typography to create a sophisticated literary atmosphere.

- **Headings:** Pirata One (Gothic/Literary style)
- **Body Text:** Montserrat (Modern & Readable)
- **Color Palette:** Rhetorica Gold (#c5a059), Cream (#f4ebd0), and Deep Black.

##  Key Features

- **Interactive Hero Section:** A striking full-screen entrance with scale-reveal animations.
- **Scroll-Triggered Animations:** Smooth fade-ins and slide-ups using `framer-motion` that bring the page to life as you explore.
- **Dynamic Countdown:** A real-time countdown timer leading up to the event on Jan 20th, 2026.
- **Arched Event Gallery:** A curated list of events (Baak Bitorko, Khône Kotha, etc.) displayed within elegant architectural window frames.
- **Collaborations Grid:** A staggered reveal section showcasing brand partnerships with grayscale-to-color hover effects.
- **Integrated Location Guide:** An interactive Google Maps integration with a customized guide for visitors.
- **Watercolor Footer:** A beautiful scenic illustration footer that anchors the page aesthetic.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [FontAwesome](https://fontawesome.com/)

##  Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd rhetorica-26
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

##  Project Structure

- `src/components/`: Reusable React components for each section (Hero, About, Events, etc.).
- `src/assets.ts`: Centralized management of remote image assets and URLs.
- `src/index.css`: Global styles and Tailwind configuration.
- `tailwind.config.js`: Custom theme definitions for colors and fonts.
