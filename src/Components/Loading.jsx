import React, { useState, useEffect } from "react";
import {
  Loader2,
  Clock,
  CheckCircle,
  Star,
  Sparkles,
  Coffee,
  Key,
  Luggage,
} from "lucide-react";

const Loading = ({
  type = "default",
  message = "Loading...",
  progress = null,
  showSteps = false,
  fullScreen = true,
  size = "medium",
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showSteps) {
      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
      }, 2000);
      return () => clearInterval(stepInterval);
    }
  }, [showSteps]);

  const loadingSteps = [
    { icon: Key, text: "Preparing your room...", color: "text-blue-500" },
    { icon: Coffee, text: "Setting up amenities...", color: "text-amber-500" },
    { icon: Luggage, text: "Organizing services...", color: "text-green-500" },
    { icon: Star, text: "Adding luxury touches...", color: "text-purple-500" },
  ];

  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const loadingTypes = {
    default: {
      spinner: Loader2,
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      cardBg: "bg-white",
      primaryColor: "text-amber-600",
    },
    booking: {
      spinner: Clock,
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      cardBg: "bg-white",
      primaryColor: "text-blue-600",
      message: "Processing your reservation...",
    },
    payment: {
      spinner: CheckCircle,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      cardBg: "bg-white",
      primaryColor: "text-green-600",
      message: "Securing your payment...",
    },
    search: {
      spinner: Sparkles,
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
      cardBg: "bg-white",
      primaryColor: "text-purple-600",
      message: "Finding perfect rooms...",
    },
  };

  const currentType = loadingTypes[type] || loadingTypes.default;
  const Spinner = currentType.spinner;
  const displayMessage = message || currentType.message || "Loading...";

  // Inline loading (not fullscreen)
  if (!fullScreen) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="flex items-center space-x-3">
          <Spinner
            className={`${sizeClasses[size]} ${currentType.primaryColor} animate-spin`}
          />
          <span className="text-gray-600 font-medium">
            {displayMessage}
            {dots}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${currentType.bgColor}`}
    >
      <div className="max-w-md w-full mx-4">
        {/* Main Loading Card */}
        <div
          className={`${currentType.cardBg} rounded-2xl shadow-xl overflow-hidden`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LH</span>
              </div>
              <div className="text-left">
                <h2 className="text-white font-bold text-lg">Luxury Hotel</h2>
                <p className="text-amber-100 text-sm">Premium Experience</p>
              </div>
            </div>
          </div>

          {/* Loading Content */}
          <div className="p-8 text-center">
            {/* Main Spinner */}
            <div className="mb-6">
              <div className="relative inline-flex items-center justify-center">
                <Spinner
                  className={`w-16 h-16 ${currentType.primaryColor} animate-spin`}
                />
                {type === "booking" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Loading Message */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {displayMessage}
              {dots}
            </h3>
            <p className="text-gray-500 mb-6">
              Please wait while we prepare everything for you
            </p>

            {/* Progress Bar */}
            {progress !== null && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Loading Steps */}
            {showSteps && (
              <div className="space-y-3 mb-6">
                {loadingSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === currentStep;
                  const isCompleted = index < currentStep;

                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-amber-50 border border-amber-200"
                          : isCompleted
                          ? "bg-green-50 border border-green-200"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 ${
                          isActive ? "animate-pulse" : ""
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <StepIcon
                            className={`w-5 h-5 ${
                              isActive ? step.color : "text-gray-400"
                            }`}
                          />
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isActive
                            ? "text-gray-900"
                            : isCompleted
                            ? "text-green-700 line-through"
                            : "text-gray-500"
                        }`}
                      >
                        {step.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Animated Dots */}
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "1s",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Thank you for your patience. We're crafting the perfect experience
            for you.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-amber-200 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
