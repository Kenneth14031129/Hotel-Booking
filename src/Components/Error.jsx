import React from "react";
import {
  AlertTriangle,
  Home,
  RefreshCw,
  Phone,
  Mail,
  ArrowLeft,
  Wifi,
  Server,
  Lock,
  Clock,
} from "lucide-react";

const Error = ({
  type = "404",
  title,
  message,
  showContactInfo = true,
  onRetry,
  onGoHome,
  customActions,
}) => {
  const errorTypes = {
    404: {
      icon: AlertTriangle,
      title: "Page Not Found",
      message:
        "The page you're looking for seems to have checked out. Let us help you find your way back to comfort.",
      suggestions: [
        "Check the URL for typos",
        "Use our navigation menu",
        "Search for what you need",
        "Return to homepage",
      ],
    },
    500: {
      icon: Server,
      title: "Server Error",
      message:
        "Our servers are temporarily experiencing some turbulence. Our technical concierge is working to resolve this.",
      suggestions: [
        "Please wait a moment and try again",
        "Clear your browser cache",
        "Check your internet connection",
        "Contact support if issue persists",
      ],
    },
    network: {
      icon: Wifi,
      title: "Connection Error",
      message:
        "Unable to connect to our services. Please check your internet connection and try again.",
      suggestions: [
        "Check your internet connection",
        "Try refreshing the page",
        "Disable VPN if active",
        "Contact your ISP if needed",
      ],
    },
    auth: {
      icon: Lock,
      title: "Access Denied",
      message:
        "You don't have permission to access this area. Please sign in or contact our reception.",
      suggestions: [
        "Sign in to your account",
        "Check your credentials",
        "Contact customer support",
        "Return to safe areas",
      ],
    },
    timeout: {
      icon: Clock,
      title: "Request Timeout",
      message:
        "The request is taking longer than expected. Our services might be busy right now.",
      suggestions: [
        "Try again in a moment",
        "Check your connection",
        "Reduce request complexity",
        "Contact support",
      ],
    },
    booking: {
      icon: AlertTriangle,
      title: "Booking Error",
      message:
        "We encountered an issue processing your reservation. Don't worry, no charges were made.",
      suggestions: [
        "Check room availability",
        "Verify your information",
        "Try different dates",
        "Call our booking line",
      ],
    },
  };

  const currentError = errorTypes[type] || errorTypes["404"];
  const ErrorIcon = currentError.icon;

  const errorTitle = title || currentError.title;
  const errorMessage = message || currentError.message;

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <ErrorIcon size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">{errorTitle}</h1>
            <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-gray-600 text-lg text-center mb-8 leading-relaxed">
              {errorMessage}
            </p>

            {/* Suggestions */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Helpful Suggestions
              </h3>
              <ul className="space-y-2">
                {currentError.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleRetry}
                className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 font-medium shadow-lg"
              >
                <RefreshCw size={18} />
                <span>Try Again</span>
              </button>

              <button
                onClick={handleGoHome}
                className="flex-1 flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg border-2 border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Home size={18} />
                <span>Go Home</span>
              </button>
            </div>

            {/* Custom Actions */}
            {customActions && (
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {customActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.onClick}
                    className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium text-sm"
                  >
                    {action.icon && <action.icon size={16} />}
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Go Back Button */}
            <div className="text-center">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 text-gray-500 hover:text-amber-600 transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft size={16} />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        {showContactInfo && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Need Immediate Assistance?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Phone size={18} />
                <span>Call Reception</span>
              </a>
              <a
                href="mailto:support@luxuryhotel.com"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Mail size={18} />
                <span>Email Support</span>
              </a>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Available 24/7 • Response within 15 minutes
            </p>
          </div>
        )}

        {/* Hotel Branding */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-3 text-gray-600">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LH</span>
            </div>
            <span className="font-semibold">Luxury Hotel</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm">Premium Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
