import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Users,
  MessageSquare,
  Send,
  Check,
  Star,
  Shield,
  Globe,
  Headphones,
  ChefHat,
  Sparkles,
  Copy,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Contact departments
  const departments = [
    {
      id: "general",
      name: "General Inquiries",
      icon: MessageSquare,
      phone: "+1 (555) 123-4567",
      email: "info@luxuryhotel.com",
      hours: "24/7",
      description: "General information, questions, and assistance",
      staff: "Guest Services Team",
    },
    {
      id: "reservations",
      name: "Reservations",
      icon: Calendar,
      phone: "+1 (555) 123-4568",
      email: "reservations@luxuryhotel.com",
      hours: "24/7",
      description: "Room bookings, modifications, and availability",
      staff: "Reservations Specialists",
    },
    {
      id: "concierge",
      name: "Concierge Services",
      icon: Shield,
      phone: "+1 (555) 123-4569",
      email: "concierge@luxuryhotel.com",
      hours: "24/7",
      description: "Personal assistance, recommendations, and arrangements",
      staff: "Concierge Team",
    },
    {
      id: "events",
      name: "Events & Meetings",
      icon: Users,
      phone: "+1 (555) 123-4570",
      email: "events@luxuryhotel.com",
      hours: "8:00 AM - 8:00 PM",
      description: "Weddings, corporate events, and group bookings",
      staff: "Event Planning Team",
    },
    {
      id: "dining",
      name: "Dining Reservations",
      icon: ChefHat,
      phone: "+1 (555) 123-4571",
      email: "dining@luxuryhotel.com",
      hours: "10:00 AM - 10:00 PM",
      description: "Restaurant reservations and special dining requests",
      staff: "Restaurant Team",
    },
    {
      id: "spa",
      name: "Spa & Wellness",
      icon: Sparkles,
      phone: "+1 (555) 123-4572",
      email: "spa@luxuryhotel.com",
      hours: "6:00 AM - 10:00 PM",
      description: "Spa treatments, wellness programs, and appointments",
      staff: "Wellness Team",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
        checkIn: "",
        checkOut: "",
        guests: "2",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Hotel Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Headphones className="w-4 h-4" />
              <span className="text-sm font-medium">24/7 Guest Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Here to <span className="text-amber-200">Help</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Our dedicated team is available around the clock to assist you
              with reservations, special requests, and ensuring your stay
              exceeds every expectation.
            </p>

            {/* Response Time Promise */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>Response within 15 minutes</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-white" />
                <span>5-Star Service Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="w-5 h-5" />
                <span>40+ Languages Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Have a question or special request? Our team is here to help
                  make your experience perfect.
                </p>
              </div>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <p className="text-green-800 font-medium">
                      Message sent successfully! We'll respond within 15
                      minutes.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Inquiry
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="general">General Information</option>
                    <option value="reservation">Room Reservation</option>
                    <option value="events">Events & Meetings</option>
                    <option value="dining">Dining Reservations</option>
                    <option value="concierge">Concierge Services</option>
                    <option value="spa">Spa & Wellness</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Brief subject line"
                    />
                  </div>
                </div>

                {/* Travel Dates (conditional) */}
                {(formData.inquiryType === "reservation" ||
                  formData.inquiryType === "events") && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Please share your questions, special requests, or how we can help make your stay perfect..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                  We'll respond within 15 minutes during business hours.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Department Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact by Department
              </h3>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <dept.icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {dept.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {dept.description}
                        </p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-3 h-3 text-gray-400" />
                            <span className="text-amber-600">{dept.phone}</span>
                            <button
                              onClick={() => copyToClipboard(dept.phone)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-600">{dept.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-600">{dept.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Location</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find <span className="text-amber-600">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Hotel Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Click to view full map and directions
                    </p>
                    <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                      Open Map
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="space-y-6">
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Nearby Attractions
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Central Park</span>
                    <span className="text-amber-600 text-sm font-medium">
                      5 min walk
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Times Square</span>
                    <span className="text-amber-600 text-sm font-medium">
                      10 min walk
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Broadway Theater</span>
                    <span className="text-amber-600 text-sm font-medium">
                      8 min walk
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Museum of Modern Art</span>
                    <span className="text-amber-600 text-sm font-medium">
                      12 min walk
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fifth Avenue Shopping</span>
                    <span className="text-amber-600 text-sm font-medium">
                      6 min walk
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Accessibility
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 text-sm">
                      Wheelchair accessible entrance
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 text-sm">
                      ADA compliant facilities
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 text-sm">
                      Accessible parking spaces
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 text-sm">
                      Service animal friendly
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700 text-sm">
                      Braille and audio assistance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
