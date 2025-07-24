import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Users,
  CreditCard,
  Shield,
  Check,
  Star,
  MapPin,
  Phone,
  Mail,
  User,
  Clock,
  ArrowLeft,
  ChevronRight,
  Wifi,
  AlertCircle,
  Waves,
  Dumbbell,
  Baby,
  Sparkles,
} from "lucide-react";

function BookingAmenitiesWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return <BookingAmenities onNavigate={handleNavigate} />;
}

const BookingAmenities = ({ onNavigate = () => {} }) => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Service Details
    serviceDate: "",
    serviceTime: "",
    duration: "",
    guests: 1,

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
    newsletter: false,
  });

  // Get amenity data from URL params or default
  const selectedAmenity = {
    id: searchParams.get("amenityId") || "1",
    name: searchParams.get("amenityName") || "Luxury Spa & Wellness Center",
    category: searchParams.get("category") || "wellness",
    price: parseInt(searchParams.get("price")) || 150,
    duration: searchParams.get("duration") || "90 minutes",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: getAmenityIcon(searchParams.get("category") || "wellness"),
    features: [
      "Professional therapist",
      "Premium products",
      "Relaxation area access",
      "Complimentary refreshments",
    ],
    rating: 4.9,
    hours: "6:00 AM - 10:00 PM",
    description:
      "Indulge in our signature spa treatments designed to rejuvenate your body and mind.",
  };

  // Icon mapping function
  function getAmenityIcon(category) {
    const iconMap = {
      wellness: Waves,
      recreation: Dumbbell,
      services: Shield,
      family: Baby,
      technology: Wifi,
      default: Sparkles,
    };
    return iconMap[category] || iconMap.default;
  }

  const handleInputChange = (field, value) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateStep1 = () => {
    return bookingData.serviceDate && bookingData.serviceTime;
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
    alert(
      `${selectedAmenity.name} booking confirmed! We'll send you a confirmation email shortly.`
    );
    onNavigate("amenities");
  };

  // Calculate pricing
  const servicePrice = selectedAmenity.price;
  const taxes = Math.round(servicePrice * 0.08);
  const serviceFee = 15;
  const totalPrice = servicePrice + taxes + serviceFee;

  const steps = [
    { number: 1, title: "Service Details", icon: Calendar },
    { number: 2, title: "Guest Details", icon: User },
    { number: 3, title: "Payment", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate("amenities")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Amenities</span>
            </button>

            <h1 className="text-2xl font-bold text-gray-900">
              Book Your Service
            </h1>

            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Secure Booking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center space-x-3 ${
                    currentStep >= step.number
                      ? "text-amber-600"
                      : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= step.number
                        ? "bg-amber-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-xs">Step {step.number}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-300 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Step 1: Service Details */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Select Your Service Time
                  </h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="date"
                            value={bookingData.serviceDate}
                            onChange={(e) =>
                              handleInputChange("serviceDate", e.target.value)
                            }
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <select
                            value={bookingData.serviceTime}
                            onChange={(e) =>
                              handleInputChange("serviceTime", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          >
                            <option value="">Select time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Guests
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <select
                            value={bookingData.guests}
                            onChange={(e) =>
                              handleInputChange(
                                "guests",
                                parseInt(e.target.value)
                              )
                            }
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          >
                            <option value={1}>1 Person</option>
                            <option value={2}>2 People</option>
                            <option value={3}>3 People</option>
                            <option value={4}>4 People</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Duration
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <select
                            value={bookingData.duration}
                            onChange={(e) =>
                              handleInputChange("duration", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          >
                            <option value="">Select duration</option>
                            <option value="60">60 minutes - $120</option>
                            <option value="90">90 minutes - $150</option>
                            <option value="120">120 minutes - $180</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {bookingData.serviceDate && bookingData.serviceTime && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-amber-600" />
                          <span className="text-amber-800 font-medium">
                            Service scheduled for{" "}
                            {new Date(
                              bookingData.serviceDate
                            ).toLocaleDateString()}{" "}
                            at {bookingData.serviceTime}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      onClick={nextStep}
                      disabled={!validateStep1()}
                      className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Continue to Guest Details
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Guest Information
                  </h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={bookingData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="John"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={bookingData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            value={bookingData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            value={bookingData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country/Region
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          value={bookingData.country}
                          onChange={(e) =>
                            handleInputChange("country", e.target.value)
                          }
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="">Select country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="PH">Philippines</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        value={bookingData.specialRequests}
                        onChange={(e) =>
                          handleInputChange("specialRequests", e.target.value)
                        }
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Any specific preferences or requirements..."
                      />
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={bookingData.newsletter}
                        onChange={(e) =>
                          handleInputChange("newsletter", e.target.checked)
                        }
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-gray-700"
                      >
                        Subscribe to our newsletter for exclusive offers and
                        updates
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!validateStep2()}
                      className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Payment Information
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-800">
                          Secure Payment
                        </h4>
                        <p className="text-sm text-blue-700">
                          Your payment information is encrypted and secure.
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={bookingData.cardNumber}
                          onChange={(e) =>
                            handleInputChange("cardNumber", e.target.value)
                          }
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          value={bookingData.expiryDate}
                          onChange={(e) =>
                            handleInputChange("expiryDate", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="MM/YY"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          value={bookingData.cvv}
                          onChange={(e) =>
                            handleInputChange("cvv", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.cardName}
                        onChange={(e) =>
                          handleInputChange("cardName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-medium text-gray-900 mb-4">
                        Billing Address
                      </h4>
                      <div className="space-y-4">
                        <input
                          type="text"
                          value={bookingData.billingAddress}
                          onChange={(e) =>
                            handleInputChange("billingAddress", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Street Address"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={bookingData.city}
                            onChange={(e) =>
                              handleInputChange("city", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="City"
                          />
                          <input
                            type="text"
                            value={bookingData.zipCode}
                            onChange={(e) =>
                              handleInputChange("zipCode", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="ZIP Code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleBooking}
                      className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <Shield className="w-5 h-5" />
                      <span>Book Service - ${totalPrice}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Summary
              </h3>

              {/* Service Details */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <img
                  src={selectedAmenity.image}
                  alt={selectedAmenity.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />

                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <selectedAmenity.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {selectedAmenity.name}
                    </h4>
                    <p className="text-sm text-gray-600 capitalize">
                      {selectedAmenity.category} Service
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">
                    {selectedAmenity.rating}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedAmenity.features
                    .slice(0, 2)
                    .map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded text-xs"
                      >
                        <Check className="w-3 h-3 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Service Details */}
              {bookingData.serviceDate && bookingData.serviceTime && (
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">
                    Service Details
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {new Date(bookingData.serviceDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">
                        {bookingData.serviceTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">
                        {selectedAmenity.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-medium">{bookingData.guests}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-3">
                <h5 className="font-medium text-gray-900">Price Breakdown</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service fee</span>
                    <span>${servicePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & fees</span>
                    <span>${taxes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking fee</span>
                    <span>${serviceFee}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-amber-600">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h5 className="font-medium text-gray-900 mb-2">
                  Operating Hours
                </h5>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{selectedAmenity.hours}</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Professional service guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Secure payment processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>Free cancellation until 2 hours before</span>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h6 className="font-medium text-amber-800 mb-2">Need Help?</h6>
                <p className="text-sm text-amber-700 mb-3">
                  Our concierge team is available 24/7 to assist you.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1 text-amber-700">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-700">
                    <Mail className="w-4 h-4" />
                    <span>concierge@hotel.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Total</div>
            <div className="text-lg font-bold text-amber-600">
              ${totalPrice}
            </div>
          </div>

          {currentStep === 1 && (
            <button
              onClick={nextStep}
              disabled={!validateStep1()}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          )}

          {currentStep === 2 && (
            <button
              onClick={nextStep}
              disabled={!validateStep2()}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          )}

          {currentStep === 3 && (
            <button
              onClick={handleBooking}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Shield className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          )}
        </div>
      </div>

      {/* Important Information */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-3">
            Important Information
          </h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p>Please arrive 15 minutes early for your appointment.</p>
            </div>
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p>
                Free cancellation is available until 2 hours before your service
                time.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p>Valid photo ID required for spa and wellness services.</p>
            </div>
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p>
                Service prices may vary based on selected duration and add-ons.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              By completing this booking, you agree to our{" "}
              <button className="text-amber-600 hover:underline">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-amber-600 hover:underline">
                Privacy Policy
              </button>
              . All service rates are subject to availability and may change
              without notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAmenitiesWrapper;
