import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import {
  Wifi,
  Car,
  Dumbbell,
  Waves,
  Coffee,
  Shield,
  Clock,
  Baby,
  Sparkles,
  Star,
  Check,
  Tv,
  Gift,
  Bath,
} from "lucide-react";

const Amenities = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  // Amenity categories
  const categories = [
    { id: "all", name: "All Amenities", icon: Sparkles },
    { id: "wellness", name: "Wellness & Spa", icon: Waves },
    { id: "recreation", name: "Recreation", icon: Dumbbell },
    { id: "family", name: "Family & Kids", icon: Baby },
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
      premium: true,
      rating: 4.7,
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
      premium: true,
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

  // Filter amenities by category
  const filteredAmenities =
    selectedCategory === "all"
      ? amenities
      : amenities.filter((amenity) => amenity.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
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
        <div className="grid gap-6 grid-cols-1">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex"
            >
              {/* Amenity Image */}
              <div className="w-80 flex-shrink-0 relative overflow-hidden">
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

                {/* Hours Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{amenity.hours}</span>
                  </span>
                </div>
              </div>

              {/* Amenity Details */}
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <amenity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {amenity.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {amenity.category.charAt(0).toUpperCase() +
                          amenity.category.slice(1)}{" "}
                        •
                        {amenity.premium
                          ? " Premium Service"
                          : " Standard Service"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {amenity.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {amenity.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {amenity.features.slice(0, 4).map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs"
                    >
                      <Check className="w-3 h-3 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {amenity.features.length > 4 && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      +{amenity.features.length - 4} more
                    </span>
                  )}
                </div>

                {/* Hours and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Available: {amenity.hours}</span>
                  </div>

                  <div className="flex space-x-2">
                    {amenity.premium && (
                      <button
                        onClick={() =>
                          navigate(
                            `/booking-amenities?amenityId=${amenity.id}&amenityName=${amenity.name}&category=${amenity.category}&price=150`
                          )
                        }
                        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                      >
                        Book Service
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
