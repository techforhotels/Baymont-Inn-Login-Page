// Site configuration file - Customers can customize all brand information here
import logoImage from '../assets/logo.png'

export const siteConfig = {
  // Brand information
  brandName: 'Your Hotel',
  brandSubtitle: 'Luxury Hotels',
  logoPath: logoImage,

  // Contact information (example data - please replace with actual info)
  contact: {
    phone: '+1 (555) 000-0000',
    email: 'info@yourhotel.com',
    address: 'Your City, Your Country'
  },

  // Social media links (please replace with actual links)
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#'
  },

  // Copyright information
  copyright: {
    year: new Date().getFullYear(),
    text: 'Your Hotel. All rights reserved.'
  },

  // Image placeholders - Please replace with your own images
  // It is recommended to use your own image server or CDN
  // These are royalty-free stock images for demonstration purposes
  images: {
    hero: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920'
    ],
    rooms: [
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    loginShowcase: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },

  // Customer testimonial data (example - please replace with real testimonials)
  testimonials: [
    {
      text: 'An amazing experience! The service was exceptional and the rooms were beautiful.',
      name: 'Guest A',
      location: 'City, Country',
      avatar: 'https://ui-avatars.com/api/?name=Guest+A&background=D4AF37&color=1a1a1a&size=150'
    },
    {
      text: 'Highly recommend! Everything was perfect from start to finish.',
      name: 'Guest B',
      location: 'City, Country',
      avatar: 'https://ui-avatars.com/api/?name=Guest+B&background=D4AF37&color=1a1a1a&size=150'
    },
    {
      text: 'A wonderful stay! Will definitely come back again.',
      name: 'Guest C',
      location: 'City, Country',
      avatar: 'https://ui-avatars.com/api/?name=Guest+C&background=D4AF37&color=1a1a1a&size=150'
    },
    {
      text: 'Outstanding service and beautiful accommodations.',
      name: 'Guest D',
      location: 'City, Country',
      avatar: 'https://ui-avatars.com/api/?name=Guest+D&background=D4AF37&color=1a1a1a&size=150'
    }
  ]
}
