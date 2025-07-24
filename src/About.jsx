import { useState } from "react";
import {
  Award,
  Star,
  Users,
  Globe,
  Heart,
  Shield,
  Clock,
  Trophy,
  Building,
  Leaf,
  Sparkles,
  Crown,
  Zap,
  Target,
  Eye,
  Handshake,
  TrendingUp,
  Check,
  Quote,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  // Company milestones and achievements
  const milestones = [
    {
      year: "1998",
      title: "Grand Opening",
      description:
        "Luxury Hotel opens its doors as Manhattan's newest 5-star destination",
      icon: Building,
    },
    {
      year: "2001",
      title: "First Michelin Star",
      description: "Our signature restaurant receives its first Michelin star",
      icon: Star,
    },
    {
      year: "2005",
      title: "Expansion Complete",
      description: "Added the Executive Wing and Grand Ballroom complex",
      icon: Trophy,
    },
    {
      year: "2010",
      title: "Green Certification",
      description:
        "Achieved LEED Gold certification for sustainability practices",
      icon: Leaf,
    },
    {
      year: "2015",
      title: "World's 50 Best",
      description: "Named among the world's 50 best luxury hotels",
      icon: Globe,
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description:
        "Launched cutting-edge smart room technology and contactless services",
      icon: Zap,
    },
    {
      year: "2023",
      title: "25th Anniversary",
      description:
        "Celebrating 25 years of hospitality excellence and over 1 million guests",
      icon: Crown,
    },
  ];

  // Core values
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, from service to amenities, ensuring an exceptional experience for every guest.",
    },
    {
      icon: Handshake,
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and respect for our guests, employees, and community.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "We embrace new technologies and ideas to continuously enhance our services and guest experiences.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to environmental stewardship and sustainable practices that protect our planet.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in giving back to our community and creating positive impacts beyond our hotel walls.",
    },
    {
      icon: Target,
      title: "Guest-Centric",
      description:
        "Every decision we make is guided by our commitment to exceeding guest expectations and creating memories.",
    },
  ];

  // Leadership team
  const leadership = [
    {
      name: "Alexandra Sterling",
      position: "General Manager & CEO",
      experience: "20+ years in luxury hospitality",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Alexandra brings two decades of luxury hospitality experience, having managed prestigious properties worldwide. Her vision for personalized service excellence has earned multiple industry awards.",
      achievements: [
        "Hospitality Executive of the Year 2022",
        "Forbes 40 Under 40 Hospitality",
        "Cornell Hotel School Distinguished Alumni",
      ],
    },
    {
      name: "Marcus Chen",
      position: "Director of Operations",
      experience: "15+ years operational excellence",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Marcus oversees all operational aspects with a focus on efficiency and guest satisfaction. His innovative approach to hospitality operations has set new industry standards.",
      achievements: [
        "Operations Excellence Award",
        "Sustainable Tourism Leader",
        "Hotel Management Expert Certification",
      ],
    },
    {
      name: "Sophie Laurent",
      position: "Director of Guest Experience",
      experience: "12+ years in guest relations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Sophie ensures every guest interaction exceeds expectations. Her background in psychology and hospitality creates uniquely personalized experiences for each visitor.",
      achievements: [
        "Guest Service Excellence Award",
        "Customer Experience Innovation",
        "Hospitality Psychology Certification",
      ],
    },
  ];

  // Awards and recognitions
  const awards = [
    {
      year: "2024",
      title: "Forbes 5-Star Award",
      organization: "Forbes Travel Guide",
      description: "Recognized for exceptional luxury service and amenities",
    },
    {
      year: "2024",
      title: "AAA Five Diamond",
      organization: "American Automobile Association",
      description: "Ultimate luxury designation for hospitality excellence",
    },
    {
      year: "2023",
      title: "World's Best Hotels",
      organization: "Travel + Leisure",
      description: "Ranked #15 in the World's Best Hotels list",
    },
    {
      year: "2023",
      title: "Conde Nast Gold List",
      organization: "Conde Nast Traveler",
      description:
        "Featured in the prestigious Gold List of world's best hotels",
    },
    {
      year: "2022",
      title: "Sustainable Tourism Award",
      organization: "Green Hospitality Alliance",
      description:
        "Recognition for environmental leadership and sustainability practices",
    },
    {
      year: "2022",
      title: "Best Luxury Hotel NYC",
      organization: "Luxury Travel Magazine",
      description: "Top luxury accommodation in New York City",
    },
  ];

  // Statistics
  const stats = [
    { number: "1M+", label: "Happy Guests", icon: Users },
    { number: "98%", label: "Guest Satisfaction", icon: Heart },
    { number: "150+", label: "Luxury Rooms", icon: Building },
    { number: "25+", label: "Years Excellence", icon: Award },
    { number: "500+", label: "Team Members", icon: Handshake },
    { number: "50+", label: "Countries Served", icon: Globe },
  ];

  const tabs = [
    { id: "story", name: "Our Story", icon: Quote },
    { id: "mission", name: "Mission & Values", icon: Target },
    { id: "leadership", name: "Leadership", icon: Users },
    { id: "awards", name: "Awards", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Hotel About"
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
                25 Years of Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where <span className="text-amber-200">Luxury Meets Legacy</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              For over two decades, we have redefined luxury hospitality in
              Manhattan, creating extraordinary experiences that exceed
              expectations and forge lasting memories.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-amber-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg -mt-8 mx-4 md:mx-8 rounded-2xl relative z-10">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Tab */}
      {activeTab === "story" && (
        <section id="story-section" className="max-w-7xl mx-auto px-4 py-16">
          {/* Story Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Our Beginning</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Legacy Built on{" "}
                <span className="text-amber-600">Excellence</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  In 1998, visionary hotelier James Sterling opened the doors to
                  what would become Manhattan's most distinguished luxury hotel.
                  His dream was simple yet ambitious: to create a sanctuary
                  where impeccable service meets timeless elegance.
                </p>
                <p>
                  What began as a boutique property with 50 rooms has evolved
                  into a 150-room luxury destination that continues to set the
                  standard for hospitality excellence. Our commitment to
                  personalized service and attention to detail has earned us
                  recognition from the world's most prestigious travel
                  organizations.
                </p>
                <p>
                  Today, under the leadership of his daughter Alexandra
                  Sterling, we continue to honor our founder's vision while
                  embracing innovation and sustainability to create
                  extraordinary experiences for the modern luxury traveler.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Founder"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      James Sterling
                    </div>
                    <div className="text-sm text-gray-600">
                      Founder & Visionary
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "Excellence is not a destination, but a journey of continuous
                  improvement."
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Our Journey</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Milestones of <span className="text-amber-600">Excellence</span>
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          {index % 2 === 1 && (
                            <milestone.icon className="w-6 h-6 text-amber-600" />
                          )}
                          <div
                            className={
                              index % 2 === 0 ? "text-right" : "text-left"
                            }
                          >
                            <div className="text-2xl font-bold text-amber-600">
                              {milestone.year}
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">
                              {milestone.title}
                            </h4>
                          </div>
                          {index % 2 === 0 && (
                            <milestone.icon className="w-6 h-6 text-amber-600" />
                          )}
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Philosophy
              </h3>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center italic leading-relaxed">
              "We believe that luxury is not about opulence alone, but about
              creating meaningful connections, unforgettable experiences, and
              moments that last a lifetime. Every detail matters, every
              interaction counts, and every guest deserves nothing less than
              perfection."
            </blockquote>
            <div className="text-center mt-6">
              <cite className="text-amber-600 font-semibold">
                - Alexandra Sterling, CEO
              </cite>
            </div>
          </div>
        </section>
      )}

      {/* Mission & Values Tab */}
      {activeTab === "mission" && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Dedicated to <span className="text-amber-600">Excellence</span>
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mission Statement
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To provide an unparalleled luxury hospitality experience that
                exceeds expectations, creates lasting memories, and sets the
                standard for excellence in the industry. We are committed to
                delivering personalized service, maintaining the highest quality
                standards, and fostering meaningful connections with our guests,
                employees, and community.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-6 h-6 text-amber-600" />
                    <h4 className="text-xl font-semibold text-gray-900">
                      Vision
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    To be recognized globally as the premier luxury hotel that
                    defines excellence in hospitality, innovation, and guest
                    satisfaction.
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-amber-600" />
                    <h4 className="text-xl font-semibold text-gray-900">
                      Purpose
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    To create extraordinary moments and lasting memories that
                    enrich the lives of our guests and inspire our team to
                    achieve greatness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-amber-600">Core Values</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and
                every interaction we have with our guests, employees, and
                community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitments */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Our Commitments
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Guest Satisfaction</h4>
                    <p className="text-gray-300">
                      We guarantee 100% satisfaction or we'll make it right
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      Environmental Responsibility
                    </h4>
                    <p className="text-gray-300">
                      LEED Gold certified with ongoing sustainability
                      initiatives
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Community Impact</h4>
                    <p className="text-gray-300">
                      Supporting local businesses and charitable organizations
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Employee Excellence</h4>
                    <p className="text-gray-300">
                      Investing in our team through training and development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      Innovation Leadership
                    </h4>
                    <p className="text-gray-300">
                      Continuously improving through technology and best
                      practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-gray-300">
                      Maintaining the highest standards in all our services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Leadership Tab */}
      {activeTab === "leadership" && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-amber-600">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of hospitality
              expertise and a shared commitment to excellence in guest service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-2">
                    {leader.position}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {leader.experience}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {leader.bio}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Key Achievements:
                    </h4>
                    {leader.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-amber-600 flex-shrink-0" />
                        <span className="text-xs text-gray-600">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-20 bg-amber-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-amber-600">Team Excellence</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  500+
                </div>
                <div className="text-gray-700">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  95%
                </div>
                <div className="text-gray-700">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  40+
                </div>
                <div className="text-gray-700">Languages Spoken</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  15+
                </div>
                <div className="text-gray-700">Avg Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Awards Tab */}
      {activeTab === "awards" && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Recognition & Awards</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Celebrating <span className="text-amber-600">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by the world's
              most prestigious travel and hospitality organizations.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-amber-600">
                    {award.year}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-amber-600 font-medium text-sm mb-3">
                  {award.organization}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>

          {/* Recognition Stats */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <Crown className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Industry Recognition
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  50+
                </div>
                <div className="text-gray-300">Awards Received</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">5★</div>
                <div className="text-gray-300">Forbes Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  #15
                </div>
                <div className="text-gray-300">World Ranking</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  100%
                </div>
                <div className="text-gray-300">Guest Recommendation</div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-amber-400">
                  Recent Highlights
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-300">
                      Forbes 5-Star Award (2024)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-300">
                      AAA Five Diamond (2024)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-300">
                      Travel + Leisure World's Best (2023)
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-amber-400">
                  Certifications
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-300">LEED Gold Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-300">
                      ISO 9001 Quality Management
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-300">Green Key Eco-Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Complete Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">By the Numbers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-amber-600">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">Sustainability</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Committed to Our <span className="text-green-600">Planet</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As a LEED Gold certified property, we're committed to
                environmental stewardship and sustainable practices that protect
                our planet for future generations. Our green initiatives span
                every aspect of our operations.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    40%
                  </div>
                  <div className="text-sm text-gray-600">Energy Reduction</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    60%
                  </div>
                  <div className="text-sm text-gray-600">
                    Water Conservation
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    85%
                  </div>
                  <div className="text-sm text-gray-600">Waste Recycled</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Renewable Energy</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Solar panel installation and energy-efficient systems
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Locally sourced organic ingredients in our restaurants
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Comprehensive recycling and waste reduction programs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    Electric vehicle charging stations for guests
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Sustainable Hotel"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">LEED Gold</div>
                    <div className="text-sm text-gray-600">
                      Certified Green Building
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Leading the industry in sustainable hospitality practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Community Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Giving Back to Our{" "}
              <span className="text-amber-600">Community</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in making a positive impact beyond our hotel walls
              through community partnerships, charitable initiatives, and local
              support programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-amber-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Local Employment
              </h3>
              <p className="text-gray-600 mb-4">
                Over 90% of our team members are from the local community,
                supporting families and economic growth.
              </p>
              <div className="text-2xl font-bold text-amber-600">450+</div>
              <div className="text-sm text-gray-600">Local Jobs Created</div>
            </div>

            <div className="text-center p-8 bg-amber-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Charitable Giving
              </h3>
              <p className="text-gray-600 mb-4">
                Annual donations and support to local charities, schools, and
                community organizations.
              </p>
              <div className="text-2xl font-bold text-amber-600">$500K+</div>
              <div className="text-sm text-gray-600">Annual Donations</div>
            </div>

            <div className="text-center p-8 bg-amber-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Local Partnerships
              </h3>
              <p className="text-gray-600 mb-4">
                Partnering with local businesses, suppliers, and artisans to
                support the local economy.
              </p>
              <div className="text-2xl font-bold text-amber-600">150+</div>
              <div className="text-sm text-gray-600">Local Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
