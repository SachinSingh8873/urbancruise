"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram, Users, Clock, Shield, Star, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Second from "./second";
import Navbar from "./Navbar"; 
import First from "./First"; 
import Location from "./Location"; 
// import { WOW } from "wowjs";
import "animate.css/animate.min.css";
import Head from 'next/head';



export default function UrbanCruisePage() {


  return (
       
    <div className="min-h-screen bg-white">
      <Head>
        <title>Urban Cruise - Tempo Traveller in Delhi</title>
        <meta name="description" content="Book Tempo Traveller on rent in Delhi with Urban Cruise." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {<Navbar />}
      {<First />}
      {<Second />}

      {/* Vehicle Types Section */}
    <section className="py-16 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Tempo Traveller Fleet</h2>
      <p className="text-gray-600 text-lg">Choose from our wide range of well-maintained vehicles</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* 9 Seater Tempo Traveller Card */}
      <div className="bg-white shadow-lg hover:shadow-xl transition-shadow p-6"> {/* Card and CardContent classes combined */}
        <div className="text-center">
          <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            {/* Assuming Users icon is imported from lucide-react */}
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
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">Book Now</button>
        </div>
      </div>

      {/* 12 Seater Tempo Traveller Card */}
      <div className="bg-white shadow-lg hover:shadow-xl transition-shadow p-6"> {/* Card and CardContent classes combined */}
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
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">Book Now</button>
        </div>
      </div>

      {/* 17-26 Seater Tempo Traveller Card */}
      <div className="bg-white shadow-lg hover:shadow-xl transition-shadow p-6"> {/* Card and CardContent classes combined */}
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
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">Book Now</button>
        </div>
      </div>
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
      {/* Delhi NCR Service Area Card */}
      <div className="bg-white shadow-lg p-6"> {/* Card and CardContent classes combined */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Delhi NCR</h3>
        <ul className="text-gray-600 space-y-2">
          <li>• New Delhi</li>
          <li>• Gurgaon</li>
          <li>• Noida</li>
          <li>• Faridabad</li>
          <li>• Ghaziabad</li>
        </ul>
      </div>

      {/* Popular Destinations Service Area Card */}
      <div className="bg-white shadow-lg p-6"> {/* Card and CardContent classes combined */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Destinations</h3>
        <ul className="text-gray-600 space-y-2">
          <li>• Agra</li>
          <li>• Jaipur</li>
          <li>• Haridwar</li>
          <li>• Rishikesh</li>
          <li>• Manali</li>
        </ul>
      </div>

      {/* Hill Stations Service Area Card */}
      <div className="bg-white shadow-lg p-6"> {/* Card and CardContent classes combined */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Hill Stations</h3>
        <ul className="text-gray-600 space-y-2">
          <li>• Shimla</li>
          <li>• Mussoorie</li>
          <li>• Nainital</li>
          <li>• Dharamshala</li>
          <li>• Kasauli</li>
        </ul>
      </div>
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
      {/* Local Trips Pricing Card */}
      <div className="bg-white shadow-lg border-2 border-green-200 p-8"> {/* Card and CardContent classes combined */}
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
        <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">Book Local Trip</button>
      </div>

      {/* Outstation Trips Pricing Card */}
      <div className="bg-white shadow-lg border-2 border-orange-200 p-8"> {/* Card and CardContent classes combined */}
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
        <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
          Book Outstation Trip
        </button>
      </div>
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-bold rounded-full">
              📞 Call Now: (+91) 93240 48224
            </button>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold rounded-full">
              💬 WhatsApp Us
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-bold rounded-full">
              📧 Email Quote
            </button>
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