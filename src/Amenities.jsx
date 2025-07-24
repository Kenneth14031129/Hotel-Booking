import { useState } from "react";
import {
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  Coffee,
  Shield,
  Clock,
  Users,
  Briefcase,
  Baby,
  Sparkles,
  Star,
  Check,
  ArrowRight,
  Play,
  Calendar,
  Camera,
  Tv,
  Gift,
  Bath,
  X,
} from "lucide-react";

const Amenities = ({ onNavigate = () => {} }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Amenity categories
  const categories = [
    { id: "all", name: "All Amenities", icon: Sparkles },
    { id: "wellness", name: "Wellness & Spa", icon: Waves },
    { id: "dining", name: "Dining & Bar", icon: Utensils },
    { id: "business", name: "Business & Events", icon: Briefcase },
    { id: "recreation", name: "Recreation", icon: Dumbbell },
    { id: "services", name: "Concierge Services", icon: Coffee },
    { id: "family", name: "Family & Kids", icon: Baby },
    { id: "technology", name: "Technology", icon: Wifi },
  ];

  // Comprehensive amenities data
  const amenities = [
    // Wellness & Spa
    {
      id: 1,
      category: "wellness",
      icon: Waves,
      name: "Luxury Spa & Wellness Center",
      description:
        "State-of-the-art spa facility with premium treatments and relaxation areas",
      features: [
        "Full-service spa",
        "Massage therapy",
        "Facial treatments",
        "Aromatherapy",
        "Relaxation lounges",
      ],
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "6:00 AM - 10:00 PM",
      premium: true,
      rating: 4.9,
    },
    {
      id: 2,
      category: "wellness",
      icon: Bath,
      name: "Infinity Pool & Hot Tub",
      description:
        "Rooftop infinity pool with panoramic city views and therapeutic hot tub",
      features: [
        "Infinity edge pool",
        "Heated hot tub",
        "Poolside service",
        "City views",
        "Poolside bar",
      ],
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "5:00 AM - 11:00 PM",
      premium: true,
      rating: 4.8,
    },
    {
      id: 3,
      category: "recreation",
      icon: Dumbbell,
      name: "Premium Fitness Center",
      description:
        "Fully equipped gym with personal trainers and group fitness classes",
      features: [
        "Latest equipment",
        "Personal trainers",
        "Group classes",
        "Yoga studio",
        "24/7 access",
      ],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "24/7",
      premium: false,
      rating: 4.7,
    },

    // Dining & Bar
    {
      id: 4,
      category: "dining",
      icon: Utensils,
      name: "Michelin Star Restaurant",
      description: "Award-winning fine dining restaurant with celebrity chef",
      features: [
        "Michelin starred",
        "Celebrity chef",
        "Wine sommelier",
        "Private dining",
        "Tasting menus",
      ],
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      hours: "6:00 PM - 11:00 PM",
      premium: true,
      rating: 5.0,
    },
    {
      id: 5,
      category: "dining",
      icon: Coffee,
      name: "Rooftop Sky Bar",
      description:
        "Sophisticated cocktail bar with panoramic views and live entertainment",
      features: [
        "Craft cocktails",
        "Live music",
        "City views",
        "Premium spirits",
        "VIP sections",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "5:00 PM - 2:00 AM",
      premium: true,
      rating: 4.9,
    },
    {
      id: 6,
      category: "dining",
      icon: Coffee,
      name: "24/7 Room Service",
      description: "Round-the-clock gourmet room service with extensive menu",
      features: [
        "24/7 availability",
        "Gourmet menu",
        "In-room dining",
        "Special dietary options",
        "Express service",
      ],
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      hours: "24/7",
      premium: false,
      rating: 4.6,
    },

    // Business & Events
    {
      id: 7,
      category: "business",
      icon: Briefcase,
      name: "Executive Business Center",
      description:
        "Fully equipped business center with meeting rooms and conference facilities",
      features: [
        "Meeting rooms",
        "Conference facilities",
        "Video conferencing",
        "Business services",
        "Executive lounge",
      ],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      hours: "24/7",
      premium: false,
      rating: 4.7,
    },
    {
      id: 8,
      category: "business",
      icon: Users,
      name: "Grand Ballroom",
      description: "Elegant ballroom for weddings, galas, and corporate events",
      features: [
        "Capacity for 500",
        "Wedding packages",
        "Event planning",
        "Catering services",
        "AV equipment",
      ],
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
      hours: "By appointment",
      premium: true,
      rating: 4.8,
    },

    // Technology
    {
      id: 9,
      category: "technology",
      icon: Wifi,
      name: "High-Speed WiFi",
      description: "Complimentary ultra-fast internet throughout the property",
      features: [
        "Fiber optic",
        "Unlimited bandwidth",
        "Property-wide coverage",
        "Business-grade speed",
        "Tech support",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "24/7",
      premium: false,
      rating: 4.9,
    },
    {
      id: 10,
      category: "technology",
      icon: Tv,
      name: "Smart Room Technology",
      description: "AI-powered smart rooms with voice control and automation",
      features: [
        "Voice control",
        "Smart lighting",
        "Climate control",
        "Entertainment system",
        "Mobile app",
      ],
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "24/7",
      premium: true,
      rating: 4.8,
    },

    // Services
    {
      id: 11,
      category: "services",
      icon: Car,
      name: "Luxury Transportation",
      description: "Premium car service and airport transfers",
      features: [
        "Luxury vehicles",
        "Professional chauffeurs",
        "Airport transfers",
        "City tours",
        "On-demand service",
      ],
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "24/7",
      premium: true,
      rating: 4.8,
    },
    {
      id: 12,
      category: "services",
      icon: Shield,
      name: "Personal Concierge",
      description: "Dedicated concierge service for personalized assistance",
      features: [
        "Personal assistance",
        "Reservation services",
        "Local expertise",
        "Special requests",
        "VIP treatment",
      ],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "24/7",
      premium: true,
      rating: 4.9,
    },

    // Family & Kids
    {
      id: 13,
      category: "family",
      icon: Baby,
      name: "Kids Club & Playground",
      description: "Supervised activities and safe play areas for children",
      features: [
        "Supervised activities",
        "Educational programs",
        "Safe play areas",
        "Arts & crafts",
        "Movie nights",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "8:00 AM - 8:00 PM",
      premium: false,
      rating: 4.6,
    },
    {
      id: 14,
      category: "family",
      icon: Gift,
      name: "Babysitting Services",
      description: "Professional childcare services for parents' peace of mind",
      features: [
        "Certified babysitters",
        "Background checked",
        "Flexible hours",
        "In-room service",
        "Activity planning",
      ],
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "On request",
      premium: true,
      rating: 4.7,
    },
  ];

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ];

  // Filter amenities by category
  const filteredAmenities =
    selectedCategory === "all"
      ? amenities
      : amenities.filter((amenity) => amenity.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Hotel Amenities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">World-Class Amenities</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unmatched <span className="text-amber-200">Luxury & Comfort</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Discover a world of exceptional amenities designed to elevate your
              stay and create unforgettable moments of pure indulgence.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-white" />
                <span>Michelin Star Dining</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Waves className="w-5 h-5" />
                <span>Luxury Spa</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Dumbbell className="w-5 h-5" />
                <span>24/7 Fitness</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                <span>Premium Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-lg -mt-8 mx-4 md:mx-8 rounded-2xl relative z-10">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Premium Badge */}
                {amenity.premium && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-white" />
                      <span>Premium</span>
                    </span>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">
                      {amenity.rating}
                    </span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <amenity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {amenity.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {amenity.features.slice(0, 3).map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {amenity.features.length > 3 && (
                    <div className="text-xs text-gray-500 ml-6">
                      +{amenity.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Hours */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{amenity.hours}</span>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center space-x-1">
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Camera className="w-4 h-4" />
              <span className="text-sm font-medium">Visual Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See Our <span className="text-amber-600">Amazing Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our world-class amenities and
              discover why guests choose us for their most memorable
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-96">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`Amenity ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white">Premium Amenities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white">Concierge Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5★</div>
              <div className="text-white">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
