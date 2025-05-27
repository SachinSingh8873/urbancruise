"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {Phone,MessageCircle,Mail,Facebook,Twitter,Linkedin,Youtube,Instagram,Users,Clock,Shield,Star,MapPin,} from "lucide-react"
import Image from "next/image";
import { useState } from "react";
import {ChevronDown,ChevronUp,} from "lucide-react"
import Location from "./Location";

export default function UrbanCruisePage() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 
  const [isAboutUsMobileOpen, setIsAboutUsMobileOpen] = useState(false);
  const [isOurVehiclesMobileOpen, setIsOurVehiclesMobileOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isInfosMobileOpen, setIsInfosMobileOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#7ED321] px-4 py-3 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
          {/* Logo - Positioned absolutely relative to the header with white rounded background */}
          <div className="absolute left-4 bottom-0 translate-y-1/2 z-30 bg-white p-2 rounded-full flex items-center justify-center shadow-lg">
            <Image
              src="/images/logo.jpg"
              alt="Urban Cruise Logo"
              width={160}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation with inline styles for dropdowns */}
          <nav className={`hidden md:flex items-center ml-[240px]`}>
            <ul className="flex space-x-8"> {/* Adjusted for horizontal desktop navigation */}
              {/* About Us dropdown */}
              <li className="relative group">
                <a href="#" className="text-white hover:text-gray-200 font-medium px-2 py-3 inline-block">ABOUT US</a>
                <ul className="absolute hidden group-hover:block top-full left-0 min-w-max bg-gray-800 shadow-lg rounded-md py-2 space-y-1">
                  <li><a href="#AboutUS" className="block px-4 py-2 text-white hover:bg-gray-700">About US</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Careers</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Partner Program</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Happy Customers</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Contact Us</a></li>
                </ul>
              </li>

              {/* Our Vehicles dropdown */}
              <li className="relative group">
                <a href="#" className="text-white hover:text-gray-200 font-medium px-2 py-3 inline-block">OUR VEHICLES</a>
                <ul className="absolute hidden group-hover:block top-full left-0 min-w-max bg-gray-800 shadow-lg rounded-md py-2 space-y-1">
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Cars & SUVs</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Luxury Cars, SUVs, Vans</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Tempo Traveler</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Mini Bus</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Luxury Bus</a></li>
                </ul>
              </li>

              {/* Service Offered dropdown */}
              <li className="relative group">
                <a href="#" className="text-white hover:text-gray-200 font-medium px-2 py-3 inline-block">SERVICES</a>
                <ul className="absolute hidden group-hover:block top-full left-0 min-w-max bg-gray-800 shadow-lg rounded-md py-2 space-y-1">
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Airport Transfers</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Corporate Bus Rental</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sightseeing Tours</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Outstation Taxi</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Wedding Car Rental</a></li>
                </ul>
              </li>

              {/* More/Info's dropdown */}
              <li className="relative group">
                <a href="#" className="text-white hover:text-gray-200 font-medium px-2 py-3 inline-block">INFO'S</a>
                <ul className="absolute hidden group-hover:block top-full left-0 min-w-max bg-gray-800 shadow-lg rounded-md py-2 space-y-1">
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">FAQ’s</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Blog</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">News & Media</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Action Buttons and Mobile Toggle */}
          <div className="flex items-center space-x-3">
            {/* Desktop action buttons - hidden on small screens */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium hidden md:block">
              📋 GET A QUOTE
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium hidden md:block">
              📞 (+91) 93240 48224
            </Button>

            {/* Mobile Navigation Toggle Button (Hamburger/Close Icon) */}
            
          </div>
          <button
              onClick={toggleMobileNav}
              className="md:hidden text-white focus:outline-none ml-auto"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
        </div>

        {/* Mobile Navigation Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-gray-800 text-white p-5 transform transition-transform ease-in-out duration-300 md:hidden z-40
            ${isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            onClick={toggleMobileNav}
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            aria-label="Close navigation"
          >
            &times;
          </button>
        <nav className="flex flex-col space-y-2 mt-16">
            {/* About Us dropdown for mobile */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left text-lg hover:text-gray-300 py-2"
                onClick={() => setIsAboutUsMobileOpen(!isAboutUsMobileOpen)}
              >
                ABOUT US
                {isAboutUsMobileOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {isAboutUsMobileOpen && (
                <ul className="bg-gray-700 py-2 space-y-1 pl-4">
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>About US</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Careers</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Partner Program</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Happy Customers</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Contact Us</a></li>
                </ul>
              )}
            </div>

            {/* Our Vehicles dropdown for mobile */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left text-lg hover:text-gray-300 py-2"
                onClick={() => setIsOurVehiclesMobileOpen(!isOurVehiclesMobileOpen)}
              >
                OUR VEHICLES
                {isOurVehiclesMobileOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {isOurVehiclesMobileOpen && (
                <ul className="bg-gray-700 py-2 space-y-1 pl-4">
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Cars & SUVs</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Luxury Cars, SUVs, Vans</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Tempo Traveler</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Mini Bus</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Luxury Bus</a></li>
                </ul>
              )}
            </div>

            {/* Services dropdown for mobile */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left text-lg hover:text-gray-300 py-2"
                onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
              >
                SERVICES
                {isServicesMobileOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {isServicesMobileOpen && (
                <ul className="bg-gray-700 py-2 space-y-1 pl-4">
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Airport Transfers</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Corporate Bus Rental</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Sightseeing Tours</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Outstation Taxi</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Wedding Car Rental</a></li>
                </ul>
              )}
            </div>

            {/* Info's dropdown for mobile */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left text-lg hover:text-gray-300 py-2"
                onClick={() => setIsInfosMobileOpen(!isInfosMobileOpen)}
              >
                INFO'S
                {isInfosMobileOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {isInfosMobileOpen && (
                <ul className="bg-gray-700 py-2 space-y-1 pl-4">
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>FAQ’s</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>Blog</a></li>
                  <li><a href="#" className="block px-2 py-1 text-white hover:bg-gray-600" onClick={toggleMobileNav}>News & Media</a></li>
                </ul>
              )}
            </div>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium w-full mt-6">
              📋 GET A QUOTE
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium w-full">
              📞 (+91) 93240 48224
            </Button>
          </nav>
        </div>

        {/* Overlay for mobile nav */}
        {isMobileNavOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-35 md:hidden"
            onClick={toggleMobileNav}
          ></div>
        )}
      </header>

      {/* Hero Section */}
   <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url(`/images/hero-bg.jpg`)" }}
>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Social Media Icons */}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col space-y-2">
            <div className="bg-blue-600 p-2 rounded-r-lg">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="bg-blue-400 p-2 rounded-r-lg">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div className="bg-blue-700 p-2 rounded-r-lg">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div className="bg-red-600 p-2 rounded-r-lg">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <div className="bg-pink-600 p-2 rounded-r-lg">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col space-y-3">
            <Button className="bg-green-500 hover:bg-green-600 rounded-full p-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3">
              <Phone className="w-6 h-6 text-white" />
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3">
              <Mail className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            {/* Main Heading */}
            <h1
              className="text-6xl md:text-7xl font-bold text-yellow-400 mb-6"
              style={{
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.7), -1px -1px 0px rgba(139,69,19,1), 1px -1px 0px rgba(139,69,19,1), -1px 1px 0px rgba(139,69,19,1), 1px 1px 0px rgba(139,69,19,1)",
              }}
            >
              Tempo Traveller Rental
              <br />
              in Delhi
            </h1>

            {/* Subheading */}
            <h2
              className="text-4xl font-bold text-green-400 mb-8"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              }}
            >
              Hire Tempo Travellers on Rent
            </h2>

            {/* Description */}
            <div className="text-white text-xl mb-4">
              <p className="mb-2">Experience our Premium, Royal & ROYAL VIP</p>
              <p className="mb-2">Class Tempo Travellers for a memorable Ride</p>
              <div className="bg-yellow-400 text-black px-6 py-2 inline-block font-bold text-lg">
                in Delhi, NOIDA, Gurugram
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-4 border-green-400 rounded-3xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Input placeholder="Name" className="border-2 border-green-300 rounded-xl py-3 px-4 text-lg" />
                  <div className="flex">
                    <div className="flex items-center bg-gray-100 border-2 border-green-300 rounded-l-xl px-3">
                      <span className="text-sm">🇺🇸 +1</span>
                    </div>
                    <Input
                      placeholder="Phone Number"
                      className="border-2 border-green-300 border-l-0 rounded-r-xl rounded-l-none py-3 px-4 text-lg flex-1"
                    />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-bold">
                    SUBMIT
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-2">HIRE TEMPO TRAVELLER IN DELHI</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Tempo Traveller on Rent in Delhi</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  A <strong>Tempo Traveller (or Force Traveller)</strong> is the most convenient option for travelling
                  with Friends or Family members. Manufactured by <strong>Force Motors</strong>, it can accommodate{" "}
                  <strong>9 to 26 passengers</strong> & take them from one destination to another in a comfortable
                  manner.
                </p>
                <p>
                  Our tempo travellers are well-maintained, clean, and equipped with modern amenities to ensure your
                  journey is comfortable and safe. Whether you're planning a family trip, corporate outing, or group
                  tour, our vehicles are perfect for all occasions.
                </p>
              </div>
            </div>

            <div className="bg-green-500 rounded-lg p-6 text-white relative">
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full p-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">UC</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold">Urban Cruise - Bus Rental Services | Innova, Tempo...</div>
                  <div className="text-sm opacity-90">24 Hour Live Support</div>
                </div>
              </div>
              <div className="mt-4 text-sm">Hi, How can I help you?</div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Share</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Tempo Traveller Fleet</h2>
            <p className="text-gray-600 text-lg">Choose from our wide range of well-maintained vehicles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">9 Seater Tempo Traveller</h3>
                  <p className="text-gray-600 mb-4">Perfect for small groups and family trips</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• AC & Non-AC Available</li>
                    <li>• Comfortable Seating</li>
                    <li>• Music System</li>
                    <li>• First Aid Kit</li>
                  </ul>
                  <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">12 Seater Tempo Traveller</h3>
                  <p className="text-gray-600 mb-4">Ideal for medium-sized groups</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Luxury Interiors</li>
                    <li>• Push Back Seats</li>
                    <li>• LED TV</li>
                    <li>• Mobile Charging Points</li>
                  </ul>
                  <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">17-26 Seater Tempo Traveller</h3>
                  <p className="text-gray-600 mb-4">Best for large groups and corporate trips</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Premium Luxury</li>
                    <li>• Sofa Seating</li>
                    <li>• Mini Fridge</li>
                    <li>• Professional Driver</li>
                  </ul>
                  <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Urban Cruise?</h2>
            <p className="text-gray-600 text-lg">Experience the best tempo traveller rental service in Delhi</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round the clock customer support and service availability</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Well-maintained vehicles with experienced drivers</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Best Rates</h3>
              <p className="text-gray-600">Competitive pricing with no hidden charges</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Wide Coverage</h3>
              <p className="text-gray-600">Service available across Delhi, NCR, and nearby cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service Areas</h2>
            <p className="text-gray-600 text-lg">We provide tempo traveller rental services across these locations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Delhi NCR</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• New Delhi</li>
                  <li>• Gurgaon</li>
                  <li>• Noida</li>
                  <li>• Faridabad</li>
                  <li>• Ghaziabad</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Destinations</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Agra</li>
                  <li>• Jaipur</li>
                  <li>• Haridwar</li>
                  <li>• Rishikesh</li>
                  <li>• Manali</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hill Stations</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Shimla</li>
                  <li>• Mussoorie</li>
                  <li>• Nainital</li>
                  <li>• Dharamshala</li>
                  <li>• Kasauli</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">No hidden charges, pay only for what you use</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg border-2 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Local Trips</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>9 Seater (8 Hours/80 KM)</span>
                    <span className="font-bold">₹2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12 Seater (8 Hours/80 KM)</span>
                    <span className="font-bold">₹3,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>17 Seater (8 Hours/80 KM)</span>
                    <span className="font-bold">₹4,500</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">Book Local Trip</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-2 border-orange-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Outstation Trips</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>9 Seater (Per KM)</span>
                    <span className="font-bold">₹18-22</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12 Seater (Per KM)</span>
                    <span>₹22-26</span>
                  </div>
                  <div className="flex justify-between">
                    <span>17 Seater (Per KM)</span>
                    <span className="font-bold">₹28-32</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                  Book Outstation Trip
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              * Prices may vary based on season, fuel prices, and specific requirements. Driver allowance and toll
              charges are additional.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-[#7ED321]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Book Your Tempo Traveller?</h2>
          <p className="text-white text-lg mb-8">Contact us now for instant booking and best rates</p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-bold rounded-full">
              📞 Call Now: (+91) 93240 48224
            </Button>
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold rounded-full">
              💬 WhatsApp Us
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-bold rounded-full">
              📧 Email Quote
            </Button>
          </div>
        </div>
      </section>
{<Location />}
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-lg p-2 mr-3">
                  <div className="text-xl font-bold">
                    <span className="text-pink-500">U</span>
                    <span className="text-green-500">C</span>
                  </div>
                </div>
                <div className="text-xl font-bold">Urban Cruise</div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for tempo traveller rental services in Delhi NCR. Safe, comfortable, and affordable
                transportation solutions.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
                <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer" />
                <Youtube className="w-6 h-6 text-red-400 hover:text-red-300 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Local Trips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Outstation Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Corporate Travel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wedding Transportation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Airport Transfers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>(+91) 93240 48224</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@urbancruise.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Delhi, NCR, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Urban Cruise. All rights reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  )
}