# 🚀 Quick Start Guide

## Get Started in 3 Minutes!

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Visit: **http://localhost:5173** (or the port shown in terminal)

---

## 📸 What You'll See

### Hero Section
- **Auto-rotating luxury hotel backgrounds**
- **Floating golden particles**
- **Animated statistics** showing hotel achievements
- **Two prominent CTAs**: "Reserve Your Stay" and "Explore Suites"

### Premium Amenities
Scroll down to see **8 animated cards** showcasing:
- WiFi, Spa, Pool, Valet, Dining, Concierge, Fitness, Events

### Signature Suites
Three premium room options with:
- **Deluxe King Room** - $399/night
- **Executive Suite** - $699/night (Premium)
- **Presidential Suite** - $1,999/night (Premium)

Click any room card to open the booking modal!

### Customer Testimonials
Auto-rotating carousel with 4 guest reviews
- Use arrow buttons to navigate manually
- Or let it auto-play every 8 seconds

### Booking Modal
Click any **"Book Now"** button to see the advanced reservation form with:
- Date pickers
- Room selection
- Guest configuration
- Personal info fields
- Special requests

---

## 🎨 Interactive Elements

### Try These!
1. **Scroll down slowly** - Watch sections animate into view
2. **Hover over room cards** - Images zoom smoothly
3. **Hover over amenity cards** - Cards lift with glow effect
4. **Click navigation links** - Smooth scroll to sections
5. **Open booking modal** - Fill out the form and "submit"

---

## 🛠️ Customization

### Change Colors
Edit `src/style.css`:
```css
@theme {
  --color-hotel-gold: #D4AF37;  /* Change this! */
  --color-hotel-dark: #1a1a1a;   /* And this! */
}
```

### Change Hero Images
Edit `src/components/HotelLandingPro.vue`:
```javascript
const heroImages = [
  'YOUR_IMAGE_URL_1',
  'YOUR_IMAGE_URL_2',
  'YOUR_IMAGE_URL_3'
]
```

### Change Statistics
```javascript
const stats = [
  { value: 500, label: 'Your Text', suffix: '+' },
  // Add more...
]
```

### Add More Rooms
```javascript
const rooms = [
  {
    name: 'Your Room Name',
    description: 'Description here',
    price: '499',
    size: '600 sq ft',
    guests: '3 Guests',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: 'IMAGE_URL',
    premium: true  // or false
  },
  // Add more...
]
```

---

## 📱 Mobile Testing

### Test Responsive Design
1. Open browser DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Try different devices:
   - iPhone 12 Pro
   - iPad Air
   - Desktop

---

## 🎯 Key Features to Showcase

### For Client Demo
1. **Start at top** - Show hero with animations
2. **Scroll slowly** - Demonstrate AOS animations
3. **Show amenities** - Hover over cards
4. **Display rooms** - Click to show modal
5. **Testimonials** - Show auto-rotation
6. **Book button** - Fill out form partially

---

## 🐛 Troubleshooting

### Port Already in Use?
The dev server will automatically try another port (5174, 5175, etc.)

### Animations Not Working?
- Refresh the page (Ctrl+R)
- Clear browser cache
- Check console for errors

### Images Not Loading?
- Check internet connection (using Unsplash CDN)
- Wait a few seconds for CDN

---

## 📦 Build for Production

### Create Optimized Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy
Upload the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Your own hosting

---

## 🎓 Learning Resources

### Want to Modify More?

**Vue 3 Docs**: https://vuejs.org/
**Tailwind CSS v4**: https://tailwindcss.com/
**Heroicons**: https://heroicons.com/
**AOS Library**: https://michalsnik.github.io/aos/

---

## 💡 Pro Tips

1. **Use Chrome DevTools** to inspect elements and see Tailwind classes
2. **Edit and save** - Vite hot-reloads instantly!
3. **Check FEATURES.md** for complete feature list
4. **Read component code** - Everything is well-commented

---

## 🤝 Need Help?

- Check README.md for detailed documentation
- Read FEATURES.md for all features
- Inspect browser console for errors
- Review component files in `src/components/`

---

**Enjoy building your luxury hotel experience! ✨**

