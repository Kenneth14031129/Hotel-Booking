import { useState } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import {
  Utensils,
  Wine,
  Clock,
  Star,
  Phone,
  Calendar,
  MapPin,
  Award,
  Users,
  ChefHat,
  Globe,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  Crown,
  Gift,
} from "lucide-react";

const Dining = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeTab, setActiveTab] = useState("restaurants");

  // Restaurants data
  const restaurants = [
    {
      id: 1,
      name: "Lumière",
      type: "Fine Dining",
      cuisine: "French Contemporary",
      description:
        "Award-winning fine dining restaurant featuring innovative French cuisine with a modern twist, helmed by Michelin-starred Chef Antoine Dubois.",
      chef: "Chef Antoine Dubois",
      rating: 5.0,
      reviews: 342,
      priceRange: "$$$$$",
      michelin: 2,
      awards: ["Michelin 2 Stars", "James Beard Award", "World's 50 Best"],
      images: [
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      ],
      hours: {
        dinner: "6:00 PM - 11:00 PM",
        closed: "Sunday & Monday",
      },
      features: [
        "Michelin 2-Star Restaurant",
        "Celebrity Chef Experience",
        "Wine Pairing Menu",
        "Private Dining Room",
        "Seasonal Tasting Menu",
        "Sommelier Service",
      ],
      atmosphere: "Elegant & Intimate",
      dressCode: "Formal",
      reservationRequired: true,
      specialties: [
        "Foie Gras Terrine",
        "Wagyu Beef Wellington",
        "Chocolate Soufflé",
      ],
      location: "22nd Floor - Penthouse Level",
    },
    {
      id: 2,
      name: "Sakura Sushi",
      type: "Japanese",
      cuisine: "Authentic Sushi & Sashimi",
      description:
        "Traditional Japanese sushi restaurant with an authentic omakase experience, featuring the freshest fish flown in daily from Tokyo's Tsukiji Market.",
      chef: "Chef Hiroshi Tanaka",
      rating: 4.9,
      reviews: 287,
      priceRange: "$$$$",
      michelin: 1,
      awards: ["Michelin 1 Star", "Best Sushi NYC", "Zagat Rated"],
      images: [
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      ],
      hours: {
        lunch: "12:00 PM - 3:00 PM",
        dinner: "6:00 PM - 10:30 PM",
        closed: "Tuesday",
      },
      features: [
        "Omakase Experience",
        "Fresh Daily Import",
        "Sake Pairing",
        "Sushi Counter Seating",
        "Traditional Preparation",
        "Expert Sushi Masters",
      ],
      atmosphere: "Authentic & Zen",
      dressCode: "Smart Casual",
      reservationRequired: true,
      specialties: ["Omakase Tasting", "Otoro Sashimi", "Uni Hand Roll"],
      location: "5th Floor - East Wing",
    },
    {
      id: 3,
      name: "Terrace Bistro",
      type: "Casual Fine Dining",
      cuisine: "Mediterranean",
      description:
        "Relaxed Mediterranean dining with stunning city views, featuring fresh seafood, grilled meats, and an extensive wine collection from renowned vineyards.",
      chef: "Chef Sofia Rossi",
      rating: 4.8,
      reviews: 456,
      priceRange: "$$$",
      michelin: 0,
      awards: [
        "Wine Spectator Award",
        "Best View Restaurant",
        "OpenTable Choice",
      ],
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      ],
      hours: {
        breakfast: "7:00 AM - 11:00 AM",
        lunch: "12:00 PM - 4:00 PM",
        dinner: "6:00 PM - 11:00 PM",
      },
      features: [
        "Outdoor Terrace Dining",
        "City Skyline Views",
        "Fresh Mediterranean Cuisine",
        "Extensive Wine List",
        "Live Music Fridays",
        "All-Day Dining",
      ],
      atmosphere: "Relaxed & Scenic",
      dressCode: "Casual",
      reservationRequired: false,
      specialties: ["Grilled Branzino", "Lamb Souvlaki", "Baklava"],
      location: "15th Floor - Terrace Level",
    },
    {
      id: 4,
      name: "The Lobby Lounge",
      type: "Café & Light Bites",
      cuisine: "International",
      description:
        "Elegant lobby café serving artisanal coffee, pastries, and light meals throughout the day in a sophisticated setting with live piano music.",
      chef: "Chef Michael Brown",
      rating: 4.6,
      reviews: 523,
      priceRange: "$$",
      michelin: 0,
      awards: ["Best Hotel Café", "Coffee Excellence Award"],
      images: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      hours: {
        allDay: "6:00 AM - 12:00 AM",
      },
      features: [
        "Artisanal Coffee",
        "Fresh Pastries",
        "Live Piano Music",
        "Business-Friendly",
        "All-Day Service",
        "Grab & Go Options",
      ],
      atmosphere: "Sophisticated & Comfortable",
      dressCode: "Casual",
      reservationRequired: false,
      specialties: [
        "Truffle Croissant",
        "Signature Coffee Blends",
        "Afternoon Tea",
      ],
      location: "Ground Floor - Main Lobby",
    },
  ];

  // Bars data
  const bars = [
    {
      id: 1,
      name: "Sky Lounge",
      type: "Rooftop Bar",
      specialty: "Craft Cocktails & City Views",
      description:
        "Sophisticated rooftop bar offering handcrafted cocktails, premium spirits, and breathtaking 360-degree city views with live DJ entertainment.",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      hours: "5:00 PM - 2:00 AM",
      features: [
        "360° City Views",
        "Live DJ",
        "Craft Cocktails",
        "VIP Sections",
        "Outdoor Terrace",
      ],
      location: "21st Floor - Rooftop",
    },
    {
      id: 2,
      name: "Wine Cellar",
      type: "Wine Bar",
      specialty: "Premium Wines & Champagne",
      description:
        "Intimate wine cellar featuring an extensive collection of rare vintages, champagnes, and wine tastings led by certified sommeliers.",
      images: [
        "https://images.unsplash.com/photo-1560148408-2d4b1b0aaca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      hours: "4:00 PM - 12:00 AM",
      features: [
        "Rare Vintages",
        "Sommelier Service",
        "Wine Tastings",
        "Cheese Pairings",
        "Private Events",
      ],
      location: "Basement Level - Wine Cellar",
    },
  ];

  // Special dining experiences
  const experiences = [
    {
      id: 1,
      name: "Chef's Table Experience",
      description:
        "Exclusive dining experience with the chef, featuring a personalized tasting menu",
      price: "$350 per person",
      duration: "3 hours",
      maxGuests: 8,
      features: [
        "Meet the Chef",
        "Personalized Menu",
        "Wine Pairing",
        "Kitchen Tour",
      ],
    },
    {
      id: 2,
      name: "Private Dining Room",
      description:
        "Elegant private dining space perfect for special occasions and business meetings",
      price: "$200 per person (min 6)",
      duration: "2-4 hours",
      maxGuests: 20,
      features: [
        "Private Space",
        "Dedicated Staff",
        "Custom Menu",
        "AV Equipment",
      ],
    },
    {
      id: 3,
      name: "Wine Tasting Dinner",
      description:
        "Curated wine dinner featuring rare vintages paired with seasonal dishes",
      price: "$275 per person",
      duration: "2.5 hours",
      maxGuests: 16,
      features: [
        "Rare Wines",
        "Sommelier Guided",
        "Multi-Course",
        "Educational",
      ],
    },
  ];

  const handleImageNavigation = (direction) => {
    if (!selectedRestaurant) return;

    const images = selectedRestaurant.images;
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
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
            alt="Fine Dining Restaurant"
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
              <span className="text-sm font-medium">Michelin Star Dining</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Culinary <span className="text-amber-200">Excellence</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Embark on a gastronomic journey through our world-class
              restaurants, where every dish tells a story of passion,
              creativity, and culinary mastery.
            </p>

            {/* Awards Showcase */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-white" />
                <span>2 Michelin Stars</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>James Beard Award</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="w-5 h-5" />
                <span>World's 50 Best</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg -mt-8 mx-4 md:mx-8 rounded-2xl relative z-10">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab("restaurants")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "restaurants"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Restaurants</span>
            </button>
            <button
              onClick={() => setActiveTab("bars")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "bars"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>Bars & Lounges</span>
            </button>
            <button
              onClick={() => setActiveTab("experiences")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "experiences"
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Special Experiences</span>
            </button>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      {activeTab === "restaurants" && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={restaurant.images[0]}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Michelin Stars */}
                  {restaurant.michelin > 0 && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        {[...Array(restaurant.michelin)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-white" />
                        ))}
                        <span>Michelin</span>
                      </div>
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">
                        {restaurant.rating}
                      </span>
                    </div>
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedRestaurant(restaurant)}
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
                        {restaurant.name}
                      </h3>
                      <p className="text-amber-600 font-medium text-sm">
                        {restaurant.cuisine}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {restaurant.priceRange}
                      </div>
                      <div className="text-xs text-gray-500">
                        ({restaurant.reviews} reviews)
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {restaurant.description}
                  </p>

                  {/* Chef */}
                  <div className="flex items-center space-x-2 mb-4">
                    <ChefHat className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-gray-700">
                      {restaurant.chef}
                    </span>
                  </div>

                  {/* Quick Info */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>
                        {restaurant.hours.dinner || restaurant.hours.allDay}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.location}</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.specialties
                      .slice(0, 2)
                      .map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    {restaurant.specialties.length > 2 && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        +{restaurant.specialties.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-amber-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                      Reserve Table
                    </button>
                    <button
                      onClick={() => setSelectedRestaurant(restaurant)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                      Menu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bars Section */}
      {activeTab === "bars" && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bars.map((bar) => (
              <div
                key={bar.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={bar.images[0]}
                    alt={bar.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{bar.name}</h3>
                      <p className="text-sm text-gray-200">{bar.specialty}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{bar.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{bar.hours}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{bar.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {bar.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-amber-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                    Reserve Table
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Special Experiences Section */}
      {activeTab === "experiences" && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {experience.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {experience.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-amber-600">
                      {experience.price}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{experience.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Max Guests:</span>
                    <span className="font-medium">{experience.maxGuests}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {experience.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                  Book Experience
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedRestaurant.name}
                </h2>
                <p className="text-amber-600">{selectedRestaurant.cuisine}</p>
              </div>
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="h-96 overflow-hidden">
                <img
                  src={selectedRestaurant.images[currentImageIndex]}
                  alt={selectedRestaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedRestaurant.images.length > 1 && (
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
                    {selectedRestaurant.images.map((_, index) => (
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

            {/* Restaurant Details Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  {/* Awards & Recognition */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedRestaurant.awards.map((award, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1"
                      >
                        <Award className="w-3 h-3" />
                        <span>{award}</span>
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      About the Restaurant
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {selectedRestaurant.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Star className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">
                          {selectedRestaurant.rating}
                        </div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">
                          {selectedRestaurant.reviews}
                        </div>
                        <div className="text-xs text-gray-600">Reviews</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Crown className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">
                          {selectedRestaurant.michelin}★
                        </div>
                        <div className="text-xs text-gray-600">Michelin</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Globe className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">
                          {selectedRestaurant.priceRange}
                        </div>
                        <div className="text-xs text-gray-600">Price Range</div>
                      </div>
                    </div>
                  </div>

                  {/* Chef Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Meet the Chef
                    </h3>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                        <ChefHat className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {selectedRestaurant.chef}
                        </h4>
                        <p className="text-gray-600 text-sm">Executive Chef</p>
                        <p className="text-gray-600 text-sm">
                          Award-winning culinary artist with 15+ years
                          experience
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features & Amenities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Restaurant Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedRestaurant.features.map((feature, index) => (
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

                  {/* Signature Dishes */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Signature Dishes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedRestaurant.specialties.map((dish, index) => (
                        <div
                          key={index}
                          className="p-4 bg-amber-50 rounded-lg border border-amber-200"
                        >
                          <h4 className="font-medium text-gray-900 mb-2">
                            {dish}
                          </h4>
                          <p className="text-sm text-gray-600">
                            Chef's recommended specialty
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reservation Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6 bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Make a Reservation
                    </h3>

                    {/* Restaurant Info */}
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <div>
                          <div className="font-medium">Dinner Hours</div>
                          <div className="text-gray-600">
                            {selectedRestaurant.hours.dinner ||
                              selectedRestaurant.hours.allDay}
                          </div>
                        </div>
                      </div>
                      {selectedRestaurant.hours.lunch && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <div>
                            <div className="font-medium">Lunch Hours</div>
                            <div className="text-gray-600">
                              {selectedRestaurant.hours.lunch}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-600" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-gray-600">
                            {selectedRestaurant.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reservation Form */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                          <option>6:00 PM</option>
                          <option>6:30 PM</option>
                          <option>7:00 PM</option>
                          <option>7:30 PM</option>
                          <option>8:00 PM</option>
                          <option>8:30 PM</option>
                          <option>9:00 PM</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Party Size
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                          <option>2 People</option>
                          <option>3 People</option>
                          <option>4 People</option>
                          <option>5 People</option>
                          <option>6+ People</option>
                        </select>
                      </div>
                    </div>

                    {/* Reservation Requirements */}
                    {selectedRestaurant.reservationRequired && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
                        <div className="flex items-start space-x-2">
                          <Calendar className="w-4 h-4 text-amber-600 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium text-amber-800">
                              Reservation Required
                            </div>
                            <div className="text-amber-700">
                              Please book in advance. Dress code:{" "}
                              {selectedRestaurant.dressCode}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                        Reserve Table
                      </button>
                      <button className="w-full bg-white text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call Restaurant</span>
                      </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Free cancellation until 2h before</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Instant confirmation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Special dietary requests accommodated</span>
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

      {/* Featured Chef Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <ChefHat className="w-4 h-4" />
                <span className="text-sm font-medium">Master Chef</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Chef <span className="text-amber-600">Antoine Dubois</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 20 years of culinary excellence, Chef Antoine brings
                his Michelin-starred expertise to create unforgettable dining
                experiences. His innovative approach to French cuisine has
                earned international acclaim and numerous awards.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    20+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    15
                  </div>
                  <div className="text-gray-600">International Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    2
                  </div>
                  <div className="text-gray-600">Michelin Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-600">Happy Diners</div>
                </div>
              </div>

              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Chef's Table Experience
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583394293214-28a1d8ea2dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Chef Antoine Dubois"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="w-8 h-8 text-amber-600 fill-current" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Michelin Guide
                    </div>
                    <div className="text-sm text-gray-600">
                      "Exceptional cuisine worth the journey"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Collection Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full mb-6">
              <Wine className="w-4 h-4" />
              <span className="text-sm font-medium">Wine Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              World-Class{" "}
              <span className="text-amber-400">Wine Collection</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our carefully curated selection of over 2,000 wines from
              the world's finest vineyards, guided by our certified sommeliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wine className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Selection</h3>
              <p className="text-gray-300">
                Over 2,000 carefully selected wines from renowned vineyards
                worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Sommeliers</h3>
              <p className="text-gray-300">
                Certified wine experts to guide you through perfect pairings
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Wine Spectator Award
              </h3>
              <p className="text-gray-300">
                Recognized with Wine Spectator's Award of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pb-56.25 h-0 rounded-xl overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Chef's Story - Culinary Excellence"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Dining;
