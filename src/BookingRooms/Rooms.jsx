import { useState } from "react";
import {
  Search,
  Users,
  Bed,
  Wifi,
  Car,
  Utensils,
  Waves,
  Star,
  Heart,
  Eye,
  Calendar,
  Square,
  Coffee,
  Tv,
  Wind,
  Shield,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Check,
  Grid,
  List,
  SlidersHorizontal,
} from "lucide-react";

const Rooms = ({ onNavigate = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [0, 2000],
    roomType: "all",
    amenities: [],
    guests: "all",
    bedType: "all",
  });
  const [sortBy, setSortBy] = useState("price-low");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  // Complete rooms data
  const allRooms = [
    {
      id: 1,
      name: "Deluxe King Room",
      type: "deluxe",
      price: 299,
      originalPrice: 350,
      size: 32,
      maxGuests: 2,
      bedType: "King Bed",
      view: "City View",
      floor: "5-12",
      rating: 4.8,
      reviews: 245,
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Tv, name: '55" Smart TV' },
        { icon: Wind, name: "Air Conditioning" },
        { icon: Coffee, name: "Coffee Machine" },
        { icon: Car, name: "Valet Parking" },
        { icon: Shield, name: "Safe" },
      ],
      features: [
        "Marble bathroom with rain shower",
        "Premium bedding and pillows",
        "Work desk with ergonomic chair",
        "Mini-bar and snack selection",
        "24/7 room service",
        "Daily housekeeping",
      ],
      description:
        "Elegantly appointed room featuring contemporary design with luxury amenities. Perfect for business travelers and couples seeking comfort and style.",
      availability: "Available",
    },
    {
      id: 2,
      name: "Executive Suite",
      type: "suite",
      price: 599,
      originalPrice: 699,
      size: 65,
      maxGuests: 4,
      bedType: "King + Sofa Bed",
      view: "Ocean View",
      floor: "8-15",
      rating: 4.9,
      reviews: 189,
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Tv, name: '65" Smart TV' },
        { icon: Wind, name: "Climate Control" },
        { icon: Coffee, name: "Espresso Machine" },
        { icon: Waves, name: "Jacuzzi" },
        { icon: Utensils, name: "Butler Service" },
      ],
      features: [
        "Separate living area with dining table",
        "Panoramic ocean views",
        "Marble bathroom with jacuzzi",
        "Personal butler service",
        "Premium welcome amenities",
        "Express check-in/out",
      ],
      description:
        "Spacious suite with separate living area, perfect for extended stays and entertaining. Enjoy breathtaking ocean views and personalized service.",
      availability: "Limited",
    },
    {
      id: 3,
      name: "Presidential Suite",
      type: "presidential",
      price: 1299,
      originalPrice: 1499,
      size: 120,
      maxGuests: 6,
      bedType: "King + Queen",
      view: "Panoramic City & Ocean",
      floor: "16-20",
      rating: 5.0,
      reviews: 67,
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      amenities: [
        { icon: Wifi, name: "Premium WiFi" },
        { icon: Tv, name: '85" OLED TV' },
        { icon: Wind, name: "Smart Climate" },
        { icon: Coffee, name: "Personal Chef" },
        { icon: Waves, name: "Private Spa" },
        { icon: Car, name: "Limo Service" },
      ],
      features: [
        "Private terrace with city views",
        "Full kitchen and dining room",
        "Master bedroom with walk-in closet",
        "Private spa with sauna",
        "Personal chef and concierge",
        "Helicopter landing access",
      ],
      description:
        "The ultimate luxury experience with unparalleled amenities and services. Perfect for VIPs, celebrities, and special occasions.",
      availability: "Available",
    },
    {
      id: 4,
      name: "Superior Double Room",
      type: "superior",
      price: 199,
      originalPrice: 249,
      size: 28,
      maxGuests: 2,
      bedType: "Double Bed",
      view: "Garden View",
      floor: "3-8",
      rating: 4.6,
      reviews: 312,
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Tv, name: '42" Smart TV' },
        { icon: Wind, name: "Air Conditioning" },
        { icon: Coffee, name: "Tea/Coffee" },
        { icon: Shield, name: "In-room Safe" },
        { icon: Car, name: "Parking" },
      ],
      features: [
        "Comfortable double bed",
        "Garden courtyard views",
        "Modern bathroom with shower",
        "Work area with high-speed internet",
        "Mini-fridge and snacks",
        "Daily housekeeping",
      ],
      description:
        "Comfortable and well-appointed room perfect for leisure travelers. Enjoy peaceful garden views and modern amenities.",
      availability: "Available",
    },
    {
      id: 5,
      name: "Family Suite",
      type: "family",
      price: 799,
      originalPrice: 899,
      size: 85,
      maxGuests: 6,
      bedType: "King + 2 Singles",
      view: "City & Pool View",
      floor: "6-12",
      rating: 4.7,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Tv, name: "2x Smart TVs" },
        { icon: Wind, name: "Climate Control" },
        { icon: Coffee, name: "Kitchenette" },
        { icon: Waves, name: "Pool Access" },
        { icon: Shield, name: "Child Safety" },
      ],
      features: [
        "Separate children's room",
        "Kitchenette with microwave",
        "Two full bathrooms",
        "Kids' entertainment center",
        "Pool and playground access",
        "Family concierge service",
      ],
      description:
        "Spacious family-friendly suite designed for comfort and convenience. Perfect for families with children of all ages.",
      availability: "Available",
    },
    {
      id: 6,
      name: "Penthouse Suite",
      type: "penthouse",
      price: 2299,
      originalPrice: 2599,
      size: 200,
      maxGuests: 8,
      bedType: "2 Kings + 2 Queens",
      view: "360° Panoramic",
      floor: "21-22",
      rating: 5.0,
      reviews: 23,
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      amenities: [
        { icon: Wifi, name: "Ultra-Fast WiFi" },
        { icon: Tv, name: "Home Theater" },
        { icon: Wind, name: "Smart Home" },
        { icon: Coffee, name: "Full Kitchen" },
        { icon: Waves, name: "Private Pool" },
        { icon: Car, name: "Private Garage" },
      ],
      features: [
        "Private rooftop terrace with pool",
        "Full gourmet kitchen",
        "Home theater system",
        "Private elevator access",
        "Personal staff quarters",
        "Helicopter pad access",
      ],
      description:
        "The ultimate luxury penthouse experience with unmatched privacy and amenities. Reserved for the most discerning guests.",
      availability: "Limited",
    },
  ];

  // Filter rooms based on search and filters
  const filteredRooms = allRooms.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      room.price >= selectedFilters.priceRange[0] &&
      room.price <= selectedFilters.priceRange[1];

    const matchesType =
      selectedFilters.roomType === "all" ||
      room.type === selectedFilters.roomType;

    const matchesGuests =
      selectedFilters.guests === "all" ||
      room.maxGuests >= parseInt(selectedFilters.guests);

    const matchesBedType =
      selectedFilters.bedType === "all" ||
      room.bedType
        .toLowerCase()
        .includes(selectedFilters.bedType.toLowerCase());

    return (
      matchesSearch &&
      matchesPrice &&
      matchesType &&
      matchesGuests &&
      matchesBedType
    );
  });

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "size":
        return b.size - a.size;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Toggle favorites
  const toggleFavorite = (roomId) => {
    setFavorites((prev) =>
      prev.includes(roomId)
        ? prev.filter((id) => id !== roomId)
        : [...prev, roomId]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedFilters({
      priceRange: [0, 2000],
      roomType: "all",
      amenities: [],
      guests: "all",
      bedType: "all",
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            alt="Luxury Hotel Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Luxury <span className="text-amber-200">Accommodations</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Discover our collection of elegantly designed rooms and suites,
              each offering unparalleled comfort and breathtaking views.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {allRooms.length}
                </div>
                <div className="text-amber-200">Room Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5★</div>
                <div className="text-amber-200">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-amber-200">Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-amber-200">Total Rooms</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button
                onClick={() => {
                  const searchSection = document.querySelector(
                    "section:nth-of-type(2)"
                  );
                  if (searchSection) {
                    searchSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Discover Our Rooms</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white shadow-lg -mt-8 mx-4 md:mx-8 rounded-2xl relative z-10">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search rooms by name or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedFilters.roomType}
                onChange={(e) =>
                  setSelectedFilters((prev) => ({
                    ...prev,
                    roomType: e.target.value,
                  }))
                }
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Types</option>
                <option value="superior">Superior</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
                <option value="family">Family</option>
                <option value="presidential">Presidential</option>
                <option value="penthouse">Penthouse</option>
              </select>

              <select
                value={selectedFilters.guests}
                onChange={(e) =>
                  setSelectedFilters((prev) => ({
                    ...prev,
                    guests: e.target.value,
                  }))
                }
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">Any Guests</option>
                <option value="2">2 Guests</option>
                <option value="4">4+ Guests</option>
                <option value="6">6+ Guests</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>

            {/* View Toggle and Sort */}
            <div className="flex items-center space-x-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="size">Largest First</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: ${selectedFilters.priceRange[0]} - $
                    {selectedFilters.priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2500"
                    step="50"
                    value={selectedFilters.priceRange[1]}
                    onChange={(e) =>
                      setSelectedFilters((prev) => ({
                        ...prev,
                        priceRange: [
                          prev.priceRange[0],
                          parseInt(e.target.value),
                        ],
                      }))
                    }
                    className="w-full"
                  />
                </div>

                {/* Bed Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Bed Type
                  </label>
                  <select
                    value={selectedFilters.bedType}
                    onChange={(e) =>
                      setSelectedFilters((prev) => ({
                        ...prev,
                        bedType: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">Any Bed Type</option>
                    <option value="king">King Bed</option>
                    <option value="queen">Queen Bed</option>
                    <option value="double">Double Bed</option>
                    <option value="sofa">Sofa Bed</option>
                  </select>
                </div>

                {/* Reset Button */}
                <div className="flex items-end">
                  <button
                    onClick={resetFilters}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Header */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {sortedRooms.length} Room{sortedRooms.length !== 1 ? "s" : ""}{" "}
              Available
            </h2>
            <p className="text-gray-600">
              {searchTerm && `Showing results for "${searchTerm}"`}
            </p>
          </div>

          {favorites.length > 0 && (
            <div className="flex items-center space-x-2 text-amber-600">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">
                {favorites.length} Favorite{favorites.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Rooms List */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        {sortedRooms.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No rooms found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={resetFilters}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1">
            {sortedRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex"
              >
                {/* Room Image */}
                <div className="w-80 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => toggleFavorite(room.id)}
                      className={`p-3 rounded-full transition-colors ${
                        favorites.includes(room.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(room.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        room.availability === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {room.availability}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  {room.originalPrice > room.price && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {Math.round(
                          (1 - room.price / room.originalPrice) * 100
                        )}
                        % OFF
                      </span>
                    </div>
                  )}
                </div>

                {/* Room Details */}
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {room.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {room.view} • Floor {room.floor}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {room.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({room.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Square className="w-4 h-4" />
                      <span>{room.size} m²</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{room.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs"
                      >
                        <amenity.icon className="w-3 h-3 text-gray-600" />
                        <span className="text-gray-700">{amenity.name}</span>
                      </div>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-bold text-amber-600">
                        ${room.price}
                      </div>
                      {room.originalPrice > room.price && (
                        <div className="text-sm text-gray-500 line-through">
                          ${room.originalPrice}
                        </div>
                      )}
                      <div className="text-sm text-gray-500">per night</div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedRoom(room)}
                        className="px-4 py-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors text-sm font-medium"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onNavigate("booking")}
                        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedRoom.name}
                </h2>
                <p className="text-gray-600">
                  {selectedRoom.view} • Floor {selectedRoom.floor}
                </p>
              </div>
              <button
                onClick={() => setSelectedRoom(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="h-96 overflow-hidden">
                <img
                  src={selectedRoom.images[currentImageIndex]}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Navigation */}
              {selectedRoom.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? selectedRoom.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev + 1) % selectedRoom.images.length
                      )
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedRoom.images.map((_, index) => (
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

            {/* Room Details Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Square className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold">
                        {selectedRoom.size} m²
                      </div>
                      <div className="text-sm text-gray-600">Room Size</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Users className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold">
                        {selectedRoom.maxGuests}
                      </div>
                      <div className="text-sm text-gray-600">Max Guests</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Bed className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold">
                        {selectedRoom.bedType}
                      </div>
                      <div className="text-sm text-gray-600">Bed Type</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Star className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold">
                        {selectedRoom.rating}
                      </div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Room Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {selectedRoom.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Room Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedRoom.features.map((feature, index) => (
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

                  {/* Amenities */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Amenities & Services
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedRoom.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <amenity.icon className="w-5 h-5 text-amber-600" />
                          <span className="text-gray-700 text-sm">
                            {amenity.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6 bg-gray-50 rounded-2xl p-6">
                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-3xl font-bold text-amber-600">
                          ${selectedRoom.price}
                        </span>
                        {selectedRoom.originalPrice > selectedRoom.price && (
                          <span className="text-lg text-gray-500 line-through">
                            ${selectedRoom.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600">per night</p>
                      {selectedRoom.originalPrice > selectedRoom.price && (
                        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                          Save $
                          {selectedRoom.originalPrice - selectedRoom.price}
                        </div>
                      )}
                    </div>

                    {/* Availability Status */}
                    <div className="mb-6">
                      <div
                        className={`text-center py-3 px-4 rounded-lg font-medium ${
                          selectedRoom.availability === "Available"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {selectedRoom.availability === "Available"
                          ? "✓ Available Now"
                          : "⚠ Limited Availability"}
                      </div>
                    </div>

                    {/* Quick Booking Form */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check In
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check Out
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Guests
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4+ Guests</option>
                        </select>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setSelectedRoom(null);
                          onNavigate(
                            `/booking?roomId=${
                              selectedRoom.id
                            }&roomName=${encodeURIComponent(
                              selectedRoom.name
                            )}&price=${selectedRoom.price}&roomType=${
                              selectedRoom.type
                            }`
                          );
                        }}
                        className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 text-sm"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Book This Room</span>
                      </button>

                      <button
                        onClick={() => toggleFavorite(selectedRoom.id)}
                        className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                          favorites.includes(selectedRoom.id)
                            ? "bg-red-100 text-red-700 border border-red-300"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(selectedRoom.id)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                        <span className="text-sm">
                          {favorites.includes(selectedRoom.id)
                            ? "Remove from Favorites"
                            : "Add to Favorites"}
                        </span>
                      </button>

                      <button className="w-full bg-white text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
                        Contact for Questions
                      </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Free cancellation until 24h</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Best price guarantee</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Instant confirmation</span>
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

      {/* Similar Rooms Section */}
      {selectedRoom && (
        <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allRooms
              .filter(
                (room) =>
                  room.id !== selectedRoom.id && room.type === selectedRoom.type
              )
              .slice(0, 3)
              .map((room) => (
                <div
                  key={room.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {room.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{room.rating}</span>
                      </div>
                      <div className="text-amber-600 font-semibold">
                        ${room.price}/night
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Rooms;
