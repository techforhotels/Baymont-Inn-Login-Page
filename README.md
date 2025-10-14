# Hotel Landing Page Template

A modern, customizable hotel landing page template built with Vue 3 + Pinia + Tailwind CSS.

> **⚠️ IMPORTANT: Customization Required**  
> This is a template project. Before deploying to production, you **MUST** customize all content in `/src/config/site.js` including brand name, images, contact information, and testimonials.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Pinia** - Official state management for Vue 3
- **Tailwind CSS v4** - Utility-first CSS framework (with new CSS-based configuration)
- **Vite** - Next-generation frontend build tool
- **Heroicons** - Beautiful SVG icon library
- **AOS (Animate On Scroll)** - Scroll animation library
- **VueUse** - Collection of Vue composition utilities

## Features

### 🏨 Main Landing Page
- 🎨 **Modern, Responsive Design** - Stunning visuals optimized for all devices
- ✨ **Smooth Animations** - AOS scroll animations and custom transitions
- 🎭 **Parallax Effects** - Dynamic hero section with floating particles
- 📊 **Animated Statistics** - Real-time count-up numbers showcase
- 🏨 **Premium Room Showcase** - Enhanced UI with detailed room information
- 💬 **Customer Testimonials** - Auto-rotating carousel with real reviews
- 🎯 **Advanced Booking System** - Complete reservation form with validation
- 🌟 **Luxury Amenities Display** - 8 premium facilities with hover effects
- 🎨 **Gradient Accents** - Gold-themed luxury color scheme
- 🔄 **Micro-interactions** - Engaging hover states and button animations

### 🔐 Premium Login Page
- 📱 **Split-Screen Design** - Form on left, visual showcase on right
- 🎭 **Dual Authentication** - Sign In and Sign Up with smooth tab switching
- 🔒 **Password Features** - Show/hide toggle, strength indicator
- 🌟 **Social Login** - Facebook, Google, Apple integration ready
- 🖼️ **Auto-Rotating Showcase** - 4 feature slides with luxury imagery
- 📊 **Live Statistics** - Dynamic numbers showing hotel achievements
- ✨ **Premium Animations** - Floating particles, gradient effects
- 💬 **Smart Validation** - Real-time form feedback
- 🎨 **Luxury Theme** - Consistent gold and black color scheme

### 🚀 General
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Fast loading with lazy-loaded components
- 🎯 **Seamless Navigation** - Smooth transitions between pages

## Project Structure

\`\`\`
hotel_page/
├── src/
│   ├── components/
│   │   ├── HotelLandingPro.vue # Main landing page (enhanced)
│   │   ├── LoginPage.vue       # Premium login/register page
│   │   └── HotelLanding.vue    # Original simple version
│   ├── stores/
│   │   └── auth.js             # Authentication state management
│   ├── App.vue                 # Root component with routing
│   ├── main.js                 # Application entry
│   └── style.css               # Global styles & Tailwind v4 config
├── FEATURES.md                 # Detailed feature documentation
├── LOGIN_FEATURES.md           # Login page features
├── QUICKSTART.md               # Quick start guide
├── postcss.config.js           # PostCSS configuration
└── package.json
\`\`\`

## 🚀 Quick Start

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Customize Your Site (REQUIRED)

Before running the project, customize your site settings:

1. Open `/src/config/site.js`
2. Update the following:
   - `brandName` - Your hotel/brand name
   - `contact` - Your actual contact information
   - `images` - Replace with your own images (recommended to use your own CDN)
   - `testimonials` - Add real customer reviews

### 3. Development Mode

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:5173](http://localhost:5173) to view the application.

**To access the login page:** Click the **"Login"** button in the top navigation bar.

### Production Build

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Customization

### Tailwind CSS v4 Configuration

This project uses **Tailwind CSS v4**, which introduces a new CSS-based configuration system. All customization is done directly in `src/style.css` using the `@theme` directive.

### Color Theme

Customize colors in `src/style.css`:

\`\`\`css
@theme {
  --color-hotel-gold: #D4AF37;
  --color-hotel-dark: #1a1a1a;
  
  --font-family-sans: Inter, system-ui, sans-serif;
  --font-family-serif: Playfair Display, serif;
}
\`\`\`

Then use them in your components with Tailwind classes like `bg-hotel-gold`, `text-hotel-dark`, etc.

### Fonts

The project uses Google Fonts:
- **Playfair Display** - Elegant serif font for headings
- **Inter** - Modern sans-serif font for body text

These are imported in `src/style.css` and configured in the `@theme` block.

## Page Components

### 🎯 Enhanced Sections

- **Smart Navigation Bar** - Adaptive navigation with scroll-based transparency and smooth animations
- **Hero Section with Parallax** - Full-screen immersive hero with:
  - Auto-rotating background images (3 premium hotel photos)
  - Floating particle effects
  - Gradient text animations
  - Real-time statistics counter (500+ rooms, 98% satisfaction, etc.)
- **Premium Amenities Grid** - 8 luxury facilities with:
  - Icon-based cards with hover effects
  - Gradient backgrounds
  - Staggered AOS animations
- **Signature Suites Display** - Enhanced room cards featuring:
  - High-quality imagery with zoom effects
  - Room specifications (size, guests, features)
  - Premium badges for top-tier suites
  - Pricing and booking CTAs
- **Customer Testimonials Carousel** - Auto-rotating reviews with:
  - 4 real customer testimonials
  - Avatar images and locations
  - 5-star ratings
  - Smooth slide transitions
- **Call-to-Action Banner** - Eye-catching gradient section with:
  - Limited-time offer messaging
  - Trust badges (Best Price Guarantee, Free Cancellation)
  - Prominent booking button
- **Enhanced Footer** - Comprehensive footer with:
  - Quick links with icons
  - Contact information
  - Newsletter subscription
  - Social media links
- **Advanced Booking Modal** - Full-featured reservation system with:
  - Date selection (check-in/check-out)
  - Room type dropdown
  - Guest and room count selectors
  - Personal information fields
  - Special requests textarea
  - Form validation and submission feedback

## State Management

State management using Pinia, currently implements:

- User authentication state
- Login/logout functionality
- User information storage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Important Notes

### Image Assets

The template includes placeholder images from [Pexels](https://www.pexels.com/) (free to use). For production:

1. **Replace all images** in `/src/config/site.js` with your own
2. Use your own image hosting service or CDN
3. Ensure you have proper rights to all images used

### Customization Checklist

Before deploying:

- [ ] Update brand name and logo
- [ ] Replace all placeholder images
- [ ] Update contact information (phone, email, address)
- [ ] Add real customer testimonials
- [ ] Update social media links
- [ ] Customize room types and pricing
- [ ] Review and update all text content

## 📄 License

MIT License - Free to use for commercial and personal projects

## ⚠️ Disclaimer

This is a template project. All placeholder content (images, text, testimonials) are for demonstration purposes only. Users are responsible for ensuring they have proper rights and permissions for all content used in their production deployment.

## 🙋 Support

For customization or support, please contact the developer.
