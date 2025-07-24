import { useState } from "react";
import {
  Calendar,
  Users,
  Heart,
  Briefcase,
  Music,
  Camera,
  Utensils,
  Star,
  Clock,
  MapPin,
  Phone,
  Check,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Gift,
  Sparkles,
  Crown,
  Award,
  Mic,
  PartyPopper,
  Building,
  Flower2,
  ChefHat,
  Shield,
  Zap,
} from "lucide-react";

const Events = ({ onNavigate = () => {} }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  // Event categories
  const categories = [
    { id: "all", name: "All Events", icon: Sparkles },
    { id: "weddings", name: "Weddings", icon: Heart },
    { id: "corporate", name: "Corporate", icon: Briefcase },
    { id: "social", name: "Social Events", icon: PartyPopper },
    { id: "meetings", name: "Meetings", icon: Building },
  ];

  // Comprehensive events data
  const events = [
    {
      id: 1,
      category: "weddings",
      name: "Luxury Wedding Packages",
      subtitle: "Create Your Perfect Day",
      description:
        "Transform your special day into an unforgettable celebration with our comprehensive wedding packages, featuring world-class venues, gourmet catering, and dedicated wedding planning services.",
      capacity: { min: 50, max: 500 },
      duration: "Full Day",
      priceRange: "$15,000 - $75,000",
      features: [
        "Dedicated Wedding Planner",
        "Bridal Suite Preparation",
        "Ceremony & Reception Venues",
        "Gourmet Catering & Bar",
        "Floral Arrangements",
        "Photography & Videography",
        "Live Entertainment Options",
        "Honeymoon Suite Included",
      ],
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      ],
      venues: ["Grand Ballroom", "Garden Terrace", "Rooftop Sky Deck"],
      inclusions: [
        "Planning & Coordination",
        "Catering & Service",
        "Decor & Flowers",
        "Entertainment",
      ],
      rating: 4.9,
      reviews: 156,
      premium: true,
    },
    {
      id: 2,
      category: "corporate",
      name: "Corporate Conferences",
      subtitle: "Professional Excellence",
      description:
        "Host successful corporate events with our state-of-the-art facilities, advanced technology, and professional event management services designed for business success.",
      capacity: { min: 20, max: 1000 },
      duration: "1-5 Days",
      priceRange: "$5,000 - $50,000",
      features: [
        "Executive Meeting Rooms",
        "Advanced AV Technology",
        "High-Speed WiFi",
        "Business Center Access",
        "Catering Services",
        "Dedicated Event Manager",
        "Breakout Spaces",
        "Networking Areas",
      ],
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
      ],
      venues: ["Executive Conference Center", "Boardroom Suites", "Auditorium"],
      inclusions: ["AV Equipment", "Tech Support", "Catering", "Materials"],
      rating: 4.8,
      reviews: 234,
      premium: false,
    },
    {
      id: 3,
      category: "social",
      name: "Milestone Celebrations",
      subtitle: "Memorable Moments",
      description:
        "Celebrate life's special moments with elegance and style. From intimate anniversaries to grand birthday celebrations, we create unforgettable experiences.",
      capacity: { min: 10, max: 300 },
      duration: "4-8 Hours",
      priceRange: "$3,000 - $25,000",
      features: [
        "Custom Event Design",
        "Personalized Menus",
        "Entertainment Options",
        "Photography Services",
        "Specialized Decor",
        "Cake & Dessert Station",
        "Bar Service",
        "Gift & Favor Coordination",
      ],
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
      ],
      venues: ["Intimate Dining Rooms", "Terrace Gardens", "Private Lounges"],
      inclusions: ["Event Planning", "Catering", "Decor", "Service Staff"],
      rating: 4.7,
      reviews: 189,
      premium: false,
    },
    {
      id: 4,
      category: "meetings",
      name: "Executive Meetings",
      subtitle: "Business Excellence",
      description:
        "Conduct important business meetings in sophisticated settings with premium amenities and personalized service for executive-level discussions.",
      capacity: { min: 6, max: 50 },
      duration: "2-8 Hours",
      priceRange: "$500 - $5,000",
      features: [
        "Private Boardrooms",
        "Executive Amenities",
        "Concierge Service",
        "Premium Catering",
        "Secure Facilities",
        "Business Support",
        "Flexible Scheduling",
        "VIP Treatment",
      ],
      images: [
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
      ],
      venues: ["Executive Boardrooms", "Private Suites", "VIP Lounges"],
      inclusions: ["Room Setup", "AV Support", "Refreshments", "Concierge"],
      rating: 4.9,
      reviews: 87,
      premium: true,
    },
    {
      id: 5,
      category: "social",
      name: "Gala Dinners",
      subtitle: "Elegant Affairs",
      description:
        "Host sophisticated gala dinners and fundraising events in our grand ballroom with full-service event coordination and premium amenities.",
      capacity: { min: 100, max: 600 },
      duration: "5-7 Hours",
      priceRange: "$20,000 - $100,000",
      features: [
        "Grand Ballroom Access",
        "Multi-Course Dining",
        "Live Entertainment",
        "Professional Lighting",
        "Red Carpet Service",
        "VIP Reception Area",
        "Award Ceremonies",
        "After-Party Options",
      ],
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      ],
      venues: ["Grand Ballroom", "VIP Reception Hall", "Sky Terrace"],
      inclusions: [
        "Event Management",
        "Fine Dining",
        "Entertainment",
        "Photography",
      ],
      rating: 4.9,
      reviews: 112,
      premium: true,
    },
    {
      id: 6,
      category: "corporate",
      name: "Product Launches",
      subtitle: "Make an Impact",
      description:
        "Launch your products with style and impact using our modern venues, cutting-edge technology, and comprehensive event management services.",
      capacity: { min: 50, max: 400 },
      duration: "3-6 Hours",
      priceRange: "$8,000 - $35,000",
      features: [
        "Modern Presentation Spaces",
        "Advanced AV Systems",
        "Live Streaming Capability",
        "Interactive Displays",
        "Media Support",
        "Networking Reception",
        "Product Showcase Areas",
        "Photography & Video",
      ],
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      venues: ["Innovation Center", "Modern Auditorium", "Exhibition Hall"],
      inclusions: ["Tech Setup", "Media Support", "Catering", "Coordination"],
      rating: 4.8,
      reviews: 95,
      premium: false,
    },
  ];

  // Event packages
  const packages = [
    {
      id: 1,
      name: "Platinum Package",
      description: "The ultimate luxury event experience with premium services",
      price: "Starting at $25,000",
      features: [
        "Dedicated Event Manager",
        "Premium Venue Access",
        "Gourmet Catering",
        "Professional Photography",
        "Live Entertainment",
        "Floral Arrangements",
        "VIP Services",
        "Complimentary Suite",
      ],
      popular: true,
    },
    {
      id: 2,
      name: "Gold Package",
      description: "Comprehensive event solution with excellent amenities",
      price: "Starting at $15,000",
      features: [
        "Event Coordination",
        "Venue Decoration",
        "Full Catering Service",
        "Basic Photography",
        "Sound System",
        "Table Settings",
        "Service Staff",
        "Planning Support",
      ],
      popular: false,
    },
    {
      id: 3,
      name: "Silver Package",
      description: "Essential event services for intimate gatherings",
      price: "Starting at $8,000",
      features: [
        "Venue Rental",
        "Basic Catering",
        "Setup Service",
        "Standard Decor",
        "Audio Equipment",
        "Service Staff",
        "Cleanup Service",
        "Event Coordination",
      ],
      popular: false,
    },
  ];

  // Filter events by category
  const filteredEvents =
    activeCategory === "all"
      ? events
      : events.filter((event) => event.category === activeCategory);

  const handleImageNavigation = (direction) => {
    if (!selectedEvent) return;

    const images = selectedEvent.images;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80"
            alt="Luxury Hotel Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-medium">
                Luxury Event Experiences
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unforgettable <span className="text-amber-200">Events</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              From intimate gatherings to grand celebrations, create
              extraordinary memories with our world-class venues, exceptional
              service, and attention to every detail.
            </p>

            {/* Event Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>1000+ Events Hosted</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>Award-Winning Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-white" />
                <span>4.9★ Average Rating</span>
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
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
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

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.images[0]}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Premium Badge */}
                {event.premium && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>Premium</span>
                    </span>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{event.rating}</span>
                  </div>
                </div>

                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {event.name}
                    </h3>
                    <p className="text-amber-600 font-medium text-sm">
                      {event.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      {event.priceRange}
                    </div>
                    <div className="text-xs text-gray-500">
                      ({event.reviews} reviews)
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Info */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>
                      {event.capacity.min}-{event.capacity.max} guests
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.duration}</span>
                  </div>
                </div>

                {/* Venues */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.venues.slice(0, 2).map((venue, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {venue}
                    </span>
                  ))}
                  {event.venues.length > 2 && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      +{event.venues.length - 2} venues
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-amber-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                    Request Quote
                  </button>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Event Packages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect{" "}
              <span className="text-amber-600">Package</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from our carefully crafted event packages designed to meet
              every need and budget, from intimate gatherings to grand
              celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular ? "ring-2 ring-amber-500" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-4 py-1 rounded-b-lg text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold text-amber-600">
                      {pkg.price}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? "bg-amber-600 text-white hover:bg-amber-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedEvent.name}
                </h2>
                <p className="text-amber-600">{selectedEvent.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="h-96 overflow-hidden">
                <img
                  src={selectedEvent.images[currentImageIndex]}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedEvent.images.length > 1 && (
                <>
                  <button
                    onClick={() => handleImageNavigation("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleImageNavigation("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedEvent.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Event Details Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  {/* Event Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">
                        {selectedEvent.capacity.min}-
                        {selectedEvent.capacity.max}
                      </div>
                      <div className="text-xs text-gray-600">Guests</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">
                        {selectedEvent.duration}
                      </div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Star className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">
                        {selectedEvent.rating}
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Award className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">
                        {selectedEvent.reviews}
                      </div>
                      <div className="text-xs text-gray-600">Reviews</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Event Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {selectedEvent.description}
                    </p>
                  </div>

                  {/* Available Venues */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Available Venues
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedEvent.venues.map((venue, index) => (
                        <div
                          key={index}
                          className="p-4 bg-amber-50 rounded-lg border border-amber-200"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-4 h-4 text-amber-600" />
                            <h4 className="font-medium text-gray-900">
                              {venue}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600">
                            Premium venue space
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features & Services */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Included Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedEvent.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Package Inclusions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Package Inclusions
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedEvent.inclusions.map((inclusion, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            {inclusion === "Planning & Coordination" && (
                              <Calendar className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Catering & Service" && (
                              <Utensils className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Decor & Flowers" && (
                              <Flower2 className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Entertainment" && (
                              <Music className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "AV Equipment" && (
                              <Mic className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Tech Support" && (
                              <Zap className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Event Management" && (
                              <Briefcase className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Photography" && (
                              <Camera className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Event Planning" && (
                              <Calendar className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Fine Dining" && (
                              <ChefHat className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Catering" && (
                              <Utensils className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Coordination" && (
                              <Users className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Materials" && (
                              <Gift className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Room Setup" && (
                              <Building className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "AV Support" && (
                              <Mic className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Refreshments" && (
                              <Coffee className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Concierge" && (
                              <Shield className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Decor" && (
                              <Sparkles className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Service Staff" && (
                              <Users className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Media Support" && (
                              <Camera className="w-6 h-6 text-white" />
                            )}
                            {inclusion === "Tech Setup" && (
                              <Zap className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <h4 className="font-medium text-gray-900 text-sm">
                            {inclusion}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inquiry Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6 bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Request Information
                    </h3>

                    {/* Event Info */}
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Capacity:</span>
                        <span className="font-medium">
                          {selectedEvent.capacity.min}-
                          {selectedEvent.capacity.max} guests
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">
                          {selectedEvent.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price Range:</span>
                        <span className="font-medium text-amber-600">
                          {selectedEvent.priceRange}
                        </span>
                      </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expected Guests
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                          <option>10-50 guests</option>
                          <option>50-100 guests</option>
                          <option>100-200 guests</option>
                          <option>200-500 guests</option>
                          <option>500+ guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Type
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                          <option>Wedding</option>
                          <option>Corporate Event</option>
                          <option>Social Celebration</option>
                          <option>Business Meeting</option>
                          <option>Conference</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                          <option>$5,000 - $15,000</option>
                          <option>$15,000 - $30,000</option>
                          <option>$30,000 - $50,000</option>
                          <option>$50,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                        Request Quote
                      </button>
                      <button className="w-full bg-white text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call Event Planner</span>
                      </button>
                      <button className="w-full bg-white text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Schedule Tour</span>
                      </button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Free consultation & planning</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Dedicated event manager</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Flexible payment options</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Venues Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full mb-6">
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Venues</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Spectacular <span className="text-amber-400">Event Spaces</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of stunning venues, each designed to
              create the perfect atmosphere for your special occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Grand Ballroom</h3>
              <p className="text-gray-300">
                Elegant 10,000 sq ft ballroom accommodating up to 500 guests
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Garden Terrace</h3>
              <p className="text-gray-300">
                Beautiful outdoor space with city views for intimate
                celebrations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Executive Center</h3>
              <p className="text-gray-300">
                State-of-the-art business facilities for corporate events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Planning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Planning Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple <span className="text-amber-600">Planning Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced event planning team makes organizing your event
              effortless with our proven step-by-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description:
                  "Discuss your vision, requirements, and budget with our event specialists",
                icon: Users,
              },
              {
                step: "02",
                title: "Venue Selection",
                description:
                  "Choose the perfect space from our collection of premium venues",
                icon: MapPin,
              },
              {
                step: "03",
                title: "Planning & Design",
                description:
                  "Work with our team to design every detail of your perfect event",
                icon: Sparkles,
              },
              {
                step: "04",
                title: "Event Execution",
                description:
                  "Relax and enjoy while we handle every aspect of your special day",
                icon: Star,
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
