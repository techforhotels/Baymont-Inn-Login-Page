# 🎨 Customization Guide

This guide will help you customize the hotel landing page template for your own use.

## ⚠️ IMPORTANT: Before You Deploy

**You MUST customize all placeholder content before deploying to production!** Failure to do so may result in:
- Copyright issues with placeholder images
- Misleading information (fake contact details, testimonials)
- Poor user experience

## 📋 Quick Customization Checklist

### 1. Brand Information (REQUIRED)

Open `/src/config/site.js` and update:

```javascript
brandName: 'Your Hotel Name',        // Replace with your hotel name
brandSubtitle: 'Your Tagline',       // Replace with your tagline
logoPath: '/src/assets/logo.png',    // Replace with your logo path
```

### 2. Contact Information (REQUIRED)

Update your actual contact details:

```javascript
contact: {
  phone: '+1 (555) 000-0000',        // Your phone number
  email: 'info@yourhotel.com',       // Your email
  address: 'Your City, Country'      // Your address
}
```

### 3. Images (REQUIRED)

**Option A: Use Your Own Images (Recommended)**

```javascript
images: {
  hero: [
    'https://your-cdn.com/hero1.jpg',
    'https://your-cdn.com/hero2.jpg',
    'https://your-cdn.com/hero3.jpg'
  ],
  rooms: [
    'https://your-cdn.com/room1.jpg',
    'https://your-cdn.com/room2.jpg',
    'https://your-cdn.com/room3.jpg'
  ],
  // ... more images
}
```

**Option B: Use Free Stock Images**

- [Pexels](https://www.pexels.com/) - Free stock photos
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pixabay](https://pixabay.com/) - Free images and videos

**Important:** Always check the license and attribution requirements!

### 4. Customer Testimonials (REQUIRED)

Replace with real customer reviews:

```javascript
testimonials: [
  {
    text: 'Real customer review text here...',
    name: 'Real Customer Name',
    location: 'Real Location',
    avatar: 'https://your-cdn.com/avatar1.jpg'
  },
  // ... more testimonials
]
```

**Tips for Testimonials:**
- Use real reviews (with permission)
- Include customer photos (with permission)
- Keep them authentic and specific
- Use UI Avatars for placeholder avatars: `https://ui-avatars.com/api/?name=Name`

### 5. Logo (REQUIRED)

Replace the default logo:

1. Place your logo file in `/src/assets/`
2. Update the path in config:
   ```javascript
   logoPath: '/src/assets/your-logo.png'
   ```

**Logo Requirements:**
- Format: PNG with transparent background (recommended)
- Size: 200x200px or larger
- Square or rectangular shape

### 6. Social Media Links

Update with your actual social media profiles:

```javascript
social: {
  facebook: 'https://facebook.com/yourhotel',
  twitter: 'https://twitter.com/yourhotel',
  instagram: 'https://instagram.com/yourhotel'
}
```

### 7. Color Theme (Optional)

To change the gold accent color, edit `/src/style.css`:

```css
@theme {
  --color-hotel-gold: #D4AF37;  /* Change this hex code */
  --color-hotel-dark: #1a1a1a;  /* Change dark color */
}
```

Popular hotel color schemes:
- **Luxury Gold:** `#D4AF37`
- **Royal Blue:** `#1E3A8A`
- **Emerald Green:** `#059669`
- **Deep Purple:** `#7C3AED`

### 8. Content Customization

#### Room Information

Edit room details in the component files or create a rooms config:

- Room names
- Descriptions
- Prices
- Features
- Sizes

#### Amenities

Update the amenities section with your actual facilities:

- WiFi details
- Spa services
- Pool information
- Dining options
- etc.

## 🖼️ Image Guidelines

### Recommended Image Sizes

- **Hero Images:** 1920x1080px (16:9 ratio)
- **Room Images:** 800x1000px (4:5 ratio)
- **Login Showcase:** 1200x1600px (3:4 ratio)
- **Testimonial Avatars:** 150x150px (1:1 ratio)
- **Logo:** 200x200px minimum

### Image Optimization

Before uploading:

1. **Compress images** using:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Use modern formats:**
   - WebP (better compression)
   - AVIF (even better, but less support)
   - JPG (fallback)

3. **Use a CDN** for faster loading:
   - Cloudinary
   - Imgix
   - AWS CloudFront

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Brand name updated
- [ ] Logo replaced
- [ ] All images replaced with your own
- [ ] Contact information updated
- [ ] Social media links updated
- [ ] Testimonials are real (with permission)
- [ ] Tested on mobile devices
- [ ] Tested in all major browsers
- [ ] SEO meta tags updated (title, description)
- [ ] Analytics added (Google Analytics, etc.)
- [ ] Privacy policy and terms added
- [ ] Contact form connected to your email

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `/src/components/`
2. Import and use it in `App.vue` or main layout
3. Style using Tailwind classes

### Modifying Animations

Edit the animation settings in:
- Component `<style>` sections
- AOS settings in `App.vue`

### Adding More Pages

1. Install Vue Router: `npm install vue-router`
2. Create route configuration
3. Add navigation links

## 🆘 Common Issues

### Images Not Loading

- Check image URLs are correct and accessible
- Verify CORS settings if using external CDN
- Ensure images are optimized and not too large

### Styles Not Applying

- Clear browser cache
- Rebuild project: `npm run build`
- Check Tailwind configuration

### Font Not Showing

- Verify Google Fonts import in `style.css`
- Check font-family names in theme config

## 📞 Need Help?

If you need assistance with customization:

1. Check the documentation
2. Review the example configuration
3. Contact the developer

---

**Remember:** This is YOUR website now. Make it unique and authentic to your brand! 🎉

