import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Users,
  CreditCard,
  Shield,
  Star,
  MapPin,
  Phone,
  Mail,
  User,
  Clock,
  ArrowLeft,
  ChevronRight,
  Bed,
  Square,
  Wifi,
  Car,
  Coffee,
  AlertCircle,
  Award,
  Lock,
  Zap,
  Heart,
  Gift,
  Sparkles,
  Crown,
  CheckCircle2,
  TrendingUp,
  Globe,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

function BookingWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return <Booking onNavigate={handleNavigate} />;
}

const Booking = ({ onNavigate = () => {} }) => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    // Dates
    checkIn: "",
    checkOut: "",
    guests: 2,
    nights: 0,

    // Guest Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    specialRequests: "",

    // Payment
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    billingAddress: "",
    city: "",
    zipCode: "",

    // Preferences
    arrivalTime: "",
    bedPreference: "",
    newsletter: false,
  });

  const selectedRoom = {
    id: searchParams.get("roomId") || "1",
    name: searchParams.get("roomName") || "Deluxe King Room",
    price: parseInt(searchParams.get("price")) || 299,
    type: searchParams.get("roomType") || "deluxe",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    size: 32,
    maxGuests: 2,
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Car, name: "Valet Parking" },
      { icon: Coffee, name: "Coffee Machine" },
      { icon: Shield, name: "Room Safe" },
    ],
    rating: 4.8,
    view: "City View",
    originalPrice: 399,
    discount: 25,
  };

  // Calculate nights when dates change
  useEffect(() => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setBookingData((prev) => ({ ...prev, nights: nights > 0 ? nights : 0 }));
    }
  }, [bookingData.checkIn, bookingData.checkOut]);

  const handleInputChange = (field, value) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsLoading(false);
      }, 800);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateStep1 = () => {
    return (
      bookingData.checkIn && bookingData.checkOut && bookingData.nights > 0
    );
  };

  const validateStep2 = () => {
    return (
      bookingData.firstName &&
      bookingData.lastName &&
      bookingData.email &&
      bookingData.phone
    );
  };

  const handleBooking = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert("🎉 Booking confirmed! Welcome to luxury redefined.");
      onNavigate("/");
      setIsLoading(false);
    }, 2000);
  };

  // Calculate pricing
  const roomTotal = selectedRoom.price * bookingData.nights;
  const taxes = Math.round(roomTotal * 0.12);
  const serviceFee = 25;
  const totalPrice = roomTotal + taxes + serviceFee;
  const savings =
    (selectedRoom.originalPrice - selectedRoom.price) * bookingData.nights;

  const steps = [
    {
      number: 1,
      title: "Dates & Guests",
      icon: Calendar,
      desc: "Choose your perfect stay",
    },
    {
      number: 2,
      title: "Guest Details",
      icon: User,
      desc: "Tell us about yourself",
    },
    { number: 3, title: "Payment", icon: CreditCard, desc: "Secure checkout" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Enhanced Header with Floating Effect */}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => (window.location.href = "/rooms")}
              className="group flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-amber-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-medium">Back to Rooms</span>
            </button>

            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Complete Your Reservation
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Luxury awaits your confirmation
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  SSL Secured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Steps with Animation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center space-x-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`relative transition-all duration-500 ${
                      currentStep >= step.number
                        ? "text-amber-600 scale-110"
                        : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        currentStep >= step.number
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/25"
                          : "bg-white text-gray-500 border-gray-300"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle2 className="w-7 h-7" />
                      ) : (
                        <step.icon className="w-7 h-7" />
                      )}
                    </div>
                    {currentStep === step.number && (
                      <div className="absolute -inset-2 bg-amber-500/20 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="text-center">
                    <div
                      className={`font-semibold transition-colors ${
                        currentStep >= step.number
                          ? "text-amber-700"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {step.desc}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="mx-8">
                    <div
                      className={`h-0.5 w-24 transition-all duration-500 ${
                        currentStep > step.number
                          ? "bg-gradient-to-r from-amber-500 to-amber-600"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-100/50 overflow-hidden">
              {/* Elegant Header */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 px-8 py-6 border-b border-amber-200/50">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {/* Fix: Use a proper component reference */}
                    {(() => {
                      const CurrentStepIcon = steps.find(
                        (s) => s.number === currentStep
                      )?.icon;
                      return CurrentStepIcon ? (
                        <CurrentStepIcon className="w-6 h-6 text-amber-600" />
                      ) : null;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {steps.find((s) => s.number === currentStep)?.title}
                    </h2>
                    <p className="text-amber-700 text-sm">
                      {steps.find((s) => s.number === currentStep)?.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Step 1: Enhanced Dates & Guests */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    {/* Date Selection */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <Calendar className="w-6 h-6 text-amber-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          Select Your Perfect Dates
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Check-in Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                            <input
                              type="date"
                              value={bookingData.checkIn}
                              onChange={(e) =>
                                handleInputChange("checkIn", e.target.value)
                              }
                              min={new Date().toISOString().split("T")[0]}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Check-out Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                            <input
                              type="date"
                              value={bookingData.checkOut}
                              onChange={(e) =>
                                handleInputChange("checkOut", e.target.value)
                              }
                              min={
                                bookingData.checkIn ||
                                new Date().toISOString().split("T")[0]
                              }
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Guest Selection */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <Users className="w-6 h-6 text-amber-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          Guest Information
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Number of Guests
                          </label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                            <select
                              value={bookingData.guests}
                              onChange={(e) =>
                                handleInputChange(
                                  "guests",
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300 appearance-none"
                            >
                              <option value={1}>1 Guest</option>
                              <option value={2}>2 Guests</option>
                              <option value={3}>3 Guests</option>
                              <option value={4}>4 Guests</option>
                            </select>
                          </div>
                        </div>

                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Estimated Arrival Time
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                            <select
                              value={bookingData.arrivalTime}
                              onChange={(e) =>
                                handleInputChange("arrivalTime", e.target.value)
                              }
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300 appearance-none"
                            >
                              <option value="">Select arrival time</option>
                              <option value="morning">
                                Morning (6AM - 12PM)
                              </option>
                              <option value="afternoon">
                                Afternoon (12PM - 6PM)
                              </option>
                              <option value="evening">
                                Evening (6PM - 10PM)
                              </option>
                              <option value="late">Late (After 10PM)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Night Confirmation */}
                    {bookingData.nights > 0 && (
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="flex items-center space-x-4 relative z-10">
                          <div className="p-3 bg-white rounded-full shadow-sm">
                            <CheckCircle2 className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <span className="text-amber-800 font-bold text-lg">
                              {bookingData.nights} night
                              {bookingData.nights > 1 ? "s" : ""} selected
                            </span>
                            <p className="text-amber-700 text-sm">
                              {new Date(bookingData.checkIn).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}{" "}
                              →{" "}
                              {new Date(
                                bookingData.checkOut
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end mt-10">
                      <button
                        onClick={nextStep}
                        disabled={!validateStep1() || isLoading}
                        className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Continue to Guest Details</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Enhanced Guest Details */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <User className="w-6 h-6 text-amber-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Your Information
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={bookingData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                            placeholder="John"
                          />
                        </div>

                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={bookingData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                            <input
                              type="email"
                              value={bookingData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                              placeholder="john.doe@example.com"
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                            <input
                              type="tel"
                              value={bookingData.phone}
                              onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                              }
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Country/Region
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                          <select
                            value={bookingData.country}
                            onChange={(e) =>
                              handleInputChange("country", e.target.value)
                            }
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300 appearance-none"
                          >
                            <option value="">Select country</option>
                            <option value="US">🇺🇸 United States</option>
                            <option value="CA">🇨🇦 Canada</option>
                            <option value="UK">🇬🇧 United Kingdom</option>
                            <option value="AU">🇦🇺 Australia</option>
                            <option value="PH">🇵🇭 Philippines</option>
                            <option value="other">🌍 Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Special Requests
                        </label>
                        <textarea
                          value={bookingData.specialRequests}
                          onChange={(e) =>
                            handleInputChange("specialRequests", e.target.value)
                          }
                          rows={4}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300 resize-none"
                          placeholder="Any special requests, dietary requirements, or preferences..."
                        />
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4">
                        <div className="flex items-start space-x-4">
                          <input
                            type="checkbox"
                            id="newsletter"
                            checked={bookingData.newsletter}
                            onChange={(e) =>
                              handleInputChange("newsletter", e.target.checked)
                            }
                            className="w-5 h-5 text-amber-600 border-2 border-gray-300 rounded focus:ring-amber-500 mt-1"
                          />
                          <div>
                            <label
                              htmlFor="newsletter"
                              className="text-sm font-medium text-blue-900"
                            >
                              Subscribe to our exclusive newsletter
                            </label>
                            <p className="text-xs text-blue-700 mt-1">
                              Get insider access to luxury deals, early booking
                              opportunities, and VIP experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-10">
                      <button
                        onClick={prevStep}
                        className="group bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3"
                      >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!validateStep2() || isLoading}
                        className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Continue to Payment</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Enhanced Payment */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-6 flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        <Lock className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-800 text-lg">
                          Bank-Level Security
                        </h4>
                        <p className="text-sm text-emerald-700 mt-1">
                          Your payment information is protected with 256-bit SSL
                          encryption and processed through secure payment
                          gateways.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <CreditCard className="w-6 h-6 text-amber-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          Payment Information
                        </h3>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Card Number *
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-10" />
                          <input
                            type="text"
                            value={bookingData.cardNumber}
                            onChange={(e) =>
                              handleInputChange("cardNumber", e.target.value)
                            }
                            className="w-full pl-12 pr-16 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                            placeholder="1234 5678 9012 3456"
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-1">
                            <div className="w-6 h-4 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              V
                            </div>
                            <div className="w-6 h-4 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              M
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            value={bookingData.expiryDate}
                            onChange={(e) =>
                              handleInputChange("expiryDate", e.target.value)
                            }
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                            placeholder="MM/YY"
                          />
                        </div>

                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            CVV *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={bookingData.cvv}
                              onChange={(e) =>
                                handleInputChange("cvv", e.target.value)
                              }
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                              placeholder="123"
                              maxLength="4"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                              <div className="group relative">
                                <Shield className="w-4 h-4 text-gray-400 cursor-help" />
                                <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                  3-4 digit security code
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          value={bookingData.cardName}
                          onChange={(e) =>
                            handleInputChange("cardName", e.target.value)
                          }
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="border-t-2 border-gray-100 pt-8">
                        <div className="flex items-center space-x-3 mb-6">
                          <MapPin className="w-6 h-6 text-amber-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Billing Address
                          </h4>
                        </div>

                        <div className="space-y-6">
                          <div className="group">
                            <input
                              type="text"
                              value={bookingData.billingAddress}
                              onChange={(e) =>
                                handleInputChange(
                                  "billingAddress",
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                              placeholder="Street Address"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            <div className="group">
                              <input
                                type="text"
                                value={bookingData.city}
                                onChange={(e) =>
                                  handleInputChange("city", e.target.value)
                                }
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                                placeholder="City"
                              />
                            </div>
                            <div className="group">
                              <input
                                type="text"
                                value={bookingData.zipCode}
                                onChange={(e) =>
                                  handleInputChange("zipCode", e.target.value)
                                }
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white/80 hover:bg-white group-hover:border-amber-300"
                                placeholder="ZIP Code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-10">
                      <button
                        onClick={prevStep}
                        className="group bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3"
                      >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                      </button>
                      <button
                        onClick={handleBooking}
                        disabled={isLoading}
                        className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-4 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing Booking...</span>
                          </>
                        ) : (
                          <>
                            <Crown className="w-6 h-6" />
                            <span>Complete Booking - ${totalPrice}</span>
                            <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-100/50 overflow-hidden sticky top-6">
              {/* Premium Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Booking Summary</h3>
                  <div className="flex items-center space-x-2">
                    <Crown className="w-5 h-5" />
                    <span className="text-sm font-medium">Premium</span>
                  </div>
                </div>
              </div>

              {/* Room Details with Enhanced Design */}
              <div className="p-6 border-b border-gray-100">
                <div className="relative rounded-2xl overflow-hidden mb-4 group">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {selectedRoom.rating}
                        </span>
                      </div>
                      <div className="bg-red-500 px-2 py-1 rounded-full text-xs font-bold">
                        {selectedRoom.discount}% OFF
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {selectedRoom.name}
                </h4>
                <p className="text-amber-600 text-sm mb-4 font-medium">
                  {selectedRoom.view}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Square className="w-4 h-4 text-amber-500" />
                    <span>{selectedRoom.size}m²</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Bed className="w-4 h-4 text-amber-500" />
                    <span>King Bed</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {selectedRoom.amenities.slice(0, 4).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-amber-50 px-3 py-2 rounded-lg text-xs"
                    >
                      <amenity.icon className="w-3 h-3 text-amber-600" />
                      <span className="text-amber-800 font-medium">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Stay Details */}
              {bookingData.checkIn && bookingData.checkOut && (
                <div className="p-6 border-b border-gray-100">
                  <h5 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span>Stay Details</span>
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">Check-in:</span>
                      <span className="font-semibold text-gray-900">
                        {new Date(bookingData.checkIn).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">Check-out:</span>
                      <span className="font-semibold text-gray-900">
                        {new Date(bookingData.checkOut).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="text-amber-700 text-sm">Nights:</span>
                      <span className="font-bold text-amber-800">
                        {bookingData.nights}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-700 text-sm">Guests:</span>
                      <span className="font-bold text-blue-800">
                        {bookingData.guests}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Price Breakdown */}
              {bookingData.nights > 0 && (
                <div className="p-6">
                  <h5 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span>Price Breakdown</span>
                  </h5>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="text-gray-600 text-sm">Room Rate</span>
                        <div className="text-xs text-gray-500">
                          ${selectedRoom.price} × {bookingData.nights} nights
                        </div>
                      </div>
                      <span className="font-semibold">${roomTotal}</span>
                    </div>

                    {savings > 0 && (
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-green-700 text-sm flex items-center space-x-2">
                          <Gift className="w-4 h-4" />
                          <span>You Save</span>
                        </span>
                        <span className="font-bold text-green-700">
                          -${savings}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">
                        Taxes & fees
                      </span>
                      <span className="font-semibold">${taxes}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 text-sm">Service fee</span>
                      <span className="font-semibold">${serviceFee}</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-amber-200 mt-6 pt-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                      <span className="text-xl font-bold text-gray-900">
                        Total
                      </span>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-amber-600">
                          ${totalPrice}
                        </span>
                        <div className="text-xs text-gray-500">
                          for {bookingData.nights} night
                          {bookingData.nights > 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Trust Indicators */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
                <h6 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Your Booking is Protected</span>
                </h6>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Free cancellation until 24h before
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <Lock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      256-bit SSL encryption
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Instant confirmation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <Award className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Best price guarantee
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced Help Section */}
              <div className="p-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <h6 className="font-bold mb-3 flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Need Assistance?</span>
                </h6>
                <p className="text-amber-100 text-sm mb-4">
                  Our luxury concierge team is available 24/7 to ensure your
                  perfect stay.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <PhoneCall className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      concierge@luxury-hotel.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-amber-100 p-4 z-50 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-sm text-gray-600">Total Price</div>
            <div className="text-2xl font-bold text-amber-600">
              ${bookingData.nights > 0 ? totalPrice : selectedRoom.price}
            </div>
            {bookingData.nights > 0 && (
              <div className="text-xs text-gray-500">
                for {bookingData.nights} night
                {bookingData.nights > 1 ? "s" : ""}
              </div>
            )}
          </div>

          {currentStep === 1 && (
            <button
              onClick={nextStep}
              disabled={!validateStep1() || isLoading}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? "Processing..." : "Continue"}
            </button>
          )}

          {currentStep === 2 && (
            <button
              onClick={nextStep}
              disabled={!validateStep2() || isLoading}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? "Processing..." : "Continue"}
            </button>
          )}

          {currentStep === 3 && (
            <button
              onClick={handleBooking}
              disabled={isLoading}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-xl flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Booking...</span>
                </>
              ) : (
                <>
                  <Crown className="w-4 h-4" />
                  <span>Book Now</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Enhanced Terms and Important Information */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-3xl p-8 shadow-xl border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-6 text-xl flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <span>Important Booking Information</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    Check-in & Check-out
                  </p>
                  <p className="text-sm text-gray-600">
                    Check-in: 3:00 PM | Check-out: 11:00 AM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                <Heart className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    Cancellation Policy
                  </p>
                  <p className="text-sm text-gray-600">
                    Free cancellation until 24 hours before check-in
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                <User className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    Guest Requirements
                  </p>
                  <p className="text-sm text-gray-600">
                    Valid photo ID and credit card required at check-in
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Hotel Policies</p>
                  <p className="text-sm text-gray-600">
                    Non-smoking property with premium air purification
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600 leading-relaxed">
              By completing this booking, you agree to our{" "}
              <button className="text-amber-600 hover:text-amber-700 font-medium hover:underline transition-colors">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-amber-600 hover:text-amber-700 font-medium hover:underline transition-colors">
                Privacy Policy
              </button>
              . All rates are subject to availability and may change without
              notice. Our commitment to luxury hospitality includes personalized
              service, premium amenities, and unforgettable experiences designed
              to exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWrapper;
