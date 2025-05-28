import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import {ChevronDown,ChevronUp,} from "lucide-react"

function navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 
     const [isAboutUsMobileOpen, setIsAboutUsMobileOpen] = useState(false);
  const [isOurVehiclesMobileOpen, setIsOurVehiclesMobileOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isInfosMobileOpen, setIsInfosMobileOpen] = useState(false);
    const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <div>
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
        
                  {/* Action buttons and Mobile Toggle */}
                  <div className="flex items-center space-x-3">
                    {/* Desktop action buttons - hidden on small screens */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium hidden md:block">
                      📋 GET A QUOTE
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium hidden md:block">
                      📞 (+91) 93240 48224
                    </button>
        
                    {/* Mobile Navigation Toggle button (Hamburger/Close Icon) */}
                    
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
                    
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium w-full mt-6">
                      📋 GET A QUOTE
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium w-full">
                      📞 (+91) 93240 48224
                    </button>
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

    </div>
  )
}

export default navbar