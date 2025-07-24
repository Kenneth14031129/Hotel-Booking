import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Shield,
  Award,
  Star,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Rooms", href: "/rooms" },
    { name: "Amenities", href: "/amenities" },
    { name: "Dining", href: "/dining" },
    { name: "Events & Meetings", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Cancellation Policy", href: "#cancellation" },
    { name: "Refund Policy", href: "#refund" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Accessibility", href: "#accessibility" },
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Car, name: "Valet Parking" },
    { icon: Utensils, name: "Fine Dining" },
    { icon: Dumbbell, name: "Fitness Center" },
  ];

  const certifications = [
    { icon: Shield, name: "Safe & Secure" },
    { icon: Award, name: "Award Winning" },
    { icon: Star, name: "5-Star Rated" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LH</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Luxury Hotel</h2>
                <p className="text-amber-400 text-sm">Premium Experience</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience unparalleled luxury and comfort at our 5-star hotel.
              From elegant rooms to world-class amenities, we create
              unforgettable memories for every guest.
            </p>

            {/* Amenities Icons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                >
                  <amenity.icon size={16} className="text-amber-400" />
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full text-xs"
                >
                  <cert.icon size={14} className="text-amber-400" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get In Touch
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-amber-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">123 Luxury Avenue</p>
                  <p className="text-gray-300">Downtown Manhattan, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-400">24/7 Reception</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@luxuryhotel.com</p>
                  <p className="text-xs text-gray-400">
                    We reply within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Check-in: 3:00 PM</p>
                  <p className="text-gray-300">Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#facebook", name: "Facebook" },
                  { icon: Instagram, href: "#instagram", name: "Instagram" },
                  { icon: Twitter, href: "#twitter", name: "Twitter" },
                  { icon: Youtube, href: "#youtube", name: "YouTube" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <social.icon
                      size={18}
                      className="text-gray-300 group-hover:text-white transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Luxury Hotel. All rights reserved. | Crafted with
              excellence.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
