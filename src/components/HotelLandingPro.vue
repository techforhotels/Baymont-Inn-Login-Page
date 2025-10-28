<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Premium Navigation -->
    <nav 
      :class="[
        'fixed w-full z-50 transition-all duration-500',
        scrolled 
          ? 'bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl shadow-hotel-gold/10 py-3' 
          : 'bg-black/20 backdrop-blur-xl py-5 border-b border-white/5'
      ]"
    >
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center">
          <!-- Premium Logo Section -->
          <div class="flex items-center space-x-4 cursor-pointer group">
            <!-- Logo Container with Golden Glow -->
            <div class="relative">
              <!-- Glow Effect -->
              <div class="absolute inset-0 bg-hotel-gold/30 blur-xl rounded-full group-hover:bg-hotel-gold/50 transition-all duration-500"></div>
              <!-- Logo Background -->
              <div class="relative w-20 h-20 bg-gradient-to-br from-hotel-gold via-yellow-500 to-hotel-gold rounded-2xl flex items-center justify-center p-3 shadow-2xl shadow-hotel-gold/50 group-hover:shadow-hotel-gold/70 transition-all duration-500 group-hover:scale-105">
                <div class="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                <img 
                  :src="siteConfig.logoPath" 
                  :alt="`${siteConfig.brandName} Logo`" 
                  class="w-full h-full object-contain relative z-10 filter brightness-125 contrast-125 drop-shadow-lg"
                />
              </div>
            </div>
            <!-- Brand Text -->
            <div class="flex flex-col">
              <span class="text-3xl font-serif font-bold text-white group-hover:text-hotel-gold transition-all duration-300 tracking-tight">
                {{ siteConfig.brandName }}
              </span>
              <span class="text-xs text-hotel-gold font-semibold tracking-widest uppercase opacity-80">
                {{ siteConfig.brandSubtitle }}
              </span>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="hidden lg:flex items-center space-x-8">
            <a 
              v-for="link in navLinks" 
              :key="link.href"
              :href="link.href" 
              class="relative text-white hover:text-hotel-gold transition-all duration-300 font-medium text-sm uppercase tracking-wider group py-2"
            >
              {{ link.text }}
              <!-- Underline Effect -->
              <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-hotel-gold to-transparent group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-3">
            <!-- Login Button -->
            <button 
              @click="router.push('/')" 
              class="px-6 py-2.5 bg-white/5 backdrop-blur border border-hotel-gold/50 text-hotel-gold hover:bg-hotel-gold hover:text-black hover:border-hotel-gold font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-hotel-gold/30"
            >
              <UserIcon class="h-4 w-4 inline mr-2" />
              Login
            </button>
            <!-- Book Button -->
            <button 
              @click="showBookingModal = true" 
              class="px-6 py-2.5 bg-gradient-to-r from-hotel-gold to-yellow-500 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-hotel-gold/50 flex items-center gap-2"
            >
              <CalendarIcon class="h-5 w-5" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Parallax -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>
        <div 
          class="w-full h-full bg-cover bg-center transition-transform duration-700"
          :style="{ 
            backgroundImage: `url(${heroImages[currentHeroImage]})`,
            transform: `scale(${1 + scrollY * 0.0003})`
          }"
        ></div>
      </div>
      
      <!-- Floating particles effect -->
      <div class="absolute inset-0 z-10">
        <div 
          v-for="i in 20" 
          :key="i"
          class="absolute w-2 h-2 bg-hotel-gold rounded-full opacity-20 animate-float"
          :style="{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }"
        ></div>
      </div>
      
      <div class="relative z-20 text-center px-4 max-w-5xl">
        <div class="animate-fade-in-up">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Experience
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-hotel-gold via-yellow-400 to-hotel-gold animate-shimmer">
              Extraordinary Luxury
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where timeless elegance meets modern sophistication. Discover a world of unparalleled comfort and exceptional service.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button @click="showBookingModal = true" class="btn-primary text-lg group">
              Reserve Your Stay
              <ArrowRightIcon class="h-5 w-5 inline ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
            <button @click="scrollToSection('rooms')" class="btn-outline text-lg group">
              <EyeIcon class="h-5 w-5 inline mr-2" />
              Explore Suites
            </button>
          </div>
        </div>
        
        <!-- Stats bar -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style="animation-delay: 0.3s;">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-hotel-gold mb-2">
              <CountUp :end="stat.value" :suffix="stat.suffix" />
            </div>
            <div class="text-gray-300 text-sm md:text-base">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDownIcon class="h-10 w-10 text-hotel-gold" />
      </div>
    </section>

    <!-- Featured Amenities with Scroll Animation -->
    <section id="amenities" class="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-72 h-72 bg-hotel-gold rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-hotel-gold text-sm font-semibold tracking-widest uppercase">Premium Facilities</span>
          <h2 class="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
            World-Class Amenities
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Every detail designed for your ultimate comfort and pleasure
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(amenity, index) in amenities" 
            :key="index"
            class="group bg-gray-800/50 backdrop-blur p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-hotel-gold/20"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-hotel-gold to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <component :is="amenity.icon" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ amenity.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ amenity.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rooms with Enhanced UI -->
    <section id="rooms" class="py-24 bg-black">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-hotel-gold text-sm font-semibold tracking-widest uppercase">Accommodation</span>
          <h2 class="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
            Signature Suites
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Meticulously crafted spaces that redefine luxury living
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            v-for="(room, index) in rooms" 
            :key="index"
            class="group relative overflow-hidden rounded-2xl cursor-pointer"
            data-aos="zoom-in"
            :data-aos-delay="index * 150"
            @click="selectRoom(room)"
          >
            <div class="aspect-[4/5] overflow-hidden">
              <img 
                :src="room.image" 
                :alt="room.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity">
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-3 py-1 bg-hotel-gold/20 backdrop-blur text-hotel-gold text-xs font-semibold rounded-full">
                    {{ room.size }}
                  </span>
                  <span class="flex items-center text-gray-300 text-sm">
                    <UserGroupIcon class="h-4 w-4 mr-1" />
                    {{ room.guests }}
                  </span>
                </div>
                
                <h3 class="text-3xl font-serif font-bold text-white mb-2">{{ room.name }}</h3>
                <p class="text-gray-300 mb-4 line-clamp-2">{{ room.description }}</p>
                
                <div class="flex items-center gap-3 mb-4">
                  <span 
                    v-for="feature in room.features" 
                    :key="feature"
                    class="text-hotel-gold text-sm"
                  >
                    • {{ feature }}
                  </span>
                </div>
                
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-gray-400 text-sm block">From</span>
                    <span class="text-hotel-gold text-3xl font-bold">${{ room.price }}</span>
                    <span class="text-gray-400 text-sm">/night</span>
                  </div>
                  <button class="px-6 py-3 bg-white text-hotel-dark font-bold rounded-lg group-hover:bg-hotel-gold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Premium badge -->
            <div v-if="room.premium" class="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-hotel-gold to-yellow-600 text-white font-bold text-sm rounded-full shadow-lg">
              <SparklesIcon class="h-4 w-4 inline mr-1" />
              Premium
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Carousel -->
    <section id="testimonials" class="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-hotel-gold rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-hotel-gold text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 class="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">
            Guest Experiences
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Hear from our valued guests about their unforgettable stays
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto relative">
          <div class="flex items-center justify-center gap-8">
            <button 
              @click="prevTestimonial"
              class="p-4 bg-gray-800 rounded-full hover:bg-hotel-gold transition-colors group"
            >
              <ChevronLeftIcon class="h-6 w-6 text-white" />
            </button>
            
            <div class="flex-1">
              <Transition name="slide-fade" mode="out-in">
                <div :key="currentTestimonial" class="text-center p-8">
                  <div class="flex justify-center mb-6">
                    <div 
                      v-for="i in 5" 
                      :key="i"
                      class="text-hotel-gold text-2xl"
                    >
                      ★
                    </div>
                  </div>
                  
                  <p class="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed">
                    "{{ testimonials[currentTestimonial].text }}"
                  </p>
                  
                  <div class="flex items-center justify-center gap-4">
                    <img 
                      :src="testimonials[currentTestimonial].avatar" 
                      :alt="testimonials[currentTestimonial].name"
                      class="w-16 h-16 rounded-full object-cover border-2 border-hotel-gold"
                    />
                    <div class="text-left">
                      <div class="text-white font-bold text-lg">{{ testimonials[currentTestimonial].name }}</div>
                      <div class="text-gray-400">{{ testimonials[currentTestimonial].location }}</div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
            
            <button 
              @click="nextTestimonial"
              class="p-4 bg-gray-800 rounded-full hover:bg-hotel-gold transition-colors group"
            >
              <ChevronRightIcon class="h-6 w-6 text-white" />
            </button>
          </div>
          
          <!-- Dots indicator -->
          <div class="flex justify-center gap-2 mt-8">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              @click="currentTestimonial = index"
              :class="[
                'w-3 h-3 rounded-full transition-all',
                currentTestimonial === index ? 'bg-hotel-gold w-8' : 'bg-gray-600'
              ]"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section with Animation -->
    <section class="py-24 bg-gradient-to-r from-hotel-gold via-yellow-500 to-hotel-gold relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <div data-aos="zoom-in">
          <h2 class="text-4xl md:text-6xl font-serif font-bold text-hotel-dark mb-6">
            Your Luxury Escape Awaits
          </h2>
          <p class="text-xl text-hotel-dark/80 mb-8 max-w-2xl mx-auto">
            Exclusive offers available for a limited time. Book your dream vacation today.
          </p>
          <button 
            @click="showBookingModal = true"
            class="px-12 py-5 bg-hotel-dark text-white font-bold text-lg rounded-xl hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
          >
            <SparklesIcon class="h-6 w-6" />
            Reserve Now
            <ArrowRightIcon class="h-5 w-5" />
          </button>
          
          <div class="mt-12 flex justify-center gap-8 text-hotel-dark">
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="h-6 w-6" />
              <span class="font-semibold">Best Price Guarantee</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="h-6 w-6" />
              <span class="font-semibold">Free Cancellation</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Footer -->
    <footer class="bg-black py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-hotel-gold rounded-full filter blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-hotel-gold to-yellow-500 rounded-xl flex items-center justify-center p-3 shadow-lg shadow-hotel-gold/30">
                <img :src="siteConfig.logoPath" :alt="`${siteConfig.brandName} Logo`" class="w-full h-full object-contain filter brightness-110" />
              </div>
              <span class="text-3xl font-serif font-bold text-white">{{ siteConfig.brandName }}</span>
            </div>
            <p class="text-gray-400 leading-relaxed mb-6">
              Providing world-class luxury accommodation experiences
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hotel-gold transition-colors">
                📘
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hotel-gold transition-colors">
                🐦
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hotel-gold transition-colors">
                📷
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul class="space-y-3">
              <li><a href="#rooms" class="text-gray-400 hover:text-hotel-gold transition-colors flex items-center gap-2">
                <ArrowRightIcon class="h-4 w-4" /> Rooms & Suites
              </a></li>
              <li><a href="#amenities" class="text-gray-400 hover:text-hotel-gold transition-colors flex items-center gap-2">
                <ArrowRightIcon class="h-4 w-4" /> Amenities
              </a></li>
              <li><a href="#testimonials" class="text-gray-400 hover:text-hotel-gold transition-colors flex items-center gap-2">
                <ArrowRightIcon class="h-4 w-4" /> Testimonials
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white font-bold text-lg mb-6">Contact</h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-center gap-2">
                <PhoneIcon class="h-5 w-5 text-hotel-gold" />
                {{ siteConfig.contact.phone }}
              </li>
              <li class="flex items-center gap-2">
                <EnvelopeIcon class="h-5 w-5 text-hotel-gold" />
                {{ siteConfig.contact.email }}
              </li>
              <li class="flex items-center gap-2">
                <MapPinIcon class="h-5 w-5 text-hotel-gold" />
                {{ siteConfig.contact.address }}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p class="text-gray-400 mb-4">Subscribe for exclusive offers</p>
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-hotel-gold"
              />
              <button class="px-6 py-3 bg-hotel-gold text-hotel-dark font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                <ArrowRightIcon class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-center md:text-left">
            &copy; {{ siteConfig.copyright.year }} {{ siteConfig.copyright.text }}
          </p>
          <div class="flex gap-6 text-gray-400 text-sm">
            <a href="#" class="hover:text-hotel-gold transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-hotel-gold transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-hotel-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Enhanced Booking Modal -->
    <Transition name="modal">
      <div 
        v-if="showBookingModal" 
        class="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto scrollbar-hide"
        @click.self="showBookingModal = false"
      >
        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-2xl w-full p-4 md:p-6 relative shadow-2xl border border-hotel-gold/20 animate-scale-in my-4 max-h-[96vh] overflow-y-auto scrollbar-hide">
          <button 
            @click="showBookingModal = false"
            class="absolute top-2 right-2 md:top-3 md:right-3 text-gray-400 hover:text-white hover:rotate-90 transition-all z-10 bg-gray-800/80 rounded-full p-1.5"
          >
            <XMarkIcon class="h-5 w-5" />
          </button>
          
          <div class="text-center mb-4">
            <div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-hotel-gold to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-hotel-gold/30 relative">
              <div class="absolute inset-0 bg-white/10 rounded-xl"></div>
              <img :src="siteConfig.logoPath" :alt="siteConfig.brandName" class="w-full h-full object-contain relative z-10 p-3 filter brightness-110 contrast-110" />
            </div>
            <h2 class="text-xl md:text-2xl font-serif font-bold text-white mb-1">Reserve Your Suite</h2>
            <p class="text-gray-400 text-xs md:text-sm">Begin your extraordinary journey</p>
          </div>

          <form @submit.prevent="handleBooking" class="space-y-3">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Check-in</label>
                <input 
                  v-model="bookingForm.checkIn"
                  type="date" 
                  required
                  class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs focus:outline-none focus:border-hotel-gold transition-colors"
                />
              </div>
              
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Check-out</label>
                <input 
                  v-model="bookingForm.checkOut"
                  type="date" 
                  required
                  class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs focus:outline-none focus:border-hotel-gold transition-colors"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Room Type</label>
              <select 
                v-model="bookingForm.roomType"
                required
                class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs focus:outline-none focus:border-hotel-gold transition-colors"
              >
                <option value="" disabled>Select room</option>
                <option v-for="room in rooms" :key="room.name" :value="room.name">
                  {{ room.name }} - ${{ room.price }}/night
                </option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Guests</label>
                <select 
                  v-model="bookingForm.guests"
                  required
                  class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs focus:outline-none focus:border-hotel-gold transition-colors"
                >
                  <option v-for="n in 6" :key="n" :value="n">{{ n }} Guest{{ n > 1 ? 's' : '' }}</option>
                </select>
              </div>
              
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Rooms</label>
                <select 
                  v-model="bookingForm.rooms"
                  required
                  class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs focus:outline-none focus:border-hotel-gold transition-colors"
                >
                  <option v-for="n in 4" :key="n" :value="n">{{ n }} Room{{ n > 1 ? 's' : '' }}</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
              <input 
                v-model="bookingForm.name"
                type="text" 
                required
                placeholder="John Doe"
                class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs placeholder-gray-500 focus:outline-none focus:border-hotel-gold transition-colors"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Email</label>
                <input 
                  v-model="bookingForm.email"
                  type="email" 
                  required
                  placeholder="john@example.com"
                  class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs placeholder-gray-500 focus:outline-none focus:border-hotel-gold transition-colors"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Phone</label>
                <input 
                  v-model="bookingForm.phone"
                  type="tel" 
                  required
                  placeholder="+1 (555) 123-4567"
                  class="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xs placeholder-gray-500 focus:outline-none focus:border-hotel-gold transition-colors"
                />
              </div>
            </div>

            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full py-3 bg-gradient-to-r from-hotel-gold to-yellow-500 text-hotel-dark font-bold text-sm md:text-base rounded-lg hover:shadow-2xl hover:shadow-hotel-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <SparklesIcon class="h-4 w-4" />
              <span v-if="!isLoading">Confirm Reservation</span>
              <span v-else>Processing...</span>
            </button>
          </form>

          <div v-if="bookingMessage" 
            :class="[
              'mt-3 p-2.5 rounded-lg text-center text-xs font-semibold',
              bookingMessage.type === 'success' ? 'bg-green-900/50 text-green-200 border border-green-700' : 'bg-red-900/50 text-red-200 border border-red-700'
            ]"
          >
            {{ bookingMessage.text }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { siteConfig } from '../config/site.js'

const router = useRouter()
import {
  BuildingOfficeIcon, 
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  CalendarIcon,
  ArrowRightIcon,
  EyeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserIcon
} from '@heroicons/vue/24/outline'
import {
  SparklesIcon,
  HomeModernIcon,
  FireIcon,
  WifiIcon,
  TruckIcon,
  ShieldCheckIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/vue/24/solid'

const { y: scrollY } = useWindowScroll()
const scrolled = ref(false)
const currentHeroImage = ref(0)
const currentTestimonial = ref(0)
const showBookingModal = ref(false)
const isLoading = ref(false)
const bookingMessage = ref(null)

const navLinks = [
  { text: 'Rooms', href: '#rooms' },
  { text: 'Amenities', href: '#amenities' },
  { text: 'Testimonials', href: '#testimonials' },
  { text: 'Contact', href: '#contact' }
]

const heroImages = siteConfig.images.hero

const stats = [
  { value: 500, label: 'Luxury Rooms', suffix: '+' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' },
  { value: 150, label: 'Countries Served', suffix: '+' },
  { value: 25, label: 'Years Experience', suffix: '+' }
]

const amenities = [
  {
    icon: WifiIcon,
    title: 'High-Speed WiFi',
    description: 'Complimentary ultra-fast fiber internet throughout the property'
  },
  {
    icon: FireIcon,
    title: 'Spa & Wellness',
    description: 'Award-winning spa with rejuvenating treatments and therapies'
  },
  {
    icon: HomeModernIcon,
    title: 'Infinity Pool',
    description: 'Stunning rooftop pool with panoramic city views'
  },
  {
    icon: TruckIcon,
    title: 'Valet Parking',
    description: 'Complimentary valet service and secure parking'
  },
  {
    icon: StarIcon,
    title: 'Fine Dining',
    description: 'Michelin-starred restaurants featuring world cuisine'
  },
  {
    icon: ShieldCheckIcon,
    title: '24/7 Concierge',
    description: 'Dedicated staff ready to assist with any request'
  },
  {
    icon: HeartIcon,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with personal trainers'
  },
  {
    icon: SparklesIcon,
    title: 'Event Spaces',
    description: 'Elegant venues for meetings and celebrations'
  }
]

const rooms = [
  {
    name: 'Deluxe King Room',
    description: 'Spacious elegance with contemporary design, featuring a plush king bed and city views',
    price: '399',
    size: '450 sq ft',
    guests: '2 Guests',
    features: ['King Bed', 'City View', 'Marble Bath'],
    image: siteConfig.images.rooms[0],
    premium: false
  },
  {
    name: 'Executive Suite',
    description: 'Elevated luxury with separate living area, premium amenities, and stunning panoramic views',
    price: '699',
    size: '750 sq ft',
    guests: '3 Guests',
    features: ['Living Room', 'Balcony', 'Mini Bar'],
    image: siteConfig.images.rooms[1],
    premium: true
  },
  {
    name: 'Presidential Suite',
    description: 'Ultimate opulence with private terrace, butler service, and bespoke luxury amenities',
    price: '1,999',
    size: '1,500 sq ft',
    guests: '4 Guests',
    features: ['Butler Service', 'Terrace', 'Jacuzzi'],
    image: siteConfig.images.rooms[2],
    premium: true
  }
]

const testimonials = siteConfig.testimonials

const bookingForm = ref({
  checkIn: '',
  checkOut: '',
  roomType: '',
  guests: 2,
  rooms: 1,
  name: '',
  email: '',
  phone: '',
  requests: ''
})

// Component for animated count-up
const CountUp = {
  props: ['end', 'suffix'],
  setup(props) {
    const count = ref(0)
    
    onMounted(() => {
      const duration = 2000
      const steps = 60
      const stepValue = props.end / steps
      const stepDuration = duration / steps
      
      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current >= props.end) {
          count.value = props.end
          clearInterval(timer)
        } else {
          count.value = Math.floor(current)
        }
      }, stepDuration)
    })
    
    return { count }
  },
  template: '<span>{{ count }}{{ suffix }}</span>'
}

// Scroll handler
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Hero image rotation
let heroInterval
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  heroInterval = setInterval(() => {
    currentHeroImage.value = (currentHeroImage.value + 1) % heroImages.length
  }, 5000)
  
  // Initialize AOS
  import('aos').then(AOS => {
    AOS.default.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (heroInterval) clearInterval(heroInterval)
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const selectRoom = (room) => {
  bookingForm.value.roomType = room.name
  showBookingModal.value = true
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length
}

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const handleBooking = async () => {
  isLoading.value = true
  bookingMessage.value = null
  
  // Simulate booking API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isLoading.value = false
  bookingMessage.value = { 
    type: 'success', 
    text: '🎉 Reservation confirmed! Check your email for details.' 
  }
  
  setTimeout(() => {
    showBookingModal.value = false
    bookingMessage.value = null
    bookingForm.value = {
      checkIn: '',
      checkOut: '',
      roomType: '',
      guests: 2,
      rooms: 1,
      name: '',
      email: '',
      phone: '',
      requests: ''
    }
  }, 3000)
}

// Auto-rotate testimonials
setInterval(() => {
  nextTestimonial()
}, 8000)
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animate-float {
  animation: float linear infinite;
}

.animate-shimmer {
  background-size: 2000px 100%;
  animation: shimmer 3s linear infinite;
}

.animate-scale-in {
  animation: scale-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #D4AF37;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c19b2a;
}

/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

